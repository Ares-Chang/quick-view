<script setup lang="ts">
const { show, url } = useData()

useEventListener(document, 'click', (event) => {
  if (!event.altKey || event.button !== 0)
    return

  const link = (event.target as HTMLElement).closest('a')
  if (!link)
    return

  // 阻止默认行为
  event.preventDefault()

  url.value = link.href
  show.value = true
})
</script>

<template>
  <Popup v-if="show" />
</template>
