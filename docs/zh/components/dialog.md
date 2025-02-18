# Dialog

对话框组件用于弹出式交互，支持自定义内容和布局。

## 基本用法

基础对话框包含遮罩层、内容区和关闭操作。

<demo github="https://github.com/Onion-L/onionl-ui/tree/docs/packages/components/dialog" vue="../../demo/dialog/basic.vue" />

## 组件结构

Dialog组件由以下部分组成：
- `<ol-dialog>`: 对话框容器
- `<ol-dialog-card>`: 卡片式内容容器
  - 继承Card组件的结构（Header/Content/Footer）

## 参数配置

| 参数名 | 说明 | 类型 | 默认值 |
|--------|-----|------|-------|
| show | 控制显示 | boolean | false |
| mask | 显示遮罩 | boolean | true |
| maskClickClose | 点击遮罩关闭 | boolean | true |

## 事件
- `close`: 关闭对话框时触发
