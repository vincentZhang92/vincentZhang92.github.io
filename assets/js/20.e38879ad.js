(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{205:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("Stylelint 支持的配置文件格式如下：")]),s._v(" "),a("ul",[a("li",[s._v("package.json 中的"),a("code",[s._v("stylelint")]),s._v("属性")]),s._v(" "),a("li",[s._v("一个"),a("code",[s._v(".stylelintrc")]),s._v("文件")]),s._v(" "),a("li",[s._v("一个导出 JS 对象的"),a("code",[s._v("stylelint.config.js")]),s._v("文件")]),s._v(" "),a("li",[s._v("一个导出 JS 对象的"),a("code",[s._v("stylelint.config.cjs")]),s._v("文件(当在"),a("code",[s._v("package.json")]),s._v("指定了"),a("code",[s._v('"type":"module"')]),s._v("的 JavaScript 包中运行 Stylelint 时)")])]),s._v(" "),a("p",[a("code",[s._v(".stylelintrc")]),s._v("文件(没有后缀)可以使用 JSON 或 YAML 格式。你可以添加一个文件后缀来帮你的文本编辑器提供语法检查和高亮。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(".stylelintrc.json")])]),s._v(" "),a("li",[a("code",[s._v(".stylelintrc.yaml")]),s._v(" / "),a("code",[s._v(".stylelintrc.yml")])]),s._v(" "),a("li",[a("code",[s._v(".stylelintrc.js")])])]),s._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("h3",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[s._v("#")]),s._v(" rules")]),s._v(" "),a("p",[s._v("规则决定静态分析器查找的内容以及报错内容。目前 Stylelint 中有超过 170 条"),a("a",{attrs:{href:"https://stylelint.io/user-guide/rules/list",target:"_blank",rel:"noopener noreferrer"}},[s._v("规则"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("rules")]),s._v("属性是一个对象，关键字为规则名称，值为规则配置，例如")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"color-no-invalid-hex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("每个规则配置符合以下格式之一：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("null")]),s._v("(关闭规则)")]),s._v(" "),a("li",[s._v("单个值(主要选项)")]),s._v(" "),a("li",[s._v("有两个值的数组([主要选项，次要选项])")])]),s._v(" "),a("p",[s._v("指定主要选项就可以开启规则，有些规则为了进一步定制提供了次要选项。例如：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"selector-pseudo-class-no-unknown"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignorePseudoClasses"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"disablefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disablefix"}},[s._v("#")]),s._v(" disableFix")]),s._v(" "),a("p",[s._v("你可以设置"),a("code",[s._v("disableFix")]),s._v("次要选项来关闭规则的自动修复。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"color-function-notation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modern"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"disableFix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[s._v("#")]),s._v(" message")]),s._v(" "),a("p",[s._v("当一条规则被违反时，你可以使用"),a("code",[s._v("message")]),s._v("次要选项来传递一个自定义消息。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"custom-property-pattern"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Expected custom property name to be kebab-case"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"reportdisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reportdisables"}},[s._v("#")]),s._v(" reportDisables")]),s._v(" "),a("p",[s._v("您可以设置"),a("code",[s._v("reportdisabled")]),s._v("次要选项来报告此规则的任何禁用样式的注释，从而有效地禁止作者选择不使用它。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"color-no-invalid-hex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reportDisables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"severity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#severity"}},[s._v("#")]),s._v(" severity")]),s._v(" "),a("p",[s._v("您可以使用"),a("code",[s._v("severity")]),s._v('次要选项来调整任何特定规则的严重性，可选值有"warning"和"error"(默认)')]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number-max-precision"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreUnits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"em"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"severity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warning"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[s._v("#")]),s._v(" extends")]),s._v(" "),a("p",[s._v("你可以扩展一个存在的配置(无论是你自己的还是第三方的)。")]),s._v(" "),a("p",[s._v("最常见的配置包括")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/stylelint/stylelint-config-recommended",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylelint-config-recommended"),a("OutboundLink")],1),s._v(" - 只是开启了避免错误的规则")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/stylelint/stylelint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylelint-config-standard"),a("OutboundLink")],1),s._v(" - 在"),a("code",[s._v("stylelint-config-recommended")]),s._v("的基础上打开了社区公认的规则")])]),s._v(" "),a("p",[s._v("你可以扩展一组存在的配置，但是配置中同名规则会被重写，越靠后的配置优先级越高。")]),s._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[s._v("#")]),s._v(" plugins")]),s._v(" "),a("p",[s._v("插件是由社区构建的规则或规则集，它们支持方法学、工具集、"),a("em",[s._v("非标准")]),s._v("CSS 特性或非常特定的用例。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../some-rule-set.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"some-rule-set/first-rule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"everything"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"some-rule-set/second-rule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nothing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"some-rule-set/third-rule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"everything"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"customsyntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customsyntax"}},[s._v("#")]),s._v(" customSyntax")]),s._v(" "),a("p",[s._v("定义代码中使用的自定义语法，查看"),a("a",{attrs:{href:"https://stylelint.io/user-guide/usage/options#customsyntax",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overrides"}},[s._v("#")]),s._v(" overrides")]),s._v(" "),a("p",[s._v("你可以在"),a("code",[s._v("overrides")]),s._v("键下提供配置，它只适用于匹配特定 glob 模式的文件，使用与你在命令行上传递的相同格式(例如，"),a("code",[s._v("app/**/*.test.css")]),s._v(")。")]),s._v(" "),a("p",[s._v("通过使用"),a("code",[s._v("overrides")]),s._v("键，可以根据配置中的文件 glob 模式覆盖设置。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alpha-value-notation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"overrides"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"customSyntax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postcss-scss"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"components/**/*.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pages/**/*.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alpha-value-notation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"percentage"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"defaultseverity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultseverity"}},[s._v("#")]),s._v(" defaultSeverity")]),s._v(" "),a("p",[s._v("您可以为所有在次要选项中没有指定严重性的规则设置默认严重性级别。例如，可以将默认级别设置为“warning”:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"defaultSeverity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warning"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"reportdescriptionlessdisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reportdescriptionlessdisables"}},[s._v("#")]),s._v(" reportDescriptionlessDisables")]),s._v(" "),a("p",[s._v("报告没有描述的"),a("code",[s._v("stylelint-disable")]),s._v("注释。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reportDescriptionlessDisables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("当启用时，下面例子中的第一条样式会报告，但是第二条不会被报告")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* stylelint-disable */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* stylelint-disable -- This problem is ignorable. */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"reportinvalidscopedisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reportinvalidscopedisables"}},[s._v("#")]),s._v(" reportInvalidScopeDisables")]),s._v(" "),a("p",[s._v("报告与配置对象中指定的规则不匹配的"),a("code",[s._v("stylelint-disable")]),s._v("注释。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reportInvalidScopeDisables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"reportneedlessdisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reportneedlessdisables"}},[s._v("#")]),s._v(" reportNeedlessDisables")]),s._v(" "),a("p",[s._v("报告与需要禁用的规则不匹配的"),a("code",[s._v("stylelint-disable")]),s._v("注释")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reportNeedlessDisables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"ignoredisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignoredisables"}},[s._v("#")]),s._v(" ignoreDisables")]),s._v(" "),a("p",[s._v("忽略"),a("code",[s._v("stylelint-disable")]),s._v("注释(例如"),a("code",[s._v("/* stylelint-disable block-no-empty */")]),s._v(")")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreDisables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"ignorefiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorefiles"}},[s._v("#")]),s._v(" ignoreFiles")]),s._v(" "),a("p",[s._v("你可以提供一个 glob 或 glob 数组来忽略特定的文件")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("可以使用"),a("code",[s._v(".stylelintignore")]),s._v("文件替代")])])}),[],!1,null,null,null);t.default=n.exports}}]);