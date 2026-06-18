<template>
  <div class="py-[96px] max-w-6xl mx-auto">
    <div class="border-b border-hairline pb-4 mb-8">
      <div class="font-mono font-bold text-[16px] leading-[1.5] text-ink uppercase mb-1">
        Products
      </div>
      <h1 class="font-mono font-bold text-[16px] leading-[1.5] text-ink">
        {{ t('stub_saas_title') }}
      </h1>
    </div>
    <div class="space-y-0">
      <div class="border-t border-hairline py-3 flex items-start gap-2">
        <span class="font-mono font-bold text-[16px] text-ink shrink-0">[+]</span>
        <p class="font-mono font-normal text-[16px] leading-[1.5] text-body">
          {{ t('stub_saas_body') }}
        </p>
      </div>
      <div class="border-t border-b border-hairline py-3 flex items-start gap-2">
        <span class="font-mono font-bold text-[16px] text-ink shrink-0">[-]</span>
        <span class="font-mono font-normal text-[16px] leading-[1.5] text-mute">{{ t('status_under_construction') }}</span>
      </div>
    </div>
    <div class="pt-8">
      <CTAButton to="/" variant="secondary">{{ t('back_to_home') }}</CTAButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()
</script>
