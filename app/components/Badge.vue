<template>
  <span
    class="inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[14px] leading-loose rounded-[4px] transition-colors"
    :class="variantClasses"
  >
    <span v-if="variant === 'status-green'" class="w-1.5 h-1.5 rounded-full bg-success"></span>
    <span v-else-if="variant === 'status-amber'" class="w-1.5 h-1.5 rounded-full bg-warning"></span>
    <span v-else-if="variant === 'status-coral'" class="w-1.5 h-1.5 rounded-full bg-danger"></span>
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    variant?: 'default' | 'dark' | 'outline' | 'status-green' | 'status-amber' | 'status-coral'
  }>(),
  { variant: 'default' }
)

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'bg-surface-dark text-on-dark'
    case 'outline':
      return 'border border-hairline text-body bg-transparent'
    case 'status-green':
      return 'bg-canvas text-body border border-hairline'
    case 'status-amber':
      return 'bg-canvas text-body border border-hairline'
    case 'status-coral':
      return 'bg-canvas text-body border border-hairline'
    default:
      return 'bg-surface-card text-body border border-hairline'
  }
})
</script>
