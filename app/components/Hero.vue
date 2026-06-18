<template>
  <section class="py-16 md:py-24 border-b border-hairline/40">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <!-- Text content -->
      <div class="md:col-span-7 space-y-6 text-left order-2 md:order-1">
        <div class="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold text-primary font-sans-ui uppercase tracking-wider">
          <span>{{ t('hero_badge') }}</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif text-ink tracking-tightest leading-none">
          Ganjar Hadiatna
        </h1>
        
        <p class="text-lg md:text-xl font-serif text-primary italic tracking-tight font-semibold">
          Software Engineer • AI Explorer • Product Builder
        </p>
        
        <p class="text-base md:text-lg text-body font-sans-ui leading-relaxed max-w-xl">
          {{ t('hero_bio') }}
        </p>
        
        <div class="flex flex-wrap items-center gap-4 pt-4">
          <!-- Primary CTA -->
          <CTAButton href="https://tiktok.com/@ganjar_hadiatna" target="_blank" variant="primary">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.99-1.72-.08-.07-.15-.17-.26-.3v5.13c-.02 2.86-1.55 5.67-4.16 6.94-2.67 1.4-6.14 1.15-8.54-.7-2.5-1.92-3.66-5.46-2.73-8.53.83-2.86 3.59-5.01 6.64-5.01 1.25.01 2.5.32 3.57.96V4.31c-1.28-.48-2.66-.63-4.01-.42-2.86.37-5.45 2.37-6.52 5.09-1.2 2.89-.63 6.44 1.45 8.74 2.1 2.37 5.48 3.26 8.5 2.29 2.94-.85 5.15-3.56 5.37-6.66.08-1.06.03-2.14.03-3.21 0-1.84 0-3.68.01-5.52v-.02z"/>
            </svg>
            {{ t('hero_follow_tiktok') }}
          </CTAButton>
          
          <!-- Secondary CTAs -->
          <CTAButton href="https://instagram.com/ganjar_hadiatna" target="_blank" variant="secondary">
            {{ t('hero_follow_instagram') }}
          </CTAButton>
          
          <CTAButton href="https://youtube.com/@ganjar_hadiatna" target="_blank" variant="secondary">
            YouTube
          </CTAButton>
          
          <CTAButton href="https://github.com/ganjardbc" target="_blank" variant="secondary">
            GitHub
          </CTAButton>
        </div>
      </div>
      
      <!-- Profile image placeholder / Abstract artwork -->
      <div class="md:col-span-5 flex justify-center order-1 md:order-2">
        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-hairline bg-card flex items-center justify-center overflow-hidden group">
          <!-- Concentric abstract glowing rings -->
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.08)_0%,transparent_70%)]"></div>
          <div class="absolute w-48 h-48 rounded-full border border-hairline/25 flex items-center justify-center">
            <div class="absolute w-36 h-36 rounded-full border border-primary/20 flex items-center justify-center">
              <div class="absolute w-24 h-24 rounded-full border border-primary/40 flex items-center justify-center"></div>
            </div>
          </div>
          
          <!-- Inner SVG Avatar graphic -->
          <svg class="w-40 h-40 text-primary/60 group-hover:scale-105 transition-transform duration-500 ease-out" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="35" r="15" stroke="currentColor" stroke-width="1.5" />
            <path d="M25 75C25 61.1929 36.1929 50 50 50C63.8071 50 75 61.1929 75 75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <!-- Tech / Connection lines -->
            <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />
            <circle cx="50" cy="5" r="2" fill="currentColor" />
            
            <line x1="85" y1="35" x2="65" y2="35" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />
            <circle cx="85" cy="35" r="2" fill="currentColor" />
            
            <line x1="15" y1="35" x2="35" y2="35" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />
            <circle cx="15" cy="35" r="2" fill="currentColor" />
            
            <line x1="50" y1="65" x2="50" y2="85" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />
            <circle cx="50" cy="85" r="2" fill="currentColor" />
          </svg>
          
          <!-- Border highlights -->
          <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'

const { t } = useLocale()
</script>
