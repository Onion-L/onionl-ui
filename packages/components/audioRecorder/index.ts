import { useInstall } from '@onionl-ui/utils'
import AudioRecorder from './src/recorder.vue'

export const OlAudioRecorder = useInstall(AudioRecorder)

export default OlAudioRecorder

export * from './src/microphone'
