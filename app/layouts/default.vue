<template>
  <div class="min-h-screen flex flex-col bg-canvas text-body font-mono">
    <!-- Primary Nav -->
    <header class="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <!-- ASCII Block-pixel wordmark -->
        <NuxtLink to="/" class="font-mono font-bold text-[16px] leading-[1.5] text-ink no-underline hover:text-charcoal transition-colors select-none">
          <span class="tracking-tight">GANJAR HADIATNA</span>
        </NuxtLink>

        <!-- Desktop Nav links -->
        <nav class="hidden md:flex items-center gap-1 font-mono font-medium text-[16px] leading-[1.5] text-mute">
          <NuxtLink to="/blog" class="px-3 py-1 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_blog') }}</NuxtLink>
          <span class="text-mute/40">·</span>
          <NuxtLink to="/newsletter" class="px-3 py-1 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_newsletter') }}</NuxtLink>
          <span class="text-mute/40">·</span>
          <NuxtLink to="/courses" class="px-3 py-1 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_courses') }}</NuxtLink>
          <span class="text-mute/40">·</span>
          <NuxtLink to="/consulting" class="px-3 py-1 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_consulting') }}</NuxtLink>
          <span class="text-mute/40">·</span>
          <NuxtLink to="/saas" class="px-3 py-1 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_saas') }}</NuxtLink>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <!-- Mobile hamburger -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-1 text-ink"
            aria-label="Toggle mobile menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden bg-canvas border-b border-hairline px-4 py-2 space-y-0 absolute top-full inset-x-0 z-40">
          <nav class="flex flex-col font-mono font-medium text-[16px] leading-[1.5] text-mute">
            <NuxtLink @click="mobileMenuOpen = false" to="/blog" class="py-4 border-b border-hairline hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_blog') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/newsletter" class="py-4 border-b border-hairline hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_newsletter') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/courses" class="py-4 border-b border-hairline hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_courses') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/consulting" class="py-4 border-b border-hairline hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_consulting') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/saas" class="py-4 hover:text-ink no-underline transition-colors" active-class="text-ink">{{ t('nav_saas') }}</NuxtLink>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-hairline mt-16 md:mt-[96px]">
      <!-- 5-column link grid -->
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col sm:grid sm:grid-cols-5 border-b border-hairline divide-y sm:divide-y-0 sm:divide-x divide-hairline">
          <a
            href="https://github.com/ganjardbc"
            target="_blank"
            rel="noopener noreferrer"
            class="py-3 sm:py-4 px-4 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors"
          >
            GitHub
          </a>
          <NuxtLink to="/blog" class="py-3 sm:py-4 px-4 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors">
            {{ t('nav_blog') }}
          </NuxtLink>
          <NuxtLink to="/newsletter" class="py-3 sm:py-4 px-4 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors">
            {{ t('nav_newsletter') }}
          </NuxtLink>
          <NuxtLink to="/courses" class="py-3 sm:py-4 px-4 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors">
            {{ t('nav_courses') }}
          </NuxtLink>
          <NuxtLink to="/consulting" class="py-3 sm:py-4 px-4 text-center font-mono font-normal text-[14px] leading-[2] text-mute hover:text-ink no-underline transition-colors">
            {{ t('nav_consulting') }}
          </NuxtLink>
        </div>

        <!-- Copyright row -->
        <div class="py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 font-mono font-normal text-[14px] leading-[2] text-mute">
          <span>©2026 Ganjar Hadiatna. {{ t('footer_rights') }}</span>
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-ink no-underline transition-colors">{{ t('footer_privacy') }}</a>
            <a href="#" class="hover:text-ink no-underline transition-colors">{{ t('footer_terms') }}</a>
            <button @click="toggleLocale" class="hover:text-ink transition-colors cursor-pointer">
              {{ locale === 'en' ? 'English' : 'Indonesia' }} ▼
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '~/composables/useLocale'

const mobileMenuOpen = ref(false)
const { locale, setLocale, t } = useLocale()

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'id' : 'en')
}
</script>
