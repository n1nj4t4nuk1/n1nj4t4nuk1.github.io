<script setup lang="ts">
const nav = [
  { label: 'about', to: '/' },
  { label: 'publications', to: '/publications' },
  { label: 'projects', to: '/projects' },
  { label: 'cv', to: '/cv' },
  { label: 'news', to: '/news' },
  { label: 'blog', to: '/blog' },
]

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <header class="border-b hairline sticky top-0 z-30 backdrop-blur bg-[rgb(var(--bg)/0.85)]">
    <div class="container-page flex items-center justify-between h-16">
      <NuxtLink
        to="/"
        class="font-serif text-2xl tracking-tight text-[rgb(var(--fg))] hover:opacity-80"
      >
        Javier Parada
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

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="p-2 rounded-full hover:bg-[rgb(var(--bg-soft))] transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Icon
            :name="isDark ? 'lucide:sun' : 'lucide:moon'"
            class="w-5 h-5 text-[rgb(var(--fg-soft))]"
          />
        </button>
      </div>
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
