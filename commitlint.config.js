export default {
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档修改
        'style', // 代码格式修改
        'lint', // lint相关
        'refactor', // 代码重构
        'perf', // 优化相关
        'test', // 测试用例修改
        'chore', // 其他修改
        'build', // 编译相关的修改
        'ci', // CI相关修改
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // type必须小写
    'type-empty': [2, 'never'], // type不能为空
    'subject-empty': [2, 'never'], // subject不能为空
    'subject-full-stop': [2, 'never', '.'], // subject结尾不能有.
    'header-max-length': [2, 'always', 72], // header最大长度
  },
}
