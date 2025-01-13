import { useInstall } from '@onionl-ui/utils'
import DraggableItem from './src/draggableItem.vue'
import DraggableList from './src/draggableList.vue'

export const OlDraggableList = useInstall(DraggableList)
export const OlDraggableItem = useInstall(DraggableItem)

export default { OlDraggableList, OlDraggableItem }
