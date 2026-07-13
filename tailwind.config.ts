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
          DEFAULT: '#1a1613',
          soft: '#4a4139',
          mute: '#8a8176',
        },
        paper: {
          DEFAULT: '#f5f0e8',
          soft: '#ebe3d5',
          tint: '#faf5ec',
        },
        accent: {
          DEFAULT: '#c15f3c',
          soft: '#dc815c',
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
            '--tw-prose-body': 'rgb(74 65 57)',
            '--tw-prose-headings': 'rgb(26 22 19)',
            '--tw-prose-links': '#c15f3c',
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config
