<script setup lang="ts">
import { initLogic } from '~/logic'

const { show } = useData()

initLogic()
</script>

<template>
  <Popup v-if="show" />
</template>
