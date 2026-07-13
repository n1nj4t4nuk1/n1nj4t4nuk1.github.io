<script setup lang="ts">
useSeoMeta({
  title: 'CV',
  description: 'Curriculum Vitae — Javier Parada',
})

interface TimelineEntry {
  role: string
  where: string
  location?: string
  period: string
  bullets?: string[]
}

const education: TimelineEntry[] = [
  {
    role: 'Ph.D. in Cybersecurity',
    where: 'University of Málaga · NicsLab, Ada Byron Research Institute',
    location: 'Málaga, Spain',
    period: 'ongoing',
    bullets: [
      'Cyber Threat Hunting, Adversary Emulation and Threat Intelligence for critical infrastructures.',
      'Digital twins and reinforcement learning for adaptive adversary emulation in IIoT.',
    ],
  },
]

const experience: TimelineEntry[] = [
  {
    role: 'Cybersecurity Researcher',
    where: 'Eurecat — Technology Centre of Catalonia',
    location: 'Barcelona, Spain',
    period: 'present',
    bullets: [
      'Applied research on threat detection, adversary emulation and threat intelligence.',
      'Collaboration with European projects on OT/ICS security.',
    ],
  },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Basque', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Japanese', level: 'Elementary' },
]
</script>

<template>
  <div class="space-y-14">
    <header class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b hairline pb-6">
      <div class="space-y-2">
        <h1>cv</h1>
        <p class="soft max-w-prose">
          A brief overview of my professional background — key experience, research
          interests and languages. Full detailed version available as PDF.
        </p>
      </div>
      <a
        href="/pdf/cv.pdf"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-4 py-2 border hairline rounded-sm text-sm hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] transition-colors self-start md:self-auto"
      >
        <Icon name="lucide:file-down" class="w-4 h-4" />
        Download PDF
      </a>
    </header>

    <section class="space-y-6">
      <h2 class="!text-3xl">education</h2>
      <ol class="space-y-6">
        <li v-for="e in education" :key="e.role" class="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
          <div class="muted text-sm font-mono pt-1">{{ e.period }}</div>
          <div class="space-y-1.5">
            <h3 class="!text-xl">{{ e.role }}</h3>
            <p class="soft">{{ e.where }}<span v-if="e.location"> · {{ e.location }}</span></p>
            <ul v-if="e.bullets" class="list-disc list-outside ml-4 space-y-1 text-sm soft pt-1">
              <li v-for="b in e.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">experience</h2>
      <ol class="space-y-6">
        <li v-for="e in experience" :key="e.role" class="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
          <div class="muted text-sm font-mono pt-1">{{ e.period }}</div>
          <div class="space-y-1.5">
            <h3 class="!text-xl">{{ e.role }}</h3>
            <p class="soft">{{ e.where }}<span v-if="e.location"> · {{ e.location }}</span></p>
            <ul v-if="e.bullets" class="list-disc list-outside ml-4 space-y-1 text-sm soft pt-1">
              <li v-for="b in e.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">languages</h2>
      <ul class="divide-y hairline border-y hairline">
        <li v-for="l in languages" :key="l.name" class="py-3 flex justify-between text-sm">
          <span>{{ l.name }}</span>
          <span class="muted">{{ l.level }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
