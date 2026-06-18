<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-md hover:bg-card border border-transparent hover:border-hairline text-muted hover:text-ink transition-all duration-300 focus:outline-none"
    aria-label="Toggle theme"
  >
    <!-- Moon icon (shows when in light mode, clicks to go dark) -->
    <svg
      v-if="!isDark"
      class="w-5 h-5 transition-transform duration-500 ease-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    
    <!-- Sun icon (shows when in dark mode, clicks to go light) -->
    <svg
      v-else
      class="w-5 h-5 transition-transform duration-500 ease-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" stroke-width="2" />
      <path
        stroke-linecap="round"
        stroke-width="2"
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  // Sync state on client mount
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
