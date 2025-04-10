import { createGlobalState } from '@vueuse/core'

export const useData = createGlobalState(
  () => {
    const show = ref(false)
    const url = ref('')

    return {
      show,
      url,
    }
  },
)
