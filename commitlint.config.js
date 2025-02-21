export default {
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'wip',
        'docs',
        'style',
        'lint',
        'refactor',
        'perf',
        'test',
        'chore',
        'build',
        'ci',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
}
