<script setup lang="ts">
useSeoMeta({
  title: 'Publications',
  description: 'Publications by categories in reversed chronological order.',
})

const { data: publications } = await useAsyncData('all-publications', () =>
  queryContent('/publications').sort({ year: -1 }).find(),
)

const grouped = computed(() => {
  const map = new Map<number, any[]>()
  for (const pub of publications.value || []) {
    const y = Number(pub.year)
    if (!map.has(y)) map.set(y, [])
    map.get(y)!.push(pub)
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0])
})
</script>

<template>
  <div class="space-y-12">
    <header class="space-y-3 border-b hairline pb-6">
      <h1>publications</h1>
      <p class="soft max-w-prose">
        Peer-reviewed research on cyber threat hunting, adversary emulation and threat
        intelligence for critical infrastructures — in reverse chronological order.
      </p>
    </header>

    <section v-for="[year, items] in grouped" :key="year" class="space-y-4">
      <h2 class="!text-4xl font-serif text-[rgb(var(--fg-mute))]">
        {{ year }}
      </h2>
      <PublicationList :items="items" />
    </section>

    <p v-if="!publications || publications.length === 0" class="muted italic">
      No publications listed yet.
    </p>
  </div>
</template>
