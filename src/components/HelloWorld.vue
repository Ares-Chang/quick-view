<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div flex="~ col 1" items-center gap-6>
    <h1 text-xl>
      {{ msg }}
    </h1>

    <div flex="~ col" justify-center items-center gap-6>
      <button type="button" btn @click="count++">
        count is {{ count }}
      </button>

      <p w="80%" text-center>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
