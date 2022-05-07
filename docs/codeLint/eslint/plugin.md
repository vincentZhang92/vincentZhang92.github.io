---
sidebarDepth: 3
---

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

## eslint-plugin-vue

### 介绍

与 vue-eslint-parser 结合使用捕获一些错误

### 要求

ESLint: v6.2.0 或更高

Node.js: v12.22.x, v14.17.x, v16.x 或更高

### extends

- plugin:vue/base: 确保启用正确的 ESLint 解析的设置和规则。

- plugin:vue/vue3-essential: 包括`base`和防止错误或意外行为的规则。
- plugin:vue/vue3-strongly-recommended: 在`vue3-essential`基础上增加可以大大提高代码可读性或开发体验的规则。
- plugin:vue/vue3-recommended: 在`vue3-strongly-recommended`基础上增加了强制执行社区主观上默认的规则，以确保一致性。

- plugin:vue/essential: 包括`base`和防止错误或意外行为的规则。
- plugin:vue/strongly-recommended: 在`essential`基础上增加可以大大提高代码可读性或开发体验的规则。
- plugin:vue/recommended: 在`strongly-recommended`基础上增加了强制执行社区主观上默认的规则，以确保一致性。

### [rules](https://eslint.vuejs.org/rules/)
