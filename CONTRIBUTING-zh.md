[English](./CONTRIBUTING.md) | 中文
# 贡献指南

感谢你考虑为Onionl-UI做出贡献！以下是参与项目开发的指南。

## 行为准则

请确保你的行为符合我们的行为准则：
- 对他人保持尊重和包容
- 接受建设性的批评
- 关注什么对社区最有利
- 展现同理心

## 如何贡献

### 报告 Bug

如果你发现了 bug，请创建一个 issue，并包含以下信息：
- bug 的详细描述
- 复现步骤
- 预期行为
- 实际行为
- 截图（如果适用）
- 运行环境（操作系统、浏览器版本等）

### 开发组件

如果你想要开发一个组件，请按照以下步骤进行：
1. 查看 Issues 和 PR 列表，确保没有重复的开发工作
2. 查看 [TODO](./TODO.md) 文件，确认组件是否在开发计划中
3. 创建一个新的 Issue 描述你要开发的组件
4. 等待维护者确认和讨论
5. 开始开发并提交 PR

### 提出新组件

如果你有新组件的建议，请：
1. 先检查 issue 列表，看是否已经有人提出
2. 创建新的 issue，详细描述该功能
3. 说明为什么这个功能对项目有价值

### 提交代码

1. Fork 本仓库

```bash
git clone https://github.com/Onion-L/onionl-ui.git
```

2. 创建你的特性分支

```bash
git checkout -b feature/AmazingFeature
```

3. 提交你的修改

```bash
git commit -m 'add some feature'
```

4. 推送到分支
```bash
git push origin feature/AmazingFeature
```

5. 创建一个 Pull Request

#### 提交规范

commit 信息请遵循以下格式：
- `feat`: 新功能
- `fix`: 修复 bug
- `wip`: 开发中
- `docs`: 文档修改
- `style`: 代码格式修改
- `lint`: lint相关
- `refactor`: 代码重构
- `perf`: 优化相关
- `test`: 测试用例修改
- `chore`: 其他修改
- `build`: 编译相关的修改
- `ci`: CI相关修改

示例：`feat: add new component`

### 代码风格

- 使用 TypeScript 编写代码
- 遵循项目既定的代码风格
- 确保代码通过 ESLint 检查
- 为新功能编写测试
- 保持代码简洁，遵循 DRY 原则

### 开发流程

1. 安装依赖：
```bash
npm install
```

2. 构建项目：
```bash
npm run build
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 运行测试：
```bash
npm run test
```

> 注意：组件开发依赖于 UnoCSS Preset，请在完成构建命令后再启动 play 项目

## Pull Request 流程

1. 确保 PR 描述清晰地说明了改动的内容和原因
2. 确保所有自动化测试通过
3. 如果适用，更新相关文档
4. 请求至少一位维护者进行代码审查
5. 根据反馈进行修改

## 获取帮助

如果你在贡献过程中需要帮助：
- 查看项目文档
- 在 issue 中提问
- 联系项目维护者

再次感谢你的贡献✨
