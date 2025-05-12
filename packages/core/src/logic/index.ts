export function initLogic() {
  useClickLink()
  useDragLink()
  useEscClose()
}

/**
 * 监听点击链接
 */
function useClickLink() {
  const { show, url } = useData()

  useEventListener(document, 'click', (event) => {
    if (!event.altKey || event.button !== 0)
      return

    const link = (event.target as HTMLElement).closest('a')
    if (!link)
      return

    // 阻止默认行为
    event.preventDefault()

    url.value = link.href
    show.value = true
  })
}

/**
 * 监听拖动链接
 */
function useDragLink() {
  const { show, url } = useData()

  // 追踪拖动状态
  let isDragging = false
  let draggedLink: string | null = null

  // 开始拖动时记录链接
  useEventListener(document, 'dragstart', (event) => {
    const link = (event.target as HTMLElement).closest('a')
    if (!link)
      return

    isDragging = true
    draggedLink = link.href
  })

  // 拖动结束时判断是否显示预览
  useEventListener(document, 'dragend', () => {
    if (!isDragging || !draggedLink)
      return

    // 重置状态
    isDragging = false
    url.value = draggedLink
    show.value = true
    draggedLink = null
  })
}

/**
 * 监听 Esc 键关闭
 */
export function useEscClose(document: Document = window.document) {
  const { close } = useData()

  useEventListener(document, 'keydown', (event) => {
    if (event.key === 'Escape')
      close()
  })
}
