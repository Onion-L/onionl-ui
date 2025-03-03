import { useInstall } from '@onionl-ui/utils'
import TourProvider from './src/provider.vue'
import TourStep from './src/step.vue'

export const OlTourProvider = useInstall(TourProvider)
export const OlTourStep = useInstall(TourStep)

export * from './src/tour'
export default OlTourProvider
