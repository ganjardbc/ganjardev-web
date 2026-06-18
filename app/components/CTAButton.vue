<template>
  <component
    :is="componentType"
    v-bind="bindingProps"
    class="inline-flex items-center justify-center font-sans-ui text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-canvas disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'text'
    disabled?: boolean
    target?: string
  }>(),
  {
    variant: 'primary',
    disabled: false
  }
)

const componentType = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const bindingProps = computed(() => {
  if (props.to) {
    return { to: props.to }
  }
  if (props.href) {
    return { href: props.href, target: props.target, rel: props.target === '_blank' ? 'noopener noreferrer' : undefined }
  }
  return { type: 'button', disabled: props.disabled }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-transparent text-ink border border-hairline hover:bg-card px-5 py-2.5 h-[40px]'
    case 'text':
      return 'bg-transparent text-primary hover:text-primary-active underline underline-offset-4 px-0 py-0'
    case 'primary':
    default:
      return 'bg-primary text-canvas hover:bg-primary/95 px-5 py-2.5 h-[40px] font-semibold'
  }
})
</script>
