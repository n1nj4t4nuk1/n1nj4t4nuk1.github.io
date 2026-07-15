<script setup lang="ts">
const nav = [
  { label: 'About', to: '/' },
  { label: 'Publications', to: '/publications' },
  { label: 'Projects', to: '/projects' },
  { label: 'CV', to: '/cv' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
]
</script>

<template>
  <header class="border-b hairline sticky top-0 z-30 backdrop-blur bg-[rgb(var(--bg)/0.9)]">
    <div class="container-page flex items-center justify-between h-16">
      <NuxtLink
        to="/"
        class="font-serif text-2xl tracking-tight text-[rgb(var(--fg))] hover:opacity-80"
      >
        Javier <span class="italic accent-text">Parada</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-7 text-sm">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="soft hover:text-[rgb(var(--fg))] transition-colors"
          active-class="text-[rgb(var(--fg))] font-medium"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

    </div>

    <nav class="md:hidden container-page flex items-center gap-5 pb-3 text-sm overflow-x-auto">
      <NuxtLink
        v-for="item in nav"
        :key="item.to"
        :to="item.to"
        class="soft whitespace-nowrap hover:text-[rgb(var(--fg))]"
        active-class="text-[rgb(var(--fg))] font-medium"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
