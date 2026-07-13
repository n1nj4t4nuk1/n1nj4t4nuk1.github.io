export interface Social {
  name: string
  icon: string
  href: string
  label: string
}

export const useSocials = (): Social[] => [
  { name: 'email', icon: 'lucide:mail', href: 'mailto:javierparada@pm.me', label: 'Email' },
  { name: 'github', icon: 'simple-icons:github', href: 'https://github.com/n1nj4t4nuk1', label: 'GitHub' },
  { name: 'orcid', icon: 'simple-icons:orcid', href: 'https://orcid.org/0009-0003-5115-1802', label: 'ORCID' },
  { name: 'scholar', icon: 'simple-icons:googlescholar', href: 'https://scholar.google.com/citations?user=19rAzcMAAAAJ', label: 'Google Scholar' },
  { name: 'researchgate', icon: 'simple-icons:researchgate', href: 'https://www.researchgate.net/profile/Javier-Parada-6', label: 'ResearchGate' },
  { name: 'linkedin', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/in/javier-parada', label: 'LinkedIn' },
  { name: 'x', icon: 'simple-icons:x', href: 'https://x.com/n1nj4t4nuk1', label: 'X (Twitter)' },
]
