import { createGlobalState } from '@vueuse/core'

export const useData = createGlobalState(
  () => {
    const show = ref(false)
    const url = ref('https://vueuse.org/')

    return {
      show,
      url,
    }
  },
)
