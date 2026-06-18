/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./utils/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'color-mix(in srgb, var(--color-canvas) calc(100% * <alpha-value>), transparent)',
        card: 'color-mix(in srgb, var(--color-card) calc(100% * <alpha-value>), transparent)',
        'card-elevated': 'color-mix(in srgb, var(--color-card-elevated) calc(100% * <alpha-value>), transparent)',
        primary: {
          DEFAULT: 'color-mix(in srgb, var(--color-primary) calc(100% * <alpha-value>), transparent)',
          active: 'color-mix(in srgb, var(--color-primary-active) calc(100% * <alpha-value>), transparent)',
        },
        ink: 'color-mix(in srgb, var(--color-ink) calc(100% * <alpha-value>), transparent)',
        body: 'color-mix(in srgb, var(--color-body) calc(100% * <alpha-value>), transparent)',
        muted: 'color-mix(in srgb, var(--color-muted) calc(100% * <alpha-value>), transparent)',
        hairline: 'color-mix(in srgb, var(--color-hairline) calc(100% * <alpha-value>), transparent)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'EB Garamond', 'Tiempos Headline', 'serif'],
        sans: ['Inter', 'StyreneB', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}
