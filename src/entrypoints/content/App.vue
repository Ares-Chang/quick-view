<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <h1 text-xl>
      Hello World
    </h1>
    <button btn @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>
