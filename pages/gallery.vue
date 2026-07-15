<script setup lang="ts">
interface Photo {
  title: string
  image: string
  link?: string
  tags: string[]
  caption?: string
  date?: string
}

useSeoMeta({
  title: 'Gallery',
  description: 'A selection of my favourite photos, pulled from Flickr.',
})

const PAGE_SIZE = 24

const { data: photos } = await useAsyncData<Photo[]>('gallery', () =>
  $fetch<Photo[]>('/gallery.json').catch(() => [] as Photo[]),
)

const activeTag = ref<string | null>(null)
const visibleCount = ref(PAGE_SIZE)

const allTags = computed(() => {
  const set = new Set<string>()
  for (const p of photos.value || []) for (const t of p.tags) set.add(t)
  return [...set].sort()
})

const filteredPhotos = computed(() => {
  const list = photos.value || []
  if (!activeTag.value) return list
  return list.filter((p) => p.tags.includes(activeTag.value!))
})

const visiblePhotos = computed(() => filteredPhotos.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < filteredPhotos.value.length)

const setTag = (tag: string | null) => {
  activeTag.value = activeTag.value === tag ? null : tag
  visibleCount.value = PAGE_SIZE
}

const sentinel = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sentinel.value || typeof IntersectionObserver === 'undefined') return
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && hasMore.value) {
          visibleCount.value = Math.min(
            visibleCount.value + PAGE_SIZE,
            filteredPhotos.value.length,
          )
        }
      }
    },
    { rootMargin: '600px 0px' },
  )
  observer.observe(sentinel.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div class="space-y-12">
    <header class="space-y-3 border-b hairline pb-6">
      <h1>Gallery</h1>
      <p class="soft max-w-prose">
        A selection of my favourite photos, pulled from
        <a href="https://www.flickr.com/photos/tanukifilm/" target="_blank" rel="noopener">Flickr</a>.
        Filter by tag below.
      </p>
    </header>

    <div v-if="allTags.length" class="flex flex-wrap items-center gap-2">
      <button
        type="button"
        class="text-xs font-mono uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border hairline transition-colors"
        :class="
          activeTag === null
            ? 'bg-[rgb(var(--accent))] text-[rgb(var(--bg))] border-[rgb(var(--accent))]'
            : 'text-[rgb(var(--fg-soft))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]'
        "
        @click="setTag(null)"
      >
        All · {{ (photos || []).length }}
      </button>
      <button
        v-for="tag in allTags"
        :key="tag"
        type="button"
        class="text-xs font-mono uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border hairline transition-colors"
        :class="
          activeTag === tag
            ? 'bg-[rgb(var(--accent))] text-[rgb(var(--bg))] border-[rgb(var(--accent))]'
            : 'text-[rgb(var(--fg-soft))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]'
        "
        @click="setTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <div
      v-if="visiblePhotos.length"
      class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
    >
      <figure
        v-for="photo in visiblePhotos"
        :key="photo.image"
        class="mb-4 break-inside-avoid group relative overflow-hidden rounded-lg border hairline surface-tint"
      >
        <a
          v-if="photo.link"
          :href="photo.link"
          target="_blank"
          rel="noopener"
          class="block"
        >
          <img
            :src="photo.image"
            :alt="photo.title"
            loading="lazy"
            decoding="async"
            class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <figcaption
            class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[rgb(0_0_0/0.7)] via-[rgb(0_0_0/0.35)] to-transparent text-[rgb(var(--bg))] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="font-serif text-base leading-tight">{{ photo.title }}</div>
            <div v-if="photo.caption && photo.caption !== photo.title" class="text-xs opacity-80 mt-0.5">
              {{ photo.caption }}
            </div>
          </figcaption>
        </a>
        <template v-else>
          <img
            :src="photo.image"
            :alt="photo.title"
            loading="lazy"
            decoding="async"
            class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </template>
      </figure>
    </div>

    <p v-else class="muted italic">
      <template v-if="(photos || []).length === 0">
        No photos yet, come back soon.
      </template>
      <template v-else>
        No photos match the selected tag.
      </template>
    </p>

    <div ref="sentinel" class="h-4" />

    <p v-if="hasMore" class="muted text-xs text-center font-mono">
      Loading more…
    </p>
  </div>
</template>
