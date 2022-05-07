---
sidebarDepth: 3
---

# 配置

## 配置文件

Stylelint 支持的配置文件格式如下：

- package.json 中的`stylelint`属性
- 一个`.stylelintrc`文件
- 一个导出 JS 对象的`stylelint.config.js`文件
- 一个导出 JS 对象的`stylelint.config.cjs`文件(当在`package.json`指定了`"type":"module"`的 JavaScript 包中运行 Stylelint 时)

`.stylelintrc`文件(没有后缀)可以使用 JSON 或 YAML 格式。你可以添加一个文件后缀来帮你的文本编辑器提供语法检查和高亮。

- `.stylelintrc.json`
- `.stylelintrc.yaml` / `.stylelintrc.yml`
- `.stylelintrc.js`

## 配置项

### rules

规则决定静态分析器查找的内容以及报错内容。目前 Stylelint 中有超过 170 条[规则](https://stylelint.io/user-guide/rules/list)。

`rules`属性是一个对象，关键字为规则名称，值为规则配置，例如

```json
{
  "rules": {
    "color-no-invalid-hex": true
  }
}
```

每个规则配置符合以下格式之一：

- `null`(关闭规则)
- 单个值(主要选项)
- 有两个值的数组(\[主要选项，次要选项\])

指定主要选项就可以开启规则，有些规则为了进一步定制提供了次要选项。例如：

```json
{
  "rules": {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  }
}
```

#### disableFix

你可以设置`disableFix`次要选项来关闭规则的自动修复。

```json
{
  "rules": {
    "color-function-notation": ["modern", { "disableFix": true }]
  }
}
```

#### message

当一条规则被违反时，你可以使用`message`次要选项来传递一个自定义消息。

```json
{
  "rules": {
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected custom property name to be kebab-case"
      }
    ]
  }
}
```

#### reportDisables

您可以设置`reportdisabled`次要选项来报告此规则的任何禁用样式的注释，从而有效地禁止作者选择不使用它。

```json
{
  "rules": {
    "color-no-invalid-hex": [true, { "reportDisables": true }]
  }
}
```

#### severity

您可以使用`severity`次要选项来调整任何特定规则的严重性，可选值有"warning"和"error"(默认)

```json
{
  "rules": {
    "number-max-precision": [
      2,
      {
        "ignoreUnits": ["em"],
        "severity": "warning"
      }
    ]
  }
}
```

### extends

你可以扩展一个存在的配置(无论是你自己的还是第三方的)。

最常见的配置包括

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) - 只是开启了避免错误的规则
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - 在`stylelint-config-recommended`的基础上打开了社区公认的规则

你可以扩展一组存在的配置，但是配置中同名规则会被重写，越靠后的配置优先级越高。

### plugins

插件是由社区构建的规则或规则集，它们支持方法学、工具集、*非标准*CSS 特性或非常特定的用例。

```json
{
  "plugins": ["../some-rule-set.js"],
  "rules": {
    "some-rule-set/first-rule": "everything",
    "some-rule-set/second-rule": "nothing",
    "some-rule-set/third-rule": "everything"
  }
}
```

### customSyntax

定义代码中使用的自定义语法，查看[更多](https://stylelint.io/user-guide/usage/options#customsyntax)

### overrides

你可以在`overrides`键下提供配置，它只适用于匹配特定 glob 模式的文件，使用与你在命令行上传递的相同格式(例如，`app/**/*.test.css`)。

通过使用`overrides`键，可以根据配置中的文件 glob 模式覆盖设置。

```json
{
  "rules": {
    "alpha-value-notation": "number"
  },
  "overrides": [
    {
      "files": ["*.scss", "**/*.scss"],
      "customSyntax": "postcss-scss"
    },
    {
      "files": ["components/**/*.css", "pages/**/*.css"],
      "rules": {
        "alpha-value-notation": "percentage"
      }
    }
  ]
}
```

### defaultSeverity

您可以为所有在次要选项中没有指定严重性的规则设置默认严重性级别。例如，可以将默认级别设置为“warning”:

```json
{
  "defaultSeverity": "warning"
}
```

### reportDescriptionlessDisables

报告没有描述的`stylelint-disable`注释。

```json
{
  "reportDescriptionlessDisables": true
}
```

当启用时，下面例子中的第一条样式会报告，但是第二条不会被报告

```css
/* stylelint-disable */
a {
}

/* stylelint-disable -- This problem is ignorable. */
a {
}
```

### reportInvalidScopeDisables

报告与配置对象中指定的规则不匹配的`stylelint-disable`注释。

```json
{
  "reportInvalidScopeDisables": true
}
```

### reportNeedlessDisables

报告与需要禁用的规则不匹配的`stylelint-disable`注释

```json
{
  "reportNeedlessDisables": true
}
```

### ignoreDisables

忽略`stylelint-disable`注释(例如`/* stylelint-disable block-no-empty */`)

```json
{
  "ignoreDisables": true
}
```

### ignoreFiles

你可以提供一个 glob 或 glob 数组来忽略特定的文件

```json
{
  "ignoreFiles": ["**/*.js"]
}
```

可以使用`.stylelintignore`文件替代
