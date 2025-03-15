import type { BasicColorSchema } from '@vueuse/core'

/**
 * 主题存储
 */
export const themeStorage = storage.defineItem<BasicColorSchema>(
  'sync:theme',
  {
    fallback: 'auto',
  },
)
