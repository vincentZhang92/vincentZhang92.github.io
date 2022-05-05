(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{425:function(e,r,n){"use strict";n.r(r);var t=n(62),i=Object(t.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),n("p",[e._v("这里只是简单概括，完整版请查阅"),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"文件格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件格式"}},[e._v("#")]),e._v(" 文件格式")]),e._v(" "),n("ul",[n("li",[e._v("JavaScript - "),n("code",[e._v(".eslintrc.js")])]),e._v(" "),n("li",[e._v("JavaScript (ESM) - "),n("code",[e._v(".eslintrc.cjs")])]),e._v(" "),n("li",[e._v("YAML - "),n("code",[e._v(".eslintrc.yaml")]),e._v(" 或 "),n("code",[e._v(".eslintrc.yml")])]),e._v(" "),n("li",[e._v("JSON - "),n("code",[e._v(".eslintrc.json")])]),e._v(" "),n("li",[e._v("package.json - 在"),n("code",[e._v("package.json")]),e._v("文件中添加"),n("code",[e._v("eslintConfig")]),e._v("属性")])]),e._v(" "),n("p",[e._v("如果同一个目录存在多个配置文件，ESLint 只会使用其中之一，加载的优先级为：")]),e._v(" "),n("ol",[n("li",[n("code",[e._v(".eslintrc.js")])]),e._v(" "),n("li",[n("code",[e._v(".eslintrc.cjs")])]),e._v(" "),n("li",[n("code",[e._v(".eslintrc.yaml")])]),e._v(" "),n("li",[n("code",[e._v(".eslintrc.yml")])]),e._v(" "),n("li",[n("code",[e._v(".eslintrc.json")])]),e._v(" "),n("li",[n("code",[e._v("package.json")])])]),e._v(" "),n("h2",{attrs:{id:"配置属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置属性"}},[e._v("#")]),e._v(" 配置属性")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[e._v("root"),n("OutboundLink")],1),e._v(": 标记当前配置文件所在位置为根目录，确定其子目录需要加载 ESLint 配置的范围")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("extends"),n("OutboundLink")],1),e._v(": 需要继承的配置，如"),n("code",[e._v("eslint:recommended")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("overrides"),n("OutboundLink")],1),e._v(": 用于对不同文件采取更加精准的控制")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments",target:"_blank",rel:"noopener noreferrer"}},[e._v("env"),n("OutboundLink")],1),e._v(": 指定可用环境")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals",target:"_blank",rel:"noopener noreferrer"}},[e._v("globals"),n("OutboundLink")],1),e._v(": 指定全局变量")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("parserOptions"),n("OutboundLink")],1),e._v(": 指定解析器选项\n"),n("ul",[n("li",[e._v("ecmaVersion: 指定想要使用的 ECMAScript 语法版本")]),e._v(" "),n("li",[e._v("sourceType: 如果你的代码在 ECMAScript 模块中，设置为"),n("code",[e._v("script")]),e._v("(默认)或"),n("code",[e._v("module")])]),e._v(" "),n("li",[e._v("allowReserved: 允许使用保留字作为标识符(如果"),n("code",[e._v("ecmaVersion")]),e._v("为 3)")]),e._v(" "),n("li",[e._v("ecmaFeatures: 指示想要使用的其他语言特性的对象\n"),n("ul",[n("li",[e._v("globalReturn: 允许在全局范围内使用"),n("code",[e._v("return")]),e._v("语句")]),e._v(" "),n("li",[e._v("impliedStrict: 启用全局严格模式(如果"),n("code",[e._v("ecmaVersion")]),e._v("为 5 或更高)")]),e._v(" "),n("li",[e._v("jsx: 启用"),n("a",{attrs:{href:"https://facebook.github.io/jsx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSX"),n("OutboundLink")],1)])])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser",target:"_blank",rel:"noopener noreferrer"}},[e._v("parser"),n("OutboundLink")],1),e._v(": 指定解析器")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rules"),n("OutboundLink")],1),e._v(": 规则")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-inline-comments",target:"_blank",rel:"noopener noreferrer"}},[e._v("noInlineConfig"),n("OutboundLink")],1),e._v(": 禁用所有行内配置注释")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/rules#report-unused-eslint-disable-comments",target:"_blank",rel:"noopener noreferrer"}},[e._v("reportUnusedDisableDirectives"),n("OutboundLink")],1),e._v(": 报告所有没有使用的"),n("code",[e._v("eslint-disable")]),e._v("注释")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins"),n("OutboundLink")],1),e._v(": 配置插件")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/plugins#specifying-processor",target:"_blank",rel:"noopener noreferrer"}},[e._v("processor"),n("OutboundLink")],1),e._v(": 指定插件提供的处理器")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("ignorePatterns"),n("OutboundLink")],1),e._v(": 指定 ESLint 需要忽略的文件或目录")])])])}),[],!1,null,null,null);r.default=i.exports}}]);