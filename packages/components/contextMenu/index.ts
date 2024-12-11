import { useInstall } from '@onionl-ui/utils'
import ContextMenu from './src/contextMenu.ts'
import ContextMenuItem from './src/contextMenuItem.ts'

export const OlContextMenu = useInstall(ContextMenu)
export const OlContextMenuItem = useInstall(ContextMenuItem)

export default { OlContextMenu, OlContextMenuItem }
