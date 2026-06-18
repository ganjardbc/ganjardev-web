<template>
  <div class="py-12 md:py-[96px] max-w-6xl mx-auto">
    <div class="border-b border-hairline pb-4 mb-8">
      <div class="font-mono font-bold text-[16px] leading-[1.5] text-ink uppercase mb-1">
        Consulting
      </div>
      <h1 class="font-mono font-bold text-[16px] leading-[1.5] text-ink">
        {{ t('stub_consulting_title') }}
      </h1>
    </div>
    <div class="space-y-0">
      <div class="border-t border-hairline py-3 flex items-start gap-2">
        <span class="font-mono font-bold text-[16px] text-ink shrink-0">[+]</span>
        <p class="font-mono font-normal text-[16px] leading-[1.5] text-body">
          {{ t('stub_consulting_body') }}
        </p>
      </div>
      <div class="border-t border-b border-hairline py-3 flex items-start gap-2">
        <span class="font-mono font-bold text-[16px] text-ink shrink-0">[x]</span>
        <span class="font-mono font-normal text-[16px] leading-[1.5] text-mute">{{ t('stub_consulting_badge') }}</span>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 pt-8">
      <CTAButton href="mailto:admin@ganjardev.web.id" variant="primary">{{ t('stub_consulting_btn') }}</CTAButton>
      <CTAButton to="/" variant="secondary">{{ t('back_to_home') }}</CTAButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()
</script>
