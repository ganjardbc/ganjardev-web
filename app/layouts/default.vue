<template>
  <div class="min-h-screen flex flex-col bg-canvas text-body selection:bg-primary/20 selection:text-ink font-sans">
    <!-- Top Navigation Header -->
    <header class="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-hairline/40 py-4">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <!-- Anthropic-style 4-spoke radial spike mark -->
          <svg class="w-5 h-5 text-primary group-hover:rotate-45 transition-transform duration-300 ease-out" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect x="42.5" y="10" width="15" height="80" rx="7.5" />
            <rect x="10" y="42.5" width="80" height="15" rx="7.5" transform="rotate(45 50 50)" />
            <rect x="10" y="42.5" width="80" height="15" rx="7.5" transform="rotate(-45 50 50)" />
          </svg>
          <span class="font-serif text-lg md:text-xl font-medium tracking-tight text-ink group-hover:text-primary transition-colors duration-200">
            Ganjar Hadiatna
          </span>
        </NuxtLink>

        <!-- Desktop Navigation Items -->
        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium font-sans-ui text-muted">
          <NuxtLink to="/blog" class="hover:text-ink transition-colors">{{ t('nav_blog') }}</NuxtLink>
          <NuxtLink to="/newsletter" class="hover:text-ink transition-colors">{{ t('nav_newsletter') }}</NuxtLink>
          <NuxtLink to="/courses" class="hover:text-ink transition-colors">{{ t('nav_courses') }}</NuxtLink>
          <NuxtLink to="/consulting" class="hover:text-ink transition-colors">{{ t('nav_consulting') }}</NuxtLink>
          <NuxtLink to="/saas" class="hover:text-ink transition-colors">{{ t('nav_saas') }}</NuxtLink>
        </nav>

        <!-- Right Side CTA -->
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <!-- Mobile Menu Toggle -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden flex items-center text-ink hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Sheet -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden bg-canvas border-b border-hairline/80 absolute top-full inset-x-0 py-6 px-6 space-y-4 shadow-xl z-40">
          <nav class="flex flex-col space-y-4 text-base font-medium font-sans-ui text-muted">
            <NuxtLink @click="mobileMenuOpen = false" to="/blog" class="hover:text-ink transition-colors">{{ t('nav_blog') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/newsletter" class="hover:text-ink transition-colors">{{ t('nav_newsletter') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/courses" class="hover:text-ink transition-colors">{{ t('nav_courses') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/consulting" class="hover:text-ink transition-colors">{{ t('nav_consulting') }}</NuxtLink>
            <NuxtLink @click="mobileMenuOpen = false" to="/saas" class="hover:text-ink transition-colors">{{ t('nav_saas') }}</NuxtLink>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-grow max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-card border-t border-hairline/60 py-12 md:py-16 mt-16 md:mt-24">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div class="md:col-span-6 space-y-4">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-primary" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="42.5" y="10" width="15" height="80" rx="7.5" />
              <rect x="10" y="42.5" width="80" height="15" rx="7.5" transform="rotate(45 50 50)" />
              <rect x="10" y="42.5" width="80" height="15" rx="7.5" transform="rotate(-45 50 50)" />
            </svg>
            <span class="font-serif text-ink tracking-tight font-medium">Ganjar Hadiatna</span>
          </div>
          <p class="text-sm text-muted max-w-xs font-sans-ui leading-relaxed">
            Software Engineer • AI Explorer • Product Builder
          </p>
          <div class="text-xs text-muted/60 font-mono">
            {{ t('footer_building_public') }}
          </div>
        </div>

        <div class="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end w-full">
          <div>
            <h4 class="text-xs uppercase font-semibold tracking-widest text-ink mb-4 font-sans-ui">{{ t('footer_navigation') }}</h4>
            <ul class="space-y-2.5 text-sm font-sans-ui text-muted">
              <li><NuxtLink to="/blog" class="hover:text-ink transition-colors">{{ t('nav_blog') }}</NuxtLink></li>
              <li><NuxtLink to="/newsletter" class="hover:text-ink transition-colors">{{ t('nav_newsletter') }}</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-ink transition-colors">{{ t('nav_courses') }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase font-semibold tracking-widest text-ink mb-4 font-sans-ui">{{ t('footer_product') }}</h4>
            <ul class="space-y-2.5 text-sm font-sans-ui text-muted">
              <li><NuxtLink to="/consulting" class="hover:text-ink transition-colors">{{ t('nav_consulting') }}</NuxtLink></li>
              <li><NuxtLink to="/saas" class="hover:text-ink transition-colors">{{ t('nav_saas') }}</NuxtLink></li>
              <li><a href="https://github.com/ganjardbc" target="_blank" class="hover:text-ink transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="max-w-6xl mx-auto px-6 border-t border-hairline/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted/65 font-sans-ui gap-4">
        <div>
          &copy; 2026 Ganjar Hadiatna. {{ t('footer_rights') }}
        </div>
        <div class="flex space-x-6">
          <a href="#" class="hover:text-ink transition-colors">{{ t('footer_privacy') }}</a>
          <a href="#" class="hover:text-ink transition-colors">{{ t('footer_terms') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '~/composables/useLocale'

const mobileMenuOpen = ref(false)
const { t } = useLocale()
</script>
