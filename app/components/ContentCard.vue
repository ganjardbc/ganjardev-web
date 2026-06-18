<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="border border-hairline bg-card/40 p-6 rounded-lg hover:bg-card hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full group"
  >
    <div>
      <div class="flex items-center justify-between mb-4 font-sans-ui text-xs">
        <span class="text-primary font-medium tracking-wide uppercase">{{ category }}</span>
        <span class="flex items-center text-muted font-medium bg-canvas border border-hairline px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
          <svg v-if="type === 'Video'" class="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          <svg v-else class="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          {{ type }}
        </span>
      </div>
      
      <h3 class="text-lg md:text-xl font-serif text-ink tracking-tight mb-6 group-hover:text-primary transition-colors duration-200 line-clamp-3 leading-snug">
        {{ title }}
      </h3>
    </div>
    
    <div class="flex items-center justify-between text-xs text-muted font-sans-ui border-t border-hairline/50 pt-4">
      <span>{{ date }}</span>
      <span>{{ duration }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  category: string
  type: string
  duration: string
  date: string
  link: string
}>()
</script>
