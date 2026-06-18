<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- Editorial Bio (Nuxt Content) -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <ContentRenderer
        v-if="page"
        :value="page"
        class="content-area max-w-6xl mx-auto"
      />
      <div v-else class="font-mono text-[14px] text-mute">
        {{ t('loading_insights') }}
      </div>
    </section>

    <!-- What I'm Building -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_focus_areas')"
        :title="t('section_building_title')"
        :subtitle="t('section_building_subtitle')"
      />
      <ul class="space-y-0">
        <li
          v-for="item in buildingItems"
          :key="item.title"
          class="bg-canvas border-t border-hairline py-3 flex items-start gap-2 last:border-b last:border-hairline"
        >
          <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink shrink-0">[+]</span>
          <div class="flex flex-col gap-1 flex-1">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
              <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink">{{ item.title }}</span>
              <Badge :text="item.status" :variant="item.statusVariant" class="self-start sm:self-auto shrink-0" />
            </div>
            <p class="font-mono font-normal text-[16px] leading-[1.5] text-body">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Projects / Featured Work -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_portfolio')"
        :title="t('section_projects_title')"
        :subtitle="t('section_projects_subtitle')"
      />
      <div class="space-y-0">
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

    <!-- Featured Content -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_publications')"
        :title="t('section_content_title')"
        :subtitle="t('section_content_subtitle')"
      />
      <div class="space-y-0">
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

    <!-- Tech Stack -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_capabilities')"
        :title="t('section_tech_stack_title')"
        :subtitle="t('section_tech_stack_subtitle')"
      />
      <div class="space-y-0">
        <div
          v-for="stack in techStack"
          :key="stack.category"
          class="border-t border-hairline py-3 flex flex-col md:flex-row gap-4 last:border-b last:border-hairline"
        >
          <div class="flex items-start gap-2 md:w-48 shrink-0">
            <span class="font-mono font-bold text-[16px] text-ink">[+]</span>
            <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink">{{ stack.category }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tech in stack.items" :key="tech" :text="tech" variant="outline" />
          </div>
        </div>
      </div>
    </section>

    <!-- Currently / Timeline -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_updates')"
        :title="t('section_currently_title')"
        :subtitle="t('section_currently_subtitle')"
      />
      <ul class="space-y-0">
        <li
          v-for="(item, idx) in timeline"
          :key="idx"
          class="border-t border-hairline py-3 flex items-start gap-2 last:border-b last:border-hairline"
        >
          <span class="font-mono font-bold text-[16px] text-ink shrink-0">[+]</span>
          <span class="font-mono font-normal text-[16px] leading-[1.5] text-body">{{ item }}</span>
        </li>
      </ul>
    </section>

    <!-- Contact -->
    <section class="py-12 md:py-[96px]">
      <div class="max-w-6xl mx-auto">
        <div class="border border-hairline p-5 sm:p-8 md:p-12">
          <h2 class="font-mono font-bold text-[16px] leading-[1.5] text-ink mb-2">
            {{ t('contact_title') }}
          </h2>
          <p class="font-mono font-normal text-[16px] leading-[1.5] text-body mb-8 max-w-2xl">
            {{ t('contact_subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row flex-wrap gap-3">
            <CTAButton href="mailto:admin@ganjardev.web.id" variant="primary">
              {{ t('contact_email_btn') }}
            </CTAButton>
            <CTAButton href="https://linkedin.com/in/ganjarhadiatna" target="_blank" variant="secondary">
              LinkedIn
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAsyncData } from '#app'
import { useLocale } from '~/composables/useLocale'

const { locale, t } = useLocale()

import timelineEn from '~/data/timeline_en.json'
import timelineId from '~/data/timeline_id.json'
import contentEn from '~/data/content_en.json'
import contentId from '~/data/content_id.json'
import projectsEn from '~/data/projects_en.json'
import projectsId from '~/data/projects_id.json'
import techstackData from '~/data/techstack.json'

const { data: page } = await useAsyncData('landing-page', () => {
  const collectionName = locale.value === 'id' ? 'landing_id' : 'landing_en'
  return queryCollection(collectionName as any).first()
}, { watch: [locale] })

const buildingItems = computed(() => [
  {
    title: 'UndangAbi V2',
    description: locale.value === 'id'
      ? 'Platform undangan digital dengan sistem manajemen tamu.'
      : 'Digital invitation platform with guest management system.',
    status: locale.value === 'id' ? 'Membangun' : 'Building',
    statusVariant: 'status-amber' as const
  },
  {
    title: locale.value === 'id' ? 'Kursus Ticketing Vue 3' : 'Vue 3 Ticketing Course',
    description: locale.value === 'id'
      ? 'Kursus arsitektur Vue tingkat produksi yang siap pakai.'
      : 'Production-ready Vue architecture course.',
    status: locale.value === 'id' ? 'Sedang Berjalan' : 'In Progress',
    statusVariant: 'status-amber' as const
  },
  {
    title: locale.value === 'id' ? 'Riset Alur Kerja AI' : 'AI Workflow Research',
    description: locale.value === 'id'
      ? 'Mengeksplorasi otomatisasi AI, agen otonom, dan alur kerja rekayasa.'
      : 'Exploring AI automation, agents, and engineering workflows.',
    status: locale.value === 'id' ? 'Sedang Berjalan' : 'Ongoing',
    statusVariant: 'status-coral' as const
  }
])

const techStack = techstackData

const timeline = computed(() => locale.value === 'id' ? timelineId : timelineEn)
const featuredContent = computed(() => locale.value === 'id' ? contentId : contentEn)
const projects = computed(() => locale.value === 'id' ? projectsId : projectsEn)
</script>
