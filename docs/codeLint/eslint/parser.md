---
sidebarDepth: 3
---

# 解析器

## 介绍

以下解析器与 ESLint 兼容

- [Esprima](https://www.npmjs.com/package/esprima)
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) - 对[Babel](https://babeljs.io/)解析器的包装，使其与 ESLint 兼容。
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 一个将 TypeScript 转换成与 ESTree 兼容的形式，以便在 ESLint 中使用的解析器。
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) - ESLint 自定义的.vue 文件解析器。

::: tip 注意
当使用自定义解析器时，`parserOptions`配置属性仍然需要 ESLint 才能正常使用 ECMAScript 5 中没有的特性。解析器都被传递`parserOptions`，解析器可能使用也可能不使用它们来确定要启用哪些特性。
:::

## @typescript-eslint/parser

### ParserOptions

```js
interface ParserOptions {
  ecmaFeatures?: {
    // 默认false，为true时解析JSX。
    jsx?: boolean;
    // 该选项允许您告诉解析器是否允许在代码库中使用全局return语句， 默认false
    globalReturn?: boolean;
  };
  // 接受任何有效的ECMAScript版本号或“latest”，默认：2018
  ecmaVersion?: number | 'latest';

  // 用于创建JSX元素(在翻译之后)的标识符，默认：React
  jsxPragma?: string | null;
  // 用于JSX片段元素(在翻译之后)的标识符，默认：null
  jsxFragmentName?: string | null;
  // 指定可用的TypeScript库，默认：['es2018']
  lib?: string[];

  // 该选项允许您提供到项目的tsconfig.json的路径，默认：undefined
  project?: string | string[];
  // 此选项允许忽略所提供的项目列表中包含的文件夹，默认：["**/node_modules/**"]
  projectFolderIgnoreList?: string[];
  // 该选项允许您为上面project选项中指定的相对tsconfig路径提供根目录，默认：undefined
  tsconfigRootDir?: string;
  // 该选项允许你提供一个或多个额外的文件扩展名，这些扩展名应该在TypeScript程序编译时考虑。默认：undefined
  extraFileExtensions?: string[];
  // 如果你使用的TypeScript版本不被显式支持，这个选项允许控制解析器是否给你警告，默认：true
  warnOnUnsupportedTypeScriptVersion?: boolean;

  // 该选项允许你通过编程方式提供一个或多个TypeScript Program对象实例的数组，为规则提供类型信息。默认：undefined
  program?: import('typescript').Program;
  // 此选项允许您提供自定义模块解析。默认：undefined
  moduleResolver?: string;

  // 这个选项允许你告诉解析器像在tsconfig.json中设置了`emitDecoratorMetadata: true`一样行动，但没有类型感知检测。默认：undefined
  emitDecoratorMetadata?: boolean;
}
```

## vue-eslint-parser

这个解析器允许我们检测.vue 文件的\<template\>。如果在模板中使用复杂的指令和表达式，\<template\>很容易出错。这个解析器和[eslint-plugin-vue](https://eslint.vuejs.org/)的规则将捕获一些错误。

### 要求

ESLint: v6.2.0 或更高

Node.js: v12.22.x, v14.17.x, v16.x 或更高

### parserOptions

#### parserOptions.parser

您可以使用`parserOptions.parser`属性指定一个自定义解析器来解析`<script>`标签。将向指定的解析器提供`parser`以外的其他属性。

```js
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  }
}
```

你也可以指定一个对象，依据`<script lang="… " >`切换不同的解析器

```js
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": {
      // Script parser for `<script>`
      "js": "espree",

      // Script parser for `<script lang="ts">`
      "ts": "@typescript-eslint/parser",

      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      "<template>": "espree",
    }
  }
}
```

如果`parserOptions.parser`为`false`，`vue-eslint-parser`将完全跳过`<script>`标签的解析。

#### parserOptions.vueFeatures

您可以使用`parserOptions.vueFeatures`属性指定如何解析与 Vue 相关的特性。

**选项：**

- filter: 指定是否解析 Vue2 过滤器。如果指定`false`，解析器不会将`|`解析为过滤器。
- interpolationAsNonHTML: 指定是否将插值表达式解析为 HTML。如果指定`true`，解析器将以非 HTML 方式处理插值表达式(但是，可以在插值表达式中使用 HTML 转义)。默认: `true`
- styleCSSVariableInjection: 为`true`时将解析`<style>`标签内的`v-bind` CSS 函数中的表达式。默认: `true`。
