<template>
  <div class="mb-10 md:mb-[96px] space-y-2 border-b border-hairline pb-4">
    <div v-if="tag" class="font-mono font-bold text-[16px] leading-[1.5] text-ink uppercase">
      {{ tag }}
    </div>
    <h2 class="font-mono font-bold text-[16px] leading-[1.5] text-ink">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="font-mono font-normal text-[16px] leading-[1.5] text-body max-w-2xl">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  tag?: string
}>()
</script>
