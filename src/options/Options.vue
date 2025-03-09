<script setup lang="ts">
import logo from '~/assets/logo.svg'
import { storageDemo } from '~/logic/storage'
</script>

<template>
  <main px-4 py-10 text-center text-gray-700 dark:text-gray-200>
    <img :src="logo" class="mx-2 text-2xl icon-btn" alt="extension icon">
    <div>Options</div>
    <SharedSubtitle />

    <input v-model="storageDemo" class="mt-2 border border-gray-400 rounded px-2 py-1">

    <div class="mt-4">
      Powered by Vite
      <i i-pixelarticons-zap align-middle icon-btn />
    </div>
  </main>
</template>
