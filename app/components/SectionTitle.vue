<template>
  <div class="mb-10 md:mb-12 space-y-3">
    <div v-if="tag" class="text-xs uppercase tracking-[0.15em] text-primary font-medium font-sans-ui">
      {{ tag }}
    </div>
    <h2 class="text-3xl md:text-4xl font-serif tracking-tighter text-ink">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="max-w-2xl text-base text-muted font-sans-ui leading-relaxed">
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
