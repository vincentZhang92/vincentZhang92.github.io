# ESLint 配置

这里只是简单概括，完整版请查阅[官网](https://eslint.org/docs/user-guide/configuring/)

## 文件格式

- JavaScript - `.eslintrc.js`
- JavaScript (ESM) - `.eslintrc.cjs`
- YAML - `.eslintrc.yaml` 或 `.eslintrc.yml`
- JSON - `.eslintrc.json`
- package.json - 在`package.json`文件中添加`eslintConfig`属性

如果同一个目录存在多个配置文件，ESLint 只会使用其中之一，加载的优先级为：

1. `.eslintrc.js`
2. `.eslintrc.cjs`
3. `.eslintrc.yaml`
4. `.eslintrc.yml`
5. `.eslintrc.json`
6. `package.json`

## 配置属性

- [root](https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy): 标记当前配置文件所在位置为根目录，确定其子目录需要加载 ESLint 配置的范围
- [extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files): 需要继承的配置，如`eslint:recommended`
- [overrides](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns): 用于对不同文件采取更加精准的控制
- [env](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments): 指定可用环境
- [globals](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals): 指定全局变量
- [parserOptions](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options): 指定解析器选项
  - ecmaVersion: 指定想要使用的 ECMAScript 语法版本
  - sourceType: 如果你的代码在 ECMAScript 模块中，设置为`script`(默认)或`module`
  - allowReserved: 允许使用保留字作为标识符(如果`ecmaVersion`为 3)
  - ecmaFeatures: 指示想要使用的其他语言特性的对象
    - globalReturn: 允许在全局范围内使用`return`语句
    - impliedStrict: 启用全局严格模式(如果`ecmaVersion`为 5 或更高)
    - jsx: 启用[JSX](https://facebook.github.io/jsx/)
- [parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser): 指定解析器
- [rules](https://eslint.org/docs/rules/): 规则
- [noInlineConfig](https://eslint.org/docs/user-guide/configuring/rules#disabling-inline-comments): 禁用所有行内配置注释
- [reportUnusedDisableDirectives](https://eslint.org/docs/user-guide/configuring/rules#report-unused-eslint-disable-comments): 报告所有没有使用的`eslint-disable`注释
- [plugins](https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins): 配置插件
- [processor](https://eslint.org/docs/user-guide/configuring/plugins#specifying-processor): 指定插件提供的处理器
- [ignorePatterns](https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files): 指定 ESLint 需要忽略的文件或目录
