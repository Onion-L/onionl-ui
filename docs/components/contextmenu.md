# 右键菜单

## 基础用法

<script setup>
import { ref } from 'vue'

const section = ref(null)
</script>

<div ref="section" class="w-full h-400px rounded-md bg-primary p-4" />

<OlContextMenu :target="section">
  <OlContextMenuItem>复制</OlContextMenuItem>
  <OlContextMenuItem>粘贴</OlContextMenuItem>
  <OlContextMenuItem>剪切</OlContextMenuItem>
  <OlContextMenuItem>删除</OlContextMenuItem>
</OlContextMenu>

```html
<OlContextmenu>
  <OlContextmenuItem>复制</OlContextmenuItem>
  <OlContextmenuItem>粘贴</OlContextmenuItem>
  <OlContextmenuItem>剪切</OlContextmenuItem>
  <OlContextmenuItem>删除</OlContextmenuItem>
  <OlContextmenuItem>重命名</OlContextmenuItem>
  <OlContextmenuItem>取消</OlContextmenuItem>
</OlContextmenu>
```
