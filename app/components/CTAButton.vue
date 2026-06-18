<template>
  <component
    :is="componentType"
    v-bind="bindingProps"
    class="inline-flex items-center justify-center font-mono font-medium text-[16px] leading-[2] px-5 py-2 sm:py-1 rounded-[4px] transition-colors focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer no-underline"
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
  { variant: 'primary', disabled: false }
)

const componentType = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const bindingProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: props.target, rel: props.target === '_blank' ? 'noopener noreferrer' : undefined }
  return { type: 'button', disabled: props.disabled }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-canvas text-ink border border-hairline-strong hover:bg-surface-soft hover:text-ink'
    case 'text':
      return 'bg-transparent text-ink underline underline-offset-3 px-0 py-0 hover:text-charcoal'
    case 'primary':
    default:
      return 'bg-ink text-canvas hover:bg-ink-deep hover:text-canvas'
  }
})
</script>
