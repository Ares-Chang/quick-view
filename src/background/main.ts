// 开发模式下，启用 HMR
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  /**
   * 加载最新内容脚本
   * @FIXME: MV3 下已经不生效了
   */
  import('./contentScriptHMR')
}
