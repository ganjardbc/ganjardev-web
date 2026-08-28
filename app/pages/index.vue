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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="item in buildingItems"
          :key="item.title"
          class="bg-canvas border border-hairline p-5 flex flex-col gap-2"
        >
          <div class="flex items-start justify-between gap-3">
            <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink">{{ item.title }}</span>
            <Badge :text="item.status" :variant="item.statusVariant" class="shrink-0" />
          </div>
          <p class="font-mono font-normal text-[16px] leading-[1.5] text-body">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Projects / Featured Work -->
    <section class="py-12 md:py-[96px] border-b border-hairline">
      <SectionTitle
        :tag="t('section_portfolio')"
        :title="t('section_projects_title')"
        :subtitle="t('section_projects_subtitle')"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="stack in techStack"
          :key="stack.category"
          class="border border-hairline p-5 flex flex-col gap-3"
        >
          <span class="font-mono font-bold text-[16px] leading-[1.5] text-ink">{{ stack.category }}</span>
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
      <div class="pl-2">
        <div class="relative">
          <div class="absolute left-0 top-2 bottom-2 w-px bg-hairline-strong -translate-x-1/2"></div>
          <div class="space-y-6">
            <div
              v-for="(item, idx) in timeline"
              :key="idx"
              class="relative"
            >
              <span class="absolute left-0 top-[5px] w-[7px] h-[7px] rounded-full bg-ink -translate-x-1/2"></span>
              <span class="block pl-5 font-mono font-normal text-[16px] leading-[1.5] text-body">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
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
            <CTAButton href="mailto:ganjardbc@gmail.com" variant="primary">
              {{ t('contact_email_btn') }}
            </CTAButton>
            <CTAButton href="https://wa.me/6289699181669" target="_blank" variant="secondary">
              WhatsApp
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
    title: 'CAF — Coderium Agent Framework',
    description: locale.value === 'id'
      ? 'Framework multi-agent kustom untuk mengotomasi proses development, dari planning sampai deployment.'
      : 'A custom multi-agent framework that automates the development process, from planning to deployment.',
    status: locale.value === 'id' ? 'Sedang Berjalan' : 'In Progress',
    statusVariant: 'status-amber' as const
  },
  {
    title: locale.value === 'id' ? 'AI Agent untuk umkm-pos' : 'AI Agents for umkm-pos',
    description: locale.value === 'id'
      ? 'Agent Input Produk, Laporan Harian, dan Stok untuk sistem POS multi-tenant.'
      : 'Product Input, Daily Report, and Stock agents for a multi-tenant POS system.',
    status: locale.value === 'id' ? 'Membangun' : 'Building',
    statusVariant: 'status-amber' as const
  },
  {
    title: locale.value === 'id' ? 'Rebuild Coderium V2' : 'Coderium V2 Rebuild',
    description: locale.value === 'id'
      ? 'Migrasi platform content-publishing & knowledge management ke monorepo modern.'
      : 'Migrating a content-publishing and knowledge-management platform to a modern monorepo.',
    status: locale.value === 'id' ? 'Membangun' : 'Building',
    statusVariant: 'status-amber' as const
  }
])

const techStack = techstackData

const timeline = computed(() => locale.value === 'id' ? timelineId : timelineEn)
const featuredContent = computed(() => locale.value === 'id' ? contentId : contentEn)
const projects = computed(() => locale.value === 'id' ? projectsId : projectsEn)
</script>
