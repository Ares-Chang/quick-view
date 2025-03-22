<script setup lang="ts">
const { url } = useData()

const website = computed(() => url.value.replace(/^https?:\/\//, ''))

const icon = computed(() => `https://www.google.com/s2/favicons?domain=${website.value}&sz=32`)
</script>

<template>
  <div flex items-center gap-2>
    <img :src="icon" alt="logo" h-5 w-5>

    <a
      :href="url" target="_blank"
      color="gray-500 dark:gray-400"
      max-w-30 truncate text-sm font-medium underline
    >
      {{ website }}
    </a>

    <IconBtn icon="i-carbon-share" />

    <IconBtn icon="i-material-symbols-refresh-rounded" />
  </div>
</template>
