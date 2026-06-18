<template>
  <div class="flex items-center space-x-2 text-xs font-mono text-muted select-none">
    <button 
      @click="setLocale('en')" 
      class="hover:text-ink transition-colors duration-200 focus:outline-none"
      :class="{ 'text-ink font-semibold border-b border-primary pb-0.5': locale === 'en', 'pb-0.5 border-b border-transparent': locale !== 'en' }"
      aria-label="Switch to English"
    >
      EN
    </button>
    <span class="text-muted/40">/</span>
    <button 
      @click="setLocale('id')" 
      class="hover:text-ink transition-colors duration-200 focus:outline-none"
      :class="{ 'text-ink font-semibold border-b border-primary pb-0.5': locale === 'id', 'pb-0.5 border-b border-transparent': locale !== 'id' }"
      aria-label="Switch to Indonesian"
    >
      ID
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale } = useLocale()
</script>
