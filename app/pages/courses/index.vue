<template>
  <div class="py-16 md:py-24 max-w-2xl mx-auto text-center space-y-6">
    <div class="flex justify-center">
      <Badge :text="t('status_in_progress')" variant="status-amber" />
    </div>
    <h1 class="text-4xl md:text-5xl font-serif text-ink tracking-tight">{{ t('stub_courses_title') }}</h1>
    <p class="text-base text-body font-sans-ui leading-relaxed">
      {{ t('stub_courses_body') }}
    </p>
    <div class="pt-6">
      <CTAButton to="/" variant="secondary">{{ t('back_to_home') }}</CTAButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()
</script>
