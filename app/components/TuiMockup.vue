<template>
  <div
    class="w-full rounded-none p-6 sm:p-12 md:p-24 flex flex-col items-center justify-center gap-6 md:gap-8 transition-colors duration-200"
    :style="{ backgroundColor: 'var(--color-tui-bg)' }"
  >
    <!-- Block-pixel ASCII wordmark -->
    <pre
      class="font-mono text-[7px] sm:text-[9px] md:text-[11px] leading-tight select-none overflow-x-auto text-center whitespace-pre transition-colors duration-200 w-full"
      :style="{ color: 'var(--color-tui-text)' }"
    >{{ asciiLogo }}</pre>

    <!-- TUI Prompt Row -->
    <div
      class="w-full max-w-lg rounded-[4px] flex items-center gap-3 px-3 py-2 font-mono text-sm transition-colors duration-200"
      :style="{ backgroundColor: 'var(--color-tui-elevated)', border: '1px solid var(--color-tui-border)' }"
    >
      <span class="select-none transition-colors duration-200" :style="{ color: 'var(--color-tui-ash)' }">│</span>
      <span class="text-xs transition-colors duration-200" :style="{ color: 'var(--color-tui-ash)' }">$</span>
      <span class="flex-1 text-xs truncate transition-colors duration-200" :style="{ color: 'var(--color-tui-text)' }">{{ command }}</span>
      <span class="text-xs shrink-0 transition-colors duration-200" :style="{ color: 'var(--color-tui-ash)' }">{{ model }}</span>
    </div>

    <!-- Keybinding hints -->
    <div
      class="flex flex-wrap gap-6 justify-center font-mono text-[11px] transition-colors duration-200"
      :style="{ color: 'var(--color-tui-ash)' }"
    >
      <span>tab <span :style="{ color: 'var(--color-tui-mute)' }">switch section</span></span>
      <span>ctrl-p <span :style="{ color: 'var(--color-tui-mute)' }">commands</span></span>
      <span>esc <span :style="{ color: 'var(--color-tui-mute)' }">back</span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const asciiLogo = `
 ██████╗  █████╗ ███╗   ██╗     ██╗ █████╗ ██████╗
██╔════╝ ██╔══██╗████╗  ██║     ██║██╔══██╗██╔══██╗
██║  ███╗███████║██╔██╗ ██║     ██║███████║██████╔╝
██║   ██║██╔══██║██║╚██╗██║██   ██║██╔══██║██╔══██╗
╚██████╔╝██║  ██║██║ ╚████║╚█████╔╝██║  ██║██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`.trim()

const command = '$ build --ai-agents --stack vue-nuxt --model gemini'
const model = 'Gemini 3.5'
</script>
