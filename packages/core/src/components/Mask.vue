<script setup lang="ts">
const target = useTemplateRef<HTMLDivElement>('el')

const { isOutside } = useMouseInElement(target)
</script>

<template>
  <div
    pointer-events-none
    flex items-center justify-center
    transition duration-400 ease-in-out
    :class="{
      'backdrop-blur-sm': !isOutside,
      'pointer-events-auto!': !isOutside,
    }"
  >
    <div ref="el" h-fit w-fit>
      <slot />
    </div>
  </div>
</template>
