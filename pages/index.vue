<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description:
    'Cybersecurity researcher — Cyber Threat Hunting, Adversary Emulation and Threat Intelligence for critical infrastructures.',
})

const socials = useSocials()

const { data: news } = await useAsyncData('home-news', () =>
  queryContent('/news').sort({ date: -1 }).limit(4).find(),
)

const { data: publications } = await useAsyncData('home-publications', () =>
  queryContent('/publications')
    .where({ selected: true })
    .sort({ year: -1 })
    .find(),
)
</script>

<template>
  <div class="space-y-20">
    <!-- Hero -->
    <section class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-start">
      <div class="space-y-5 max-w-prose">
        <h1 class="!text-[3.25rem] md:!text-[3.75rem] font-serif">
          Javier Parada
        </h1>
        <p class="soft text-lg leading-relaxed">
          <a href="https://eurecat.org/home/en/" target="_blank" rel="noopener">Eurecat Technology Centre</a> · Barcelona, Spain.
          <a href="https://www.uma.es/" target="_blank" rel="noopener">University of Malaga</a> · Malaga, Spain.
        </p>

        <div class="pt-1 space-y-4 text-[0.98rem] leading-[1.75]">
          <p>
            I'm a cybersecurity researcher specializing in
            <strong>Cyber Threat Hunting</strong>,
            <strong>Adversary Emulation</strong> and
            <strong>Threat Intelligence</strong>, with a strong focus on protecting
            <strong>critical infrastructures</strong>. My research explores the proactive
            detection and analysis of advanced adversaries targeting OT/ICS environments
            by integrating threat intelligence and adversary emulation. Through frameworks
            such as <strong>MITRE ATT&amp;CK</strong>, <strong>CALDERA</strong> and
            <strong>Atomic Red Team</strong>, I systematically model attacker behaviors,
            validate detection coverage and enhance defensive resilience.
          </p>
          <p>
            My work also delves into the <strong>collection, enrichment and correlation
            of threat data</strong> to generate actionable intelligence. By applying
            natural language processing and graph-based models, I uncover adversary
            infrastructure, campaigns and intent — contributing to intelligence-led
            defense strategies. My Ph.D. research aims to strengthen situational
            awareness and enable continuous hunting operations that improve the
            detection and mitigation of sophisticated cyber threats in critical sectors.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 pt-3">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            :aria-label="s.label"
            :target="s.name === 'email' ? '_self' : '_blank'"
            rel="noopener noreferrer"
            class="text-[rgb(var(--fg-mute))] hover:text-[rgb(var(--accent))] transition-colors"
          >
            <Icon :name="s.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <figure class="md:w-64 mx-auto md:mx-0">
        <img
          src="/img/prof_pic.jpg"
          alt="Javier Parada"
          class="w-full aspect-square object-cover rounded-sm"
        />
        <figcaption class="text-xs muted text-center mt-3 leading-relaxed">
          Ada Byron Research Institute<br />
          NicsLab Research Group<br />
          Malaga, Spain
        </figcaption>
      </figure>
    </section>

    <!-- News -->
    <section v-if="news && news.length" class="space-y-5">
      <div class="flex items-baseline justify-between">
        <h2 class="!text-3xl">News</h2>
        <NuxtLink to="/news" class="text-sm muted hover:text-[rgb(var(--fg))]">
          View all →
        </NuxtLink>
      </div>
      <ul class="divide-y hairline border-y hairline">
        <li v-for="item in news" :key="item._path" class="py-3 grid grid-cols-[6rem_1fr] gap-4 text-sm">
          <time class="muted font-mono text-xs pt-[3px]">
            {{ new Date(item.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: '2-digit' }) }}
          </time>
          <div class="soft leading-relaxed">
            <ContentRenderer :value="item" />
          </div>
        </li>
      </ul>
    </section>

    <!-- Selected papers -->
    <section v-if="publications && publications.length" class="space-y-5">
      <div class="flex items-baseline justify-between">
        <h2 class="!text-3xl">Selected Publications</h2>
        <NuxtLink to="/publications" class="text-sm muted hover:text-[rgb(var(--fg))]">
          View all →
        </NuxtLink>
      </div>
      <PublicationList :items="publications" />
    </section>
  </div>
</template>
