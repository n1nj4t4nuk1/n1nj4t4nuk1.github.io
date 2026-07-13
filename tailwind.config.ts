import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#4a4a4a',
          mute: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#fafaf7',
          soft: '#f2f2ec',
        },
        accent: {
          DEFAULT: '#b91c1c',
          soft: '#dc2626',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Garamond', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        prose: '68ch',
        page: '58rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(38 38 38)',
            '--tw-prose-headings': 'rgb(23 23 23)',
            '--tw-prose-links': '#b91c1c',
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config
