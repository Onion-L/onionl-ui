import { useInstall } from '@onionl-ui/utils'
import Swap from './src/swap.vue'
import SwapItem from './src/swapItem.vue'

export const OlSwap = useInstall(Swap)
export const OlSwapItem = useInstall(SwapItem)

export default { OlSwap, OlSwapItem }
