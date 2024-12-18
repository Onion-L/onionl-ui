import type { Plugin } from 'vue'
import { OlButton } from '../components/button'
import { OlCard, OlCardContent, OlCardFooter, OlCardHeader } from '../components/card'
import { OlContextMenu, OlContextMenuItem } from '../components/contextMenu'
import { OlFlipCard } from '../components/flipCard'
import { OlFlipControl } from '../components/flipControl'
import { OlHalo } from '../components/halo'
import { OlIcon } from '../components/icon'
import { OlImage } from '../components/image'
import { OlInput } from '../components/input'
import { OlPixelImage } from '../components/pixelImage'
import { OlScrollbar, OlScrollSnap } from '../components/scrollbar'

export const Components = [
  OlButton,
  OlCard,
  OlCardHeader,
  OlCardContent,
  OlCardFooter,
  OlContextMenu,
  OlContextMenuItem,
  OlFlipControl,
  OlHalo,
  OlIcon,
  OlInput,
  OlImage,
  OlPixelImage,
  OlScrollbar,
  OlScrollSnap,
  OlFlipCard,
] as Plugin[]
