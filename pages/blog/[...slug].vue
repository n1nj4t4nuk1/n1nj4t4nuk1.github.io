<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent(route.path).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>

<template>
  <article v-if="post" class="max-w-prose mx-auto space-y-6">
    <header class="space-y-3 border-b hairline pb-6">
      <p class="muted text-xs font-mono">
        {{ post.date ? new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' }) : '' }}
      </p>
      <h1>{{ post.title }}</h1>
      <p v-if="post.description" class="soft text-lg">{{ post.description }}</p>
    </header>

    <div class="prose prose-neutral dark:prose-invert prose-lg max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
