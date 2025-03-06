import { useInstall } from '@onionl-ui/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/group.vue'

export const OlAvatar = useInstall(Avatar)
export const OlAvatarGroup = useInstall(AvatarGroup)

export default { OlAvatar, OlAvatarGroup }
export * from './src/avatar'
