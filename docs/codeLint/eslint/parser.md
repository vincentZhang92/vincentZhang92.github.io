# 解析器

以下解析器与 ESLint 兼容

- [Esprima](https://www.npmjs.com/package/esprima)
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) - 对[Babel](https://babeljs.io/)解析器的包装，使其与 ESLint 兼容。
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 一个将 TypeScript 转换成与 ESTree 兼容的形式，以便在 ESLint 中使用的解析器

::: tip 注意
当使用自定义解析器时，`parserOptions`配置属性仍然需要 ESLint 才能正常使用 ECMAScript 5 中没有的特性。解析器都被传递`parserOptions`，解析器可能使用也可能不使用它们来确定要启用哪些特性。
:::
