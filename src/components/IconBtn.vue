<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()
</script>

<template>
  <BtnBlock>
    <button
      flex items-center justify-center
      icon-btn group-hover:opacity-100
      :class="props.icon"
    >
      <slot />
    </button>
  </BtnBlock>
</template>
