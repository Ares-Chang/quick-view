<template>
  <div
    flex items-center justify-center
    transition duration-400 ease-in-out
    backdrop="blur-none has-[#mask-box]:hover:blur-sm"
    pointer-events="auto has-[#mask-box]:hover:none"
  >
    <div id="mask-box" h-fit w-fit>
      <slot />
    </div>
  </div>
</template>
