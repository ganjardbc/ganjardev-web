<template>
  <div class="min-h-screen flex flex-col bg-canvas text-body font-mono">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <NuxtLink to="/" class="font-mono font-bold text-[16px] leading-[1.5] text-ink no-underline hover:text-charcoal transition-colors select-none">
          <span class="tracking-tight">GANJAR HADIATNA</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-hairline mt-16 md:mt-[96px]">
      <div class="max-w-6xl mx-auto">
        <!-- Social links row -->
        <div class="flex border-b border-hairline divide-x divide-hairline">
          <a
            href="https://github.com/ganjardbc"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors"
          >GitHub</a>
          <a
            href="https://linkedin.com/in/ganjarhadiatna"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors"
          >LinkedIn</a>
          <a
            href="https://tiktok.com/@ganjar_hadiatna"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors"
          >TikTok</a>
          <a
            href="mailto:admin@ganjardev.web.id"
            class="flex-1 py-3 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors"
          >Email</a>
        </div>

        <!-- Copyright row -->
        <div class="py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono font-normal text-[14px] leading-[2] text-mute">
          <span>©2026 Ganjar Hadiatna. {{ t('footer_rights') }}</span>
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-ink no-underline transition-colors">{{ t('footer_privacy') }}</a>
            <a href="#" class="hover:text-ink no-underline transition-colors">{{ t('footer_terms') }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()
</script>
