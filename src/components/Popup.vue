<script setup lang="ts">
const url = ref('https://vueuse.org/')
</script>

<template>
  <div
    fixed z-999 h-220 w-320
    flex="~ col" gap-2
    rd-xl p-2 font-sans
    left="1/2" top="1/2"
    text="center gray-700 dark:gray-200"
    bg="gray-100 dark:gray-950"
    transition duration-200 ease-in-out
    border="~ gray-200 dark:gray-800"
    class="translate--1/2"
  >
    <TooleBar />

    <iframe :src="url" w-full flex-1 rd-md />
  </div>
</template>
