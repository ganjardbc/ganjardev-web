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
        // Canvas & surfaces
        canvas: 'var(--color-canvas)',
        'surface-soft': 'var(--color-surface-soft)',
        'surface-card': 'var(--color-surface-card)',
        'surface-dark': 'var(--color-surface-dark)',
        'surface-dark-elevated': 'var(--color-surface-dark-elevated)',
        // Text
        ink: 'var(--color-ink)',
        'ink-deep': 'var(--color-ink-deep)',
        charcoal: 'var(--color-charcoal)',
        body: 'var(--color-body)',
        mute: 'var(--color-mute)',
        stone: 'var(--color-stone)',
        ash: 'var(--color-ash)',
        'on-dark': 'var(--color-on-dark)',
        // Borders
        hairline: 'var(--color-hairline)',
        'hairline-strong': 'var(--color-hairline-strong)',
        // Semantic (in-TUI only)
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        // All text roles use the mono stack — no sans or serif
        sans: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        serif: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['38px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-md': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-strong': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'button-md': ['16px', { lineHeight: '2', fontWeight: '500' }],
        'caption-md': ['14px', { lineHeight: '2', fontWeight: '400' }],
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'full': '9999px',
      },
      spacing: {
        'section': '96px',
      },
      maxWidth: {
        'content': '960px',
      },
      letterSpacing: {
        normal: '0',
      }
    },
  },
  plugins: [],
}
