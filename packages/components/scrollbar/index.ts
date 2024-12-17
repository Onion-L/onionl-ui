import { useInstall } from '@onionl-ui/utils'
import Scrollbar from './src/scrollbar.vue'
import ScrollSnap from './src/snap.vue'

export const OlScrollbar = useInstall(Scrollbar)
export const OlScrollSnap = useInstall(ScrollSnap)

export default { OlScrollbar, OlScrollSnap }
