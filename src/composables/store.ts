import { createGlobalState } from '@vueuse/core'

export const useData = createGlobalState(
  () => {
    const url = ref('https://vueuse.org/')

    return {
      url,
    }
  },
)
