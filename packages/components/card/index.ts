import { useInstall } from '@onionl-ui/utils'
import Card from './src/card.vue'
import CardContent from './src/content.vue'
import CardFooter from './src/footer.vue'
import CardHeader from './src/header.vue'

export const OlCard = useInstall(Card)
export const OlCardHeader = useInstall(CardHeader)
export const OlCardContent = useInstall(CardContent)
export const OlCardFooter = useInstall(CardFooter)

export default { OlCard, OlCardHeader, OlCardContent, OlCardFooter }
