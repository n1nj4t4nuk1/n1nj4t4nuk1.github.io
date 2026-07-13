<script setup lang="ts">
const socials = useSocials()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t hairline mt-24">
    <div class="container-page py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p class="muted">
        © {{ year }} Javier Parada.
      </p>
      <div class="flex items-center gap-4">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          :aria-label="s.label"
          :target="s.name === 'email' ? '_self' : '_blank'"
          rel="noopener noreferrer"
          class="text-[rgb(var(--fg-mute))] hover:text-[rgb(var(--fg))] transition-colors"
        >
          <Icon :name="s.icon" class="w-[18px] h-[18px]" />
        </a>
      </div>
    </div>
  </footer>
</template>
