<script setup lang="ts">
const { url } = useData()
</script>

<template>
  <Mask fixed left-0 top-0 z-999999 h-screen w-screen>
    <div
      h-90vh w-95vw
      flex="~ col" gap-2
      rd-xl p-2 font-sans
      text="center gray-700 dark:gray-200"
      bg="gray-100 dark:gray-950"
      transition duration-200 ease-in-out
      border="~ gray-200 dark:gray-800"
    >
      <TooleBar select-none />

      <iframe :src="url" w-full flex-1 rd-md />
    </div>
  </Mask>
</template>
