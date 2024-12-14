import type { Plugin } from 'vue'
import { OlButton } from '../components/button'
import { OlContextMenu, OlContextMenuItem } from '../components/contextMenu'
import { OlIcon } from '../components/icon'
import { OlImage } from '../components/image'
import { OlInput } from '../components/input'
import { OlPixelImage } from '../components/pixelImage'

export const Components = [
  OlButton,
  OlContextMenu,
  OlContextMenuItem,
  OlIcon,
  OlInput,
  OlImage,
  OlPixelImage,
] as Plugin[]
