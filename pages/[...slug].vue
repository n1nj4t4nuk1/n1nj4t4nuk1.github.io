<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`, () =>
  queryContent(route.path).findOne(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <article v-if="page" class="max-w-prose mx-auto space-y-6">
    <header v-if="page.title" class="space-y-2 border-b hairline pb-6">
      <h1>{{ page.title }}</h1>
      <p v-if="page.description" class="soft text-lg">{{ page.description }}</p>
    </header>

    <div class="prose prose-neutral dark:prose-invert max-w-none">
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>
