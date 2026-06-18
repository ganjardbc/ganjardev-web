<template>
  <!-- News badge strip -->
  <div class="border-b border-hairline py-3">
    <div class="flex items-center gap-3">
      <span
        class="inline-flex items-center px-2 py-0.5 font-mono text-[14px] leading-loose rounded-[4px] transition-colors duration-200"
        :style="{ backgroundColor: 'var(--color-tui-bg)', color: 'var(--color-tui-text)' }"
      >
        News
      </span>
      <span class="text-body font-mono text-[14px] leading-loose">
        Available for consulting & AI engineering projects
      </span>
    </div>
  </div>

  <!-- Hero text block -->
  <section class="border-b border-hairline py-[96px]">
    <div class="max-w-6xl mx-auto space-y-8">
      <h1 class="font-mono font-bold text-ink leading-[1.5] text-[38px] md:text-[38px]">
        {{ locale === 'id' ? 'Engineer Perangkat Lunak,<br>Penjelajah AI, Pembangun Produk' : 'Software Engineer,\nAI Explorer, Product Builder' }}
      </h1>
      <p class="font-mono font-normal text-[16px] leading-[1.5] text-body max-w-2xl">
        {{ t('hero_bio') }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="https://tiktok.com/@ganjar_hadiatna"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-ink text-canvas font-mono font-medium text-[16px] leading-[2] px-5 py-1 rounded-[4px] no-underline hover:bg-ink-deep hover:text-canvas transition-colors"
        >
          {{ t('hero_follow_tiktok') }}
        </a>
        <a
          href="https://instagram.com/ganjar_hadiatna"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-canvas text-ink font-mono font-medium text-[16px] leading-[2] px-5 py-1 rounded-[4px] border border-hairline-strong no-underline hover:bg-surface-soft transition-colors"
        >
          {{ t('hero_follow_instagram') }}
        </a>
        <a
          href="https://github.com/ganjardbc"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-canvas text-ink font-mono font-medium text-[16px] leading-[2] px-5 py-1 rounded-[4px] border border-hairline-strong no-underline hover:bg-surface-soft transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- TUI Mockup — the dark centerpiece -->
  <TuiMockup />
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { locale, t } = useLocale()
</script>
