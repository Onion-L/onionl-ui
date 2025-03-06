<script lang="ts" setup>
import { AVATAR_GROUP_OVERLAP } from '@onionl-ui/components/constant'
import { useNamespace } from '@onionl-ui/utils'
import { onMounted, provide, ref } from 'vue'

defineOptions({
  name: 'OlAvatarGroup',
})

const props = defineProps({
  overlap: {
    type: String,
    default: '10',

  },
})

const groupRef = ref<HTMLElement | null>()

provide(AVATAR_GROUP_OVERLAP, props.overlap)

const ns = useNamespace('avatar')

onMounted(() => {
  const firstChild = groupRef.value?.children[0] as HTMLElement
  if (firstChild) {
    firstChild.style.marginLeft = '0'
  }
})
</script>

<template>
  <div ref="groupRef" :class="[ns.b('group')]">
    <slot />
  </div>
</template>
