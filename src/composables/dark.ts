import type { BasicColorSchema, UseColorModeOptions } from '@vueuse/core'
import { themeStorage } from '@/utils/storages'

const storage = ref<BasicColorSchema>('auto')

initTheme()
/**
 * 从 storage 初始化主题并监听
 */
async function initTheme() {
  const theme = await themeStorage.getValue()
  storage.value = theme
  themeStorage.watch(value => storage.value = value)
}

export const isDark = useDark({
  storageRef: storage,
  onChanged: async (isDark) => {
    await themeStorage.setValue(isDark ? 'dark' : 'light')
  },
})

export const toggleDark = useToggle(isDark)

/**
 * 同步 isDark 状态到不同页面指定元素
 * @param selector - 选择器
 */
export function syncIsDark(selector?: UseColorModeOptions['selector']) {
  const contentIsDark = useDark({ selector })
  watch(isDark, isDark => contentIsDark.value = isDark)
}
