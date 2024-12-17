import type { Plugin } from 'vue'
import { OlButton } from '../components/button'
import { OlContextMenu, OlContextMenuItem } from '../components/contextMenu'
import { OlHalo } from '../components/halo'
import { OlIcon } from '../components/icon'
import { OlImage } from '../components/image'
import { OlInput } from '../components/input'
import { OlPixelImage } from '../components/pixelImage'
import { OlScrollbar, OlScrollSnap } from '../components/scrollbar'

export const Components = [
  OlButton,
  OlContextMenu,
  OlContextMenuItem,
  OlHalo,
  OlIcon,
  OlInput,
  OlImage,
  OlPixelImage,
  OlScrollbar,
  OlScrollSnap,
] as Plugin[]
