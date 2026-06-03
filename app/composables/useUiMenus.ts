export type UiMenuId = string

export function useUiMenus() {
  const activeMenuId = useState<UiMenuId | null>('ui:activeMenuId', () => null)

  function isOpen(id: UiMenuId) {
    return activeMenuId.value === id
  }

  function open(id: UiMenuId) {
    activeMenuId.value = id
  }

  function close(id?: UiMenuId) {
    if (!id || activeMenuId.value === id) {
      activeMenuId.value = null
    }
  }

  function toggle(id: UiMenuId) {
    activeMenuId.value = activeMenuId.value === id ? null : id
  }

  function closeAll() {
    activeMenuId.value = null
  }

  return {
    activeMenuId,
    isOpen,
    open,
    close,
    toggle,
    closeAll,
  }
}
