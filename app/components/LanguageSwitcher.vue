<template>
  <div class="flex items-center gap-1 font-mono text-[14px] leading-[2] text-mute select-none">
    <button
      @click="setLocale('en')"
      class="px-1 hover:text-ink transition-colors focus:outline-none"
      :class="locale === 'en' ? 'text-ink font-bold' : ''"
      aria-label="Switch to English"
    >EN</button>
    <span class="text-hairline-strong">/</span>
    <button
      @click="setLocale('id')"
      class="px-1 hover:text-ink transition-colors focus:outline-none"
      :class="locale === 'id' ? 'text-ink font-bold' : ''"
      aria-label="Switch to Indonesian"
    >ID</button>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { locale, setLocale } = useLocale()
</script>
