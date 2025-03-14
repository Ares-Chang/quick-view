import UnoCSS from 'unocss/vite'
import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],

  vite: () => ({
    plugins: [
      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      UnoCSS(),
    ],
  }),
})
