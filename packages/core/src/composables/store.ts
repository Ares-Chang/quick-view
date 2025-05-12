import { createGlobalState } from '@vueuse/core'

export const useData = createGlobalState(
  () => {
    const show = ref(false)
    const url = ref('')

    function refresh() {
      const oldUrl = url.value
      url.value = ''
      nextTick(() => url.value = oldUrl)
    }

    function close() {
      url.value = ''
      show.value = false
    }

    return {
      show,
      url,
      refresh,
      close,
    }
  },
)
