<template>
  <div flex items-center justify-between gap-2>
    <div flex items-center gap-1>
      <BtnBlock hover:bg-gray-200 dark:hover:bg-gray-800>
        <LinkBar />
      </BtnBlock>
    </div>

    <div flex items-center gap-1>
      <IconBtn icon="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()" />

      <IconBtn icon="i-carbon-close-large" />
    </div>
  </div>
</template>
