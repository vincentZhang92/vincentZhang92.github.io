---
sidebarDepth: 3
---

# 安装与使用

## 基础用法

1. 安装 Stylelint 及其标准配置

```shell
npm install --save-dev stylelint stylelint-config-standard
```

2. 在项目根目录创建`.stylelintrc.json`配置文件

```json
{
  "extends": "stylelint-config-standard"
}
```

3. 在项目中对所有 CSS 文件执行 Stylelint

```shell
npx stylelint "**/*.css"
```

::: tip 提示
如果你在使用 Stylelint 的同时使用 Prettier，你需要关闭所有冲突的规则。推荐使用 Prettier 共享配置来实现这个效果。

```shell
npm install --save-dev stylelint-config-prettier
```

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```

:::

## 高级用法

你需要使用社区编写的自定义语法。

### 使用社区共享配置

我们建议扩展一个共享配置，其中包含适合您首选语言或库的适当语法。例如，您可以扩展[stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)共享配置来检测`SCSS`。

1. 使用 npm 安装 Stylelint 和标准配置

```shell
npm install --save-dev stylelint stylelint-config-standard-scss
```

2. 在项目根目录创建`.stylelintrc.json`配置文件

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

该配置包括`postcss-scss`语法，配置 SCSS 的内置规则，并包括`stylelint-scss`插件(一组特定于 SCSS 的规则)。

如何结合 Prettier 使用，你应该使用他们对于 SCSS 的[共享配置](https://www.npmjs.com/package/stylelint-config-prettier-scss)

```json
{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ]
}
```

其他共享配置包括

- [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html)
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue)

### 直接使用自定义语法

如果共享配置对于首选语言或库不可用，那么您可以自己安装适当的自定义语法，并使用[customSyntax](./configuration.md#customsyntax)选项来配置它。

例如，分析[Lit Elements](https://lit.dev/)中的 CSS:

1. 使用 npm 安装 Stylelint 及其标准配置和[postcss-lit](https://www.npmjs.com/package/postcss-lit)

```shell
npm install --save-dev stylelint stylelint-config-standard postcss-lit
```

2. 在项目根目录创建`.stylelintrc.json`配置文件

```json
{
  "extends": "stylelint-config-standard",
  "customSyntax": "postcss-lit"
}
```

其他与 Stylelint 兼容的 PostCSS 语法包括

- [postcss-markdown](https://www.npmjs.com/package/postcss-markdown)
- [postcss-less](https://www.npmjs.com/package/postcss-less)
- [postcss-sass](https://www.npmjs.com/package/postcss-sass)
- [sugarss](https://www.npmjs.com/package/sugarss)

更多请查看[PostCSS](https://github.com/postcss/postcss#syntaxes)

### 使用多个自定义语法

您可以使用[override](./configuration.md#overrides)属性。例如，要检测 CSS 文件和 Lit Elements 中的 CSS，你可以更新你的配置对象，包括:

```json
{
  "extends": ["stylelint-config-standard"],
  "overrides": [
    {
      "files": ["**/*.{js}"],
      "customSyntax": "postcss-lit"
    }
  ]
}
```
