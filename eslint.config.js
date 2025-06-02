// eslint.config.js
const reactAppConfig = require('eslint-config-react-app');

module.exports = [
  {
    // 将 react-app 的配置合并进来
    ...reactAppConfig,
    // 指定生效的文件范围
    files: ['**/*.{js,jsx}'],
    // 可选：自定义语言选项
    languageOptions: {
      parserOptions: {
        babelOptions: {
          presets: [
            ['babel-preset-react-app', false],
            'babel-preset-react-app/prod',
          ],
        },
      },
    },
    // 可选：覆盖或添加额外规则
    rules: {
      semi: ['error', 'never'],
      'no-console': ['warn'],
    },
  },
];
