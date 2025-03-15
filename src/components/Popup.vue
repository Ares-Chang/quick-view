<script setup lang="ts">

</script>

<template>
  <div
    fixed z-999 h-220 w-320
    flex="~ col" gap-1
    rd-md p-2 font-sans
    left="1/2" top="1/2"
    text="center gray-700 dark:gray-200"
    bg="white dark:black"
    class="translate--1/2"
  >
    <TooleBar />

    <iframe src="https://www.baidu.com" w-full flex-1 rd-md />
  </div>
</template>
