<template>
  <div class="bg-canvas border-t border-b border-hairline py-2 flex flex-col gap-2">
    <div class="flex items-start gap-2">
      <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink shrink-0">[+]</span>
      <div class="flex flex-col flex-1">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-0">
          <h3 class="font-mono font-bold text-[16px] leading-[1.5] text-ink">
            {{ title }}
          </h3>
          <Badge :text="status" :variant="statusVariant" class="self-start sm:self-auto shrink-0" />
        </div>
        <p class="font-mono font-normal text-[16px] leading-[1.5] text-body">
          {{ description }}
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <Badge v-for="tech in techStack" :key="tech" :text="tech" variant="outline" />
        </div>
        <div v-if="link && link !== '#'" class="mt-2">
          <a :href="link" target="_blank" rel="noopener noreferrer" class="font-mono font-medium text-[14px] leading-[2] text-ink no-underline border-b border-ink hover:text-charcoal">
            {{ t('view_project') }} →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '~/composables/useLocale'

const { t } = useLocale()

const props = defineProps<{
  title: string
  description: string
  techStack: string[]
  link: string
  status: string
}>()

const statusVariant = computed(() => {
  const s = props.status.toLowerCase()
  if (s === 'completed' || s === 'selesai') return 'status-green'
  if (s === 'building' || s === 'in progress' || s === 'membangun' || s === 'sedang berjalan') return 'status-amber'
  return 'status-coral'
})
</script>
