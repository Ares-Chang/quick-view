import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: [
    '@wxt-dev/module-vue',
    '@wxt-dev/auto-icons',
  ],

  manifest: {
    permissions: ['storage', 'declarativeNetRequest'],
    host_permissions: ['<all_urls>'],
  },

  imports: {
    presets: [
      '@vueuse/core',
    ],
    warn: () => {},
  },

  vite: () => ({
    plugins: [
      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
      }),

      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      UnoCSS(),
    ],
  }),
})
