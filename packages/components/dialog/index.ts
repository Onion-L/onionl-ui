import { useInstall } from '@onionl-ui/utils'
import Dialog from './src/dialog.vue'
import DialogCard from './src/dialogCard.vue'

export const OlDialog = useInstall(Dialog)
export const OlDialogCard = useInstall(DialogCard)

export default { OlDialog, OlDialogCard }
