<script setup lang="ts">
useSeoMeta({
  title: 'CV',
  description: 'Curriculum Vitae, Javier Parada',
})

interface TimelineEntry {
  role: string
  where: string
  location?: string
  period: string
  bullets?: string[]
  skills?: string[]
}

const experience: TimelineEntry[] = [
  {
    role: 'Cybersecurity Researcher',
    where: 'Eurecat, Technology Centre',
    location: 'Barcelona, Spain',
    period: '2024, Present',
    bullets: [
      'Cybersecurity research focused on Cyber Threat Intelligence, Threat Hunting and Adversarial Emulation.',
      'Analysis and detection of advanced threats, simulation of malicious behaviors, and development of tools and methodologies to anticipate and respond to security incidents.',
    ],
  },
  {
    role: 'Cybersecurity Researcher',
    where: 'NicsLab, Research Group',
    location: 'Malaga, Spain',
    period: '2023, Present',
    bullets: [
      'Research in cybersecurity with a strong emphasis on Cyber Threat Intelligence and Adversary Emulation applied to Critical Infrastructures.',
      'Leveraging digital twins to model and simulate complex systems for threat anticipation, and deploying honeypots to attract, deceive and analyze adversarial behaviors.',
    ],
  },
  {
    role: 'Cybersecurity Researcher',
    where: 'NICT, Japan National Cybersecurity Agency',
    location: 'Tokyo, Japan',
    period: '2026 (4 months)',
    bullets: [
      'Cybersecurity research focused on Cyber Threat Intelligence, Threat Hunting and Adversarial Emulation.',
      'Analysis and detection of advanced threats, simulation of malicious behaviors, and development of tools and methodologies to anticipate and respond to security incidents.',
    ],
  },
  {
    role: 'Software Engineer',
    where: 'T2C, IT Consulting Company',
    location: 'Barcelona, Spain',
    period: '2020, 2023',
    bullets: [
      'Design and development of systems using architectures like Domain-Driven Design (DDD), Microservices and Hexagonal Architecture, focused on high scalability and handling large data volumes.',
      'Emphasis on reliability, observability and event-driven communication.',
    ],
  },
  {
    role: 'Software Developer',
    where: 'DeveryWare, IT Consulting Company',
    location: 'Paris, France',
    period: '2019, 2020',
    bullets: [
      'Development of applications using Bash, Linux, Angular, JavaScript, MongoDB, Docker and Node.js.',
      'Implementation of SOLID principles to ensure clean, scalable and maintainable code.',
    ],
  },
  {
    role: 'Software Developer',
    where: 'Internalia Group, Software Product Company',
    location: 'Malaga, Spain',
    period: '2018 (4 months)',
    bullets: [
      'Development of web applications using PHP, JavaScript, SQL and Linux systems.',
      'Implementation of SOLID principles to ensure clean, scalable and maintainable code.',
    ],
  },
]

const education: TimelineEntry[] = [
  {
    role: 'Ph.D. in Computer Science',
    where: 'University of Malaga',
    location: 'Malaga, Spain',
    period: 'May 2024, ongoing',
    bullets: [
      'Cybersecurity research focused on Cyber Threat Intelligence, Threat Hunting and Adversarial Emulation.',
      'Analysis and detection of advanced threats, simulation of malicious behaviors, and tools and methodologies to anticipate and respond to security incidents in complex environments.',
    ],
    skills: ['Cybersecurity', 'Artificial Intelligence', 'Cyber Threat Intelligence', 'High Availability'],
  },
  {
    role: "Master's in Computer Science",
    where: 'University of Malaga',
    location: 'Malaga, Spain',
    period: 'Oct 2021, Mar 2024',
    bullets: [
      "Master's Degree in Computer Engineering with a specialization in Cybersecurity.",
      'Advanced training in pentesting, malware analysis, secure programming, vulnerability discovery and exploitation, and methods to ensure system and data privacy and security.',
      "Master's Thesis: TanukiPot, Honeypot based on Digital Twins for Critical Infrastructures.",
    ],
    skills: ['Cybersecurity', 'Pentesting', 'Malware Analysis', 'Industrial Infrastructures'],
  },
  {
    role: "Bachelor's in Computer Science",
    where: 'University of Malaga',
    location: 'Malaga, Spain',
    period: 'Sep 2014, Sep 2020',
    bullets: [
      "Bachelor's Degree in Computer Engineering with a specialization in Software Engineering.",
      'Education focused on data structures, algorithm analysis and design, software development, databases and cybersecurity.',
      'Final Degree Project: Emergency Control and Prevention Platform.',
    ],
    skills: ['Computer Science', 'Network Design', 'Cybersecurity', 'Programming', 'Project Management'],
  },
]

