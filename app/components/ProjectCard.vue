<template>
  <div class="bg-card border border-hairline rounded-lg p-6 md:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full">
    <div>
      <div class="flex items-start justify-between gap-4 mb-4">
        <h3 class="text-xl md:text-2xl font-serif text-ink tracking-tight group-hover:text-primary transition-colors duration-200">
          {{ title }}
        </h3>
        <Badge :text="status" :variant="statusVariant" />
      </div>
      
      <p class="text-sm text-body leading-relaxed mb-6 font-sans-ui">
        {{ description }}
      </p>
    </div>
    
    <div>
      <div class="flex flex-wrap gap-1.5 mb-6">
        <Badge v-for="tech in techStack" :key="tech" :text="tech" variant="outline" />
      </div>
      
      <div v-if="link && link !== '#'" class="inline-flex items-center text-xs font-semibold tracking-wider text-primary group-hover:text-primary-active transition-colors duration-200 uppercase font-sans-ui">
        {{ t('view_project') }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
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
  if (s === 'completed') return 'status-green'
  if (s === 'building' || s === 'in progress') return 'status-amber'
  return 'status-coral'
})
</script>
