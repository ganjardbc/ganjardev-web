<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col gap-3 bg-canvas border border-hairline p-5 h-full hover:bg-surface-soft transition-colors no-underline group"
  >
    <div class="flex items-center justify-between gap-2">
      <span class="font-mono font-medium text-[14px] leading-[2] text-ink uppercase tracking-wide">{{ category }}</span>
      <span class="font-mono text-[14px] leading-[2] text-mute border border-hairline px-2 rounded-[4px] shrink-0">{{ type }}</span>
    </div>

    <h3 class="font-mono font-normal text-[16px] leading-[1.5] text-ink group-hover:text-charcoal flex-1">
      {{ title }}
    </h3>

    <div class="flex items-center justify-between font-mono text-[14px] leading-[2] text-mute border-t border-hairline pt-2">
      <span>{{ date }}</span>
      <span>{{ duration }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  category: string
  type: string
  duration: string
  date: string
  link: string
}>()
</script>
