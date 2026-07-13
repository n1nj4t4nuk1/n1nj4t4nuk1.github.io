<script setup lang="ts">
useSeoMeta({ title: 'News' })

const { data: items } = await useAsyncData('news', () =>
  queryContent('/news').sort({ date: -1 }).find(),
)
</script>

<template>
  <div class="space-y-10">
    <header class="space-y-3 border-b hairline pb-6">
      <h1>News</h1>
      <p class="soft max-w-prose">Announcements, milestones and updates.</p>
    </header>

    <ul class="divide-y hairline border-y hairline">
      <li v-for="item in items" :key="item._path" class="py-5 grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-3">
        <time class="muted font-mono text-xs pt-1">
          {{ new Date(item.date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' }) }}
        </time>
        <div class="soft leading-relaxed">
          <ContentRenderer :value="item" />
        </div>
      </li>
    </ul>

    <p v-if="!items || items.length === 0" class="muted italic">No news yet.</p>
  </div>
</template>
