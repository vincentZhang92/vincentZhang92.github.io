---
sidebarDepth: 3
---

# 使用

## 安装

```shell
# npm
npm install --save-dev --save-exact prettier
# yarn
yarn add --dev --exact prettier
```

## 配置文件

Prettier 支持多种配置文件格式(按优先级排序)

- 在`package.json`文件中添加`prettier`关键字
- `.prettierrc`(JSON 或 YAML 格式)
- `.prettierrc.json` 或 `.prettierrc.yml` 或 `.prettierrc.yaml` 或 `.prettierrc.json5`
- `.prettierrc.js` 或 `.prettierrc.cjs` 或 `prettier.config.js` 或 `prettier.config.cjs`(使用 module.exports 导出一个对象)
- `.prettierrc.toml`

详细配置查看[配置](./options.md)

## .prettierignore

使用`.prettierignore`可以完全忽略(即不重新格式化)某些文件和文件夹

```
# Ignore artifacts:
build
coverage

# Ignore all HTML files:
*.html
```

## Pre-commit 钩子

您可以使用 pre-commit 工具来使用 Prettier。这可以在提交之前通过`git add`重新格式化被标记为“staged”的文件。

- [lint-staged](https://github.com/okonet/lint-staged) + [husky](https://github.com/typicode/husky)

- [lint-staged](https://github.com/okonet/lint-staged) + [yorkie](https://github.com/typicode/husky)

- [pretty-quick](https://github.com/azz/pretty-quick)

- [pre-commit](https://github.com/pre-commit/pre-commit)

- [Husky.Net](https://github.com/alirezanet/Husky.Net)

- [git-format-staged](https://github.com/hallettj/git-format-staged)

- Shell script

## CLI

### write

```shell
# 格式化全部文件
prettier --write .
# 格式化指定目录
prettier --write app/
# 格式化指定文件
prettier --write app/components/Button.js
# 格式化符合正则要求的文件
prettier --write "app/**/*.test.js"
```

该命令用于格式化当前目录及其子目录下所有 Prettier 支持的文件

### check

```shell
prettier --check .
```

`--check`只检查文件是否已经格式化，而不是覆盖它们。

::: tip
更多命令查看[CLI](https://prettier.io/docs/en/cli.html)
:::

## 与 Linters 结合

### [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

1. 安装

```shell
npm install --save-dev eslint-config-prettier
```

2. 添加配置到`.eslintrc.json`中

```js
{
  "extends": [
    // other configs ...
    "plugin:prettier/recommended"
  ]
}
```

### [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

1. 安装

```shell
npm install --save-dev stylelint-config-prettier
```

2. 添加配置到`.stylelintrc.*`文件中

```js
{
  "extends": [
    // other configs ...
    "stylelint-config-prettier"
  ]
}
```