interface Certification {
  title: string
  issuer: string
  location: string
  date: string
  category: string
}

const certifications: Certification[] = [
  {
    category: 'Languages',
    title: 'Japanese Language Proficiency Test N3',
    issuer: 'The Japan Foundation',
    location: 'Malaga, Spain',
    date: 'Jan 2025',
  },
  {
    category: 'Technology',
    title: 'University Extension Course on Blockchain Technologies',
    issuer: 'University of Malaga',
    location: 'Malaga, Spain',
    date: 'Jul 2025',
  },
]

interface Award {
  title: string
  subtitle: string
  location: string
  description: string
}

const awards: Award[] = [
  {
    title: "Outstanding Master's Thesis Award",
    subtitle: "RENIC Cybersecurity Awards for the Best National Master's Degree Thesis",
    location: 'Málaga, Spain',
    description:
      "Honored with the RENIC Cybersecurity Award for the Best National Master's Degree Thesis in Spain, granted by the Red de Excelencia Nacional de Investigación en Ciberseguridad (RENIC).",
  },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Basque', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Japanese', level: 'JLPT N3' },
]
</script>

<template>
  <div class="space-y-14">
    <header class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b hairline pb-6">
      <div class="space-y-2 max-w-prose">
        <h1>CV</h1>
        <p class="soft">
          Cybersecurity Researcher and PhD Candidate. Focused on Cyber Threat Intelligence
          and Adversarial Emulation to simulate attacker behaviour, anticipate threats
          and strengthen defenses. Former Software Engineer with experience designing
          scalable, high-availability, event-driven systems.
        </p>
      </div>
      <a
        href="/pdf/cv.pdf"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-4 py-2 border hairline rounded-sm text-sm hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] transition-colors self-start md:self-auto whitespace-nowrap"
      >
        <Icon name="lucide:file-down" class="w-4 h-4" />
        Download PDF
      </a>
    </header>

    <section class="space-y-6">
      <h2 class="!text-3xl">Experience</h2>
      <ol class="space-y-8">
        <li
          v-for="e in experience"
          :key="`${e.role}-${e.where}`"
          class="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-8"
        >
          <div class="muted text-sm font-mono pt-1">{{ e.period }}</div>
          <div class="space-y-1.5">
            <h3 class="!text-xl">{{ e.role }}</h3>
            <p class="soft">
              {{ e.where }}<span v-if="e.location"> · {{ e.location }}</span>
            </p>
            <ul v-if="e.bullets" class="list-disc list-outside ml-4 space-y-1 text-sm soft pt-1">
              <li v-for="b in e.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">Education</h2>
      <ol class="space-y-8">
        <li
          v-for="e in education"
          :key="`${e.role}-${e.where}`"
          class="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-8"
        >
          <div class="muted text-sm font-mono pt-1">{{ e.period }}</div>
          <div class="space-y-1.5">
            <h3 class="!text-xl">{{ e.role }}</h3>
            <p class="soft">
              {{ e.where }}<span v-if="e.location"> · {{ e.location }}</span>
            </p>
            <ul v-if="e.bullets" class="list-disc list-outside ml-4 space-y-1 text-sm soft pt-1">
              <li v-for="b in e.bullets" :key="b">{{ b }}</li>
            </ul>
            <div v-if="e.skills" class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="s in e.skills"
                :key="s"
                class="text-[10px] font-mono uppercase tracking-wider muted px-1.5 py-0.5 border hairline rounded-sm"
              >
                {{ s }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">Certifications</h2>
      <ol class="space-y-6">
        <li
          v-for="c in certifications"
          :key="c.title"
          class="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-8"
        >
          <div class="muted text-sm font-mono pt-1">{{ c.date }}</div>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-wider muted">{{ c.category }}</p>
            <h3 class="!text-xl">{{ c.title }}</h3>
            <p class="soft text-sm">{{ c.issuer }} · {{ c.location }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">Awards</h2>
      <ol class="space-y-6">
        <li
          v-for="a in awards"
          :key="a.title"
          class="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-8"
        >
          <div class="muted text-sm font-mono pt-1">{{ a.location }}</div>
          <div class="space-y-1.5">
            <h3 class="!text-xl">{{ a.title }}</h3>
            <p class="soft text-sm italic">{{ a.subtitle }}</p>
            <p class="soft text-sm pt-1">{{ a.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="!text-3xl">Languages</h2>
      <ul class="divide-y hairline border-y hairline">
        <li v-for="l in languages" :key="l.name" class="py-3 flex justify-between text-sm">
          <span>{{ l.name }}</span>
          <span class="muted">{{ l.level }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
