<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'OlButton',
})

// 使用验证和类型约束
const props = defineProps<{
  type?: ButtonType
}>()

// 定义type的可选值类型
type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

// 创建样式映射函数
const getButtonClass = computed(() => {
  const baseClass = 'rounded-lg border-1 border-black px-4 py-2 transition-colors text-white'
  const typeMap = {
    default: 'bg-black',
    primary: 'bg-blue-500 hover:bg-blue-600',
    success: 'bg-green-500 hover:bg-green-600',
    warning: 'bg-yellow-500 hover:bg-yellow-600',
    danger: 'bg-red-500 hover:bg-red-600',
  }

  return `${baseClass} ${typeMap[props.type || 'default']} `
})
</script>

<template>
  <button :class="getButtonClass">
    <span class="flex items-center justify-center gap-2 text-size-sm">
      <slot />
    </span>
  </button>
</template>

<style></style>
