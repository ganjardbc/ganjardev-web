<template>
  <div class="space-y-24 md:space-y-32">
    <!-- Hero Section -->
    <Hero />

    <!-- Nuxt Content Section (Editorial Bio) -->
    <section class="max-w-4xl mx-auto">
      <div class="border border-hairline bg-card/30 rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(224,122,95,0.06)_0%,transparent_70%)]"></div>
        <ContentRenderer
          v-if="page"
          :value="page"
          class="content-area"
        />
        <div v-else class="text-center py-6 text-muted font-sans-ui text-sm">
          {{ t('loading_insights') }}
        </div>
      </div>
    </section>

    <!-- What I'm Building Section -->
    <section>
      <SectionTitle 
        :tag="t('section_focus_areas')"
        :title="t('section_building_title')" 
        :subtitle="t('section_building_subtitle')" 
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in buildingItems" 
          :key="item.title"
          class="bg-card border border-hairline rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase text-muted">{{ t('badge_active_launch') }}</span>
              <Badge :text="item.status" :variant="item.status === 'Building' || item.status === 'Membangun' ? 'status-amber' : item.status === 'In Progress' || item.status === 'Sedang Berjalan' ? 'status-coral' : 'status-green'" />
            </div>
            <h3 class="text-xl md:text-2xl font-serif text-ink tracking-tight mb-2 group-hover:text-primary transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-sm text-body leading-relaxed font-sans-ui mb-6">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section>
      <SectionTitle 
        :tag="t('section_portfolio')"
        :title="t('section_projects_title')" 
        :subtitle="t('section_projects_subtitle')" 
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tech-stack="project.techStack"
          :link="project.link"
          :status="project.status"
        />
      </div>
    </section>

    <!-- Featured Content Section -->
    <section>
      <SectionTitle 
        :tag="t('section_publications')"
        :title="t('section_content_title')" 
        :subtitle="t('section_content_subtitle')" 
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentCard 
          v-for="content in featuredContent" 
          :key="content.title"
          :title="content.title"
          :category="content.category"
          :type="content.type"
          :duration="content.duration"
          :date="content.date"
          :link="content.link"
        />
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section>
      <SectionTitle 
        :tag="t('section_capabilities')"
        :title="t('section_tech_stack_title')" 
        :subtitle="t('section_tech_stack_subtitle')" 
      />
      
      <div class="bg-card border border-hairline rounded-xl p-8 md:p-10 space-y-8">
        <div v-for="(stack, category) in techStack" :key="category" class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div class="md:col-span-3 text-sm font-semibold tracking-wider text-ink uppercase font-sans-ui">
            {{ category }}
          </div>
          <div class="md:col-span-9 flex flex-wrap gap-2">
            <Badge v-for="tech in stack" :key="tech" :text="tech" variant="outline" />
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline & Currently Section -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div class="md:col-span-5">
        <SectionTitle 
          :tag="t('section_updates')"
          :title="t('section_currently_title')" 
          :subtitle="t('section_currently_subtitle')" 
        />
      </div>
      <div class="md:col-span-7 bg-card border border-hairline rounded-xl p-6 md:p-8">
        <ul class="space-y-4 font-sans-ui text-base text-body">
          <li v-for="(item, idx) in timeline" :key="idx" class="flex items-start">
            <span class="text-primary mr-3 text-lg select-none">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-card border border-hairline rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.04)_0%,transparent_60%)]"></div>
      
      <h2 class="text-3xl md:text-4xl font-serif text-ink tracking-tight">
        {{ t('contact_title') }}
      </h2>
      <p class="text-base text-body max-w-xl mx-auto font-sans-ui">
        {{ t('contact_subtitle') }}
      </p>
      
      <div class="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
        <CTAButton href="mailto:admin@ganjardev.web.id" variant="primary">
          {{ t('contact_email_btn') }}
        </CTAButton>
        <CTAButton href="https://github.com/ganjar_hadiatna" target="_blank" variant="secondary">
          GitHub
        </CTAButton>
        <CTAButton href="https://linkedin.com/in/ganjar_hadiatna" target="_blank" variant="secondary">
          LinkedIn
        </CTAButton>
        <CTAButton href="https://instagram.com/ganjar_hadiatna" target="_blank" variant="secondary">
          Instagram
        </CTAButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAsyncData } from '#app'
import { useLocale } from '~/composables/useLocale'

// Dynamic translations/locale composable
const { locale, t } = useLocale()

// Import localized data directly
import timelineEn from '~/data/timeline_en.json'
import timelineId from '~/data/timeline_id.json'
import contentEn from '~/data/content_en.json'
import contentId from '~/data/content_id.json'
import projectsEn from '~/data/projects_en.json'
import projectsId from '~/data/projects_id.json'

// Fetch landing page content dynamically via Nuxt Content v3
const { data: page } = await useAsyncData('landing-page', () => {
  const collectionName = locale.value === 'id' ? 'landing_id' : 'landing_en'
  return queryCollection(collectionName as any).first()
}, {
  watch: [locale]
})

// What I'm building data (static list with statuses)
const buildingItems = computed(() => [
  {
    title: 'UndangAbi V2',
    description: locale.value === 'id'
      ? 'Platform undangan digital dengan sistem manajemen tamu.'
      : 'Digital invitation platform with guest management system.',
    status: locale.value === 'id' ? 'Membangun' : 'Building'
  },
  {
    title: locale.value === 'id' ? 'Kursus Ticketing Vue 3' : 'Vue 3 Ticketing Course',
    description: locale.value === 'id'
      ? 'Kursus arsitektur Vue tingkat produksi yang siap pakai.'
      : 'Production-ready Vue architecture course.',
    status: locale.value === 'id' ? 'Sedang Berjalan' : 'In Progress'
  },
  {
    title: locale.value === 'id' ? 'Riset Alur Kerja AI' : 'AI Workflow Research',
    description: locale.value === 'id'
      ? 'Mengeksplorasi otomatisasi AI, agen otonom, dan alur kerja rekayasa.'
      : 'Exploring AI automation, agents, and engineering workflows.',
    status: locale.value === 'id' ? 'Sedang Berjalan' : 'Ongoing'
  }
])

// Tech Stack Badge items
const techStack = {
  'Frontend': ['Vue', 'Nuxt', 'TypeScript'],
  'Backend': ['Node.js', 'PostgreSQL'],
  'AI / Tools': ['Claude Code', 'OpenCode', '9Router', 'AI Agents']
}

// Configurable lists from JSON reactively linked to locale
const timeline = computed(() => locale.value === 'id' ? timelineId : timelineEn)
const featuredContent = computed(() => locale.value === 'id' ? contentId : contentEn)
const projects = computed(() => locale.value === 'id' ? projectsId : projectsEn)
</script>
