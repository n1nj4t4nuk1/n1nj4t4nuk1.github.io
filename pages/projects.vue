<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  description: 'A growing collection of open-source projects.',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryContent('/projects').sort({ importance: -1 }).find(),
)

const categories = computed(() => {
  const map = new Map<string, any[]>()
  for (const p of projects.value || []) {
    const cat = (p.category as string) || 'other'
    if (!map.has(cat)) map.set(cat, [])
    map.get(cat)!.push(p)
  }
  const order = ['working', 'legacy', 'other']
  return [...map.entries()].sort(
    (a, b) => order.indexOf(a[0]) - order.indexOf(b[0]),
  )
})
</script>

<template>
  <div class="space-y-14">
    <header class="space-y-3 border-b hairline pb-6">
      <h1>Projects</h1>
      <p class="soft max-w-prose">
        A growing collection of open-source projects — templates, tools and utilities
        I've built over the years.
      </p>
    </header>

    <section v-for="[cat, items] in categories" :key="cat" class="space-y-6">
      <h2 class="!text-3xl font-serif capitalize">{{ cat }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="p in items"
          :key="p._path"
          :href="p.url"
          target="_blank"
          rel="noopener"
          class="group block p-5 border hairline rounded-sm hover:border-[rgb(var(--accent))] transition-colors bg-[rgb(var(--bg-soft))]/40"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="!text-xl font-serif leading-tight">
              {{ p.title }}
            </h3>
            <Icon
              name="lucide:arrow-up-right"
              class="w-4 h-4 mt-2 muted group-hover:text-[rgb(var(--accent))] transition-colors"
            />
          </div>
          <p class="text-sm soft mt-2 leading-relaxed">{{ p.description }}</p>
          <div v-if="p.stack" class="flex flex-wrap gap-1.5 mt-4">
            <span
              v-for="tag in p.stack"
              :key="tag"
              class="text-[10px] font-mono uppercase tracking-wider muted px-1.5 py-0.5 border hairline rounded-sm"
            >
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
