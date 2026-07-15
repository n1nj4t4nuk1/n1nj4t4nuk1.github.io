<script setup lang="ts">
useSeoMeta({
  title: 'Gallery',
  description: 'A small selection of my favourite photos.',
})

const photos = useGallery()

const allTags = computed(() => {
  const set = new Set<string>()
  for (const p of photos) for (const t of p.tags) set.add(t)
  return [...set].sort()
})

const activeTag = ref<string | null>(null)

const visiblePhotos = computed(() => {
  if (!activeTag.value) return photos
  return photos.filter((p) => p.tags.includes(activeTag.value!))
})

const setTag = (tag: string | null) => {
  activeTag.value = activeTag.value === tag ? null : tag
}
</script>

<template>
  <div class="space-y-12">
    <header class="space-y-3 border-b hairline pb-6">
      <h1>Gallery</h1>
      <p class="soft max-w-prose">
        A small selection of my favourite photos. Filter by tag below.
      </p>
    </header>

    <!-- Tag filter -->
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
        All
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

    <!-- Masonry gallery via CSS columns -->
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
            class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <figcaption
            class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[rgb(0_0_0/0.7)] via-[rgb(0_0_0/0.35)] to-transparent text-[rgb(var(--bg))] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="font-serif text-base leading-tight">{{ photo.title }}</div>
            <div v-if="photo.caption" class="text-xs opacity-80 mt-0.5">
              {{ photo.caption }}
            </div>
          </figcaption>
        </a>
        <template v-else>
          <img
            :src="photo.image"
            :alt="photo.title"
            loading="lazy"
            class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <figcaption
            class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[rgb(0_0_0/0.7)] via-[rgb(0_0_0/0.35)] to-transparent text-[rgb(var(--bg))] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="font-serif text-base leading-tight">{{ photo.title }}</div>
            <div v-if="photo.caption" class="text-xs opacity-80 mt-0.5">
              {{ photo.caption }}
            </div>
          </figcaption>
        </template>
      </figure>
    </div>

    <p v-else class="muted italic">
      <template v-if="photos.length === 0">
        No photos yet, come back soon.
      </template>
      <template v-else>
        No photos match the selected tag.
      </template>
    </p>
  </div>
</template>
