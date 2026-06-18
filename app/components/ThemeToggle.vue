<template>
  <button
    @click="toggle"
    class="px-2 py-0.5 font-mono text-[14px] leading-[2] text-mute hover:text-ink transition-colors focus:outline-none border border-transparent hover:border-hairline rounded-[4px] select-none"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span v-if="isDark">[ light ]</span>
    <span v-else>[ dark ]</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggle = () => {
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
