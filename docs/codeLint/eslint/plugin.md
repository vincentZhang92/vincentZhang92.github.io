# 插件

## @typescript-eslint/eslint-plugin

### 介绍

详见[官网](https://typescript-eslint.io/docs/)

### 常见配置

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    // 这允许您在代码库中使用这些规则，在使用如'plugin:@typescript-eslint/recommended'时可忽略
    '@typescript-eslint'
  ],
  extends: [
    // ESLint内置的“推荐”配置 - 它打开了一个小的、合理的规则集，这些规则适用于众所周知的最佳实践。
    'eslint:recommended',
    // “推荐”配置-它就像eslint:recommended，只是它只打开来自TypeScript定制插件的规则。
    'plugin:@typescript-eslint/recommended'
  ]
};
```

### [rules](https://typescript-eslint.io/rules/)
