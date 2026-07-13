<script setup lang="ts">
interface Publication {
  _path?: string
  title: string
  authors: string[]
  venue?: string
  year: number | string
  abbr?: string
  preview?: string
  pdf?: string
  doi?: string
  url?: string
  bibtex?: string
  selected?: boolean
}

defineProps<{ items: Publication[] }>()

const formatAuthors = (authors: string[]) =>
  authors.map((a) => a.replace(/\{|\}/g, ''))
</script>

<template>
  <ul class="divide-y hairline border-y hairline">
    <li v-for="pub in items" :key="pub.title" class="py-6">
      <div class="grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-5">
        <div class="hidden md:flex items-start">
          <img
            v-if="pub.preview"
            :src="`/img/${pub.preview}`"
            :alt="pub.title"
            class="w-28 h-28 object-contain rounded-sm border hairline p-2 bg-[rgb(var(--bg-soft))]"
          />
          <div
            v-else
            class="w-28 h-28 rounded-sm border hairline bg-[rgb(var(--bg-soft))] flex items-center justify-center text-xs muted font-mono"
          >
            {{ pub.abbr || pub.year }}
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-serif text-xl leading-snug">
            {{ pub.title }}
          </h3>
          <p class="text-sm soft leading-relaxed">
            <template v-for="(a, i) in formatAuthors(pub.authors)" :key="i">
              <span :class="a.trim() === 'Parada, Javier' ? 'font-medium text-[rgb(var(--fg))]' : ''">
                {{ a }}
              </span>
              <span v-if="i < pub.authors.length - 1">, </span>
            </template>
          </p>
          <p class="text-sm">
            <em class="text-[rgb(var(--fg-soft))]">{{ pub.venue }}</em>
            <span v-if="pub.year" class="muted"> · {{ pub.year }}</span>
          </p>
          <div class="flex flex-wrap gap-2 pt-1 text-xs">
            <span
              v-if="pub.abbr"
              class="inline-flex items-center px-2 py-1 rounded-sm border hairline text-[rgb(var(--fg-soft))] font-mono"
            >
              {{ pub.abbr }}
            </span>
            <a
              v-if="pub.pdf"
              :href="pub.pdf"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-sm border hairline text-[rgb(var(--fg-soft))] hover:text-[rgb(var(--accent))]"
            >
              <Icon name="lucide:file-text" class="w-3 h-3" /> PDF
            </a>
            <a
              v-if="pub.doi"
              :href="`https://doi.org/${pub.doi}`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-sm border hairline text-[rgb(var(--fg-soft))] hover:text-[rgb(var(--accent))]"
            >
              <Icon name="lucide:external-link" class="w-3 h-3" /> DOI
            </a>
            <a
              v-if="pub.url"
              :href="pub.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-sm border hairline text-[rgb(var(--fg-soft))] hover:text-[rgb(var(--accent))]"
            >
              <Icon name="lucide:link" class="w-3 h-3" /> link
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
