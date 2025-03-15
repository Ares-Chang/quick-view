<script lang="ts" setup>
import vueLogo from '~/assets/vue.svg'
import wxtLogo from '~/public/wxt.svg?url'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div flex items-center justify-center gap-2>
    <a href="https://wxt.dev" target="_blank">
      <img :src="wxtLogo" class="logo" alt="WXT logo">
    </a>
    <span text-2xl>+</span>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueLogo" class="logo vue" alt="Vue logo">
    </a>
  </div>

  <div flex="~ col 1" items-center gap-6>
    <h1 text-xl>
      {{ msg }}
    </h1>

    <div flex="~ col" items-center justify-center gap-6>
      <button type="button" btn @click="count++">
        count is {{ count }}
      </button>

      <p w="80%" text-center>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
