<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="block bg-canvas border-t border-b border-hairline py-2 hover:bg-surface-soft transition-colors no-underline group"
  >
    <div class="flex items-start gap-2">
      <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink shrink-0">[+]</span>
      <div class="flex flex-col flex-1">
        <div class="flex items-center justify-between gap-4">
          <span class="font-mono font-medium text-[14px] leading-[2] text-ink uppercase tracking-wide">{{ category }}</span>
          <span class="font-mono text-[14px] leading-[2] text-mute border border-hairline px-2 rounded-[4px]">{{ type }}</span>
        </div>
        <h3 class="font-mono font-normal text-[16px] leading-[1.5] text-ink group-hover:text-charcoal line-clamp-2">
          {{ title }}
        </h3>
        <div class="flex items-center justify-between font-mono text-[14px] leading-[2] text-mute mt-1 border-t border-hairline pt-1">
          <span>{{ date }}</span>
          <span>{{ duration }}</span>
        </div>
      </div>
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
