<template>
  <div class="bg-canvas border border-hairline p-5 sm:p-6 flex flex-col gap-3 h-full">
    <div class="flex items-start justify-between gap-3">
      <h3 class="font-mono font-bold text-[16px] leading-[1.5] text-ink">
        {{ title }}
      </h3>
      <Badge :text="status" :variant="statusVariant" class="shrink-0" />
    </div>

    <p class="font-mono font-normal text-[16px] leading-[1.5] text-body flex-1">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <Badge v-for="tech in techStack" :key="tech" :text="tech" variant="outline" />
    </div>

    <div v-if="link && link !== '#'" class="pt-1 mt-auto">
      <a :href="link" target="_blank" rel="noopener noreferrer" class="font-mono font-medium text-[14px] leading-[2] text-ink no-underline border-b border-ink hover:text-charcoal">
        {{ t('view_project') }} →
      </a>
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
