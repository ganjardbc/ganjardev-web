<template>
  <span
    class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200"
    :class="variantClasses"
  >
    <!-- Status dots for dynamic state badges -->
    <span
      v-if="variant === 'status-green'"
      class="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500"
    ></span>
    <span
      v-else-if="variant === 'status-amber'"
      class="w-1.5 h-1.5 mr-1.5 rounded-full bg-amber-500"
    ></span>
    <span
      v-else-if="variant === 'status-coral'"
      class="w-1.5 h-1.5 mr-1.5 rounded-full bg-primary"
    ></span>
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    variant?: 'default' | 'coral' | 'outline' | 'status-green' | 'status-amber' | 'status-coral'
  }>(),
  {
    variant: 'default'
  }
)

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'coral':
      return 'bg-primary text-canvas font-semibold'
    case 'outline':
      return 'border border-hairline text-body bg-transparent'
    case 'status-green':
      return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    case 'status-amber':
      return 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
    case 'status-coral':
      return 'bg-primary/10 text-primary border border-primary/20'
    case 'default':
    default:
      return 'bg-card text-body border border-hairline'
  }
})
</script>
