# 配置选项

## Print Width

**default:** `printWidth: 80`

指定要换行的行长度。

也可通过在`.editorconfig`文件中添加`max_line_length`设置

## Tab Width

**default:** `tabWidth: 2`

指定每个缩进级别的空格数。

也可通过在`.editorconfig`文件中添加`indent_size`或`tab_width`设置

## Tabs

**default:** `useTabs: false`

缩进行时使用 tabs 代替空格。

也可通过在`.editorconfig`文件中添加`indent_style`设置

## Semicolons

**default:** `semi: true`

在语句的结尾打印分号。

`true`: 在每个语句的末尾添加分号
`false`: 只在可能引入 ASI 故障的行开头添加分号

## Quotes

**default:** `singleQuote: false`

使用单引号而不是双引号。

::: warning 注意

- JSX 引号忽略这个选项
- 如果引号的数量超过另一个引号，较少使用的引号将被用于格式化字符串-示例:`"I'm double quoted"`的结果是`"I'm double quoted"`，而`"This \"example\" is single quoted"`的结果时`'This "example" is single quoted'`。
  :::

## Quote Props

**default:** `quoteProps: 'as-needed'`

当对象中的属性被引用时的调整

- `'as-needed'`: 只在需要的地方在对象属性周围添加引号
- `'consistent'`: 如果对象中至少有一个属性需要引号，则所有属性都需要引号。
- `'preserve'`: 遵守对象属性中引号的输入使用。

## JSX Quotes

**default:** `jsxSingleQuote: false`

在 JSX 中使用单引号而不是双引号。

## Trailing Commas

**default:** `trailingComma: es5`

在多行逗号分隔的语法结构中，尽可能打印尾随逗号。(例如，单行数组从不使用逗号末尾。)

- `es5` - 在 ES5 中有效的地方使用逗号结尾(对象、数组等)。TypeScript 的类型参数中不能有尾随逗号。
- `none` - 没有逗号
- `all` - 尽可能用逗号结尾(包括函数参数和调用)。要运行这种格式的 JavaScript 代码，需要一个支持 ES2017(Node.js 8+或现代浏览器)或底层编译的引擎。这也支持在 TypeScript 的类型参数中使用尾随逗号(自 2018 年 1 月发布的 TypeScript 2.7 以来就支持了)。

## Bracket Spacing

**default:** `bracketSpacing: true`

打印对象字面量中括号之间的空格。

- `true` - `{ foo: bar }`
- `false` - `{foo: bar}`

## Bracket Line

**default:** `bracketSameLine: false`

将多行 HTML(HTML, JSX, Vue, Angular)元素的`>`放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素)。

- `true`

```js
<button className='prettier-class' id='prettier-id' onClick={this.handleClick}>
  Click Here
</button>
```

- `false`

```js
<button className='prettier-class' id='prettier-id' onClick={this.handleClick}>
  Click Here
</button>
```

## Arrow Function Parentheses

**default:** `arrowParens: 'always'`

在唯一的箭头函数参数周围包含圆括号。

- `'always'` - 总是包括括号，`(x) => x`
- `'avoid'` - 尽可能省略括号，`x => x`

## Range

**default:** `rangeStart: 0` & `rangeEnd: Infinity`

指定文件需要格式化的范围

## Require Pragma

**default:** `requirePragma: false`

Prettier 可以限制自己只格式化在文件顶部包含特殊注释(称为 pragma)的文件。当逐渐将大型的、未格式化的代码库转换为 Prettier 时，这是非常有用的。

_特殊注释_: `@prettier` 或 `@format`

## Insert Pragma

**default:** `insertPragma: false`

Prettier 可以在文件的顶部插入一个特殊的`@format`标记，以指定该文件已经使用 Prettier 进行了格式化。当与`--require-pragma`选项一起(`in tandem`)使用时，它可以很好地工作。如果文件顶部已经有一个 docblock，使用此选项时需要在新的一行中添加`@format`标记。

::: warning 注意
`in tandem`不是指“同时”。当同时使用这两个选项时，`--require-pragma`具有优先级，因此`--insert-pragma`将被忽略。其思想是，在大型代码库中逐步采用 Prettier 期间，参与转换过程的开发人员使用`——insert-pragma`，而团队的其他成员和自动化工具使用`——require-pragma`，只处理已经转换的文件。这项功能的灵感来自于 Facebook 的采用策略。  
:::

## Prose Wrap

**default:** `proseWrap: 'preserve'`

默认情况下，Prettier 因为一些服务使用折行敏感的渲染器(例如 GitHub 评论和 BitBucket)而按照 markdown 文本样式进行折行。如果想用`print width`限制 Prettier 的自动折行，请将此选项更改为`"always"`。如果你想让 Prettier 强制所有的属性放在一行上，并依赖于编辑器/查看器的软换行，你可以使用`"never"`。

- `"always"` - 如果属性超过打印宽度(`printWidth`)，则换行.
- `"never"` - 不折行.
- `"preserve"` - 按照文件原样折行(v1.9.0+)

## HTML Whitespace Sensitivity

**default:** `htmlWhitespaceSensitivity: "css"`

为 HTML、Vue、Angular 和 Handlebars 指定全局空格敏感性。有关更多信息，请参阅[whitespace-sensitive formatting](https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting)。

- `"css"` - 使用 CSS `display`属性的默认值。对 Handlebars 来说等同于`strict`。
- `"strict"` - 所有标记周围的空格(或缺少空格)都被认为是重要的。
- `"ignore"` - 所有标记周围的空格(或缺少空格)都被认为是不重要的。

## Vue files script and style tags indentation

**default:** `vueIndentScriptAndStyle: false`

是否缩进 Vue 文件中的`<script>`和`<style>`标记内的代码。有些人(比如 Vue 的创建者)不使用缩进来保存缩进级别，但这可能会破坏编辑器中的代码折叠。

- `true` - 不要在 Vue 文件中缩进脚本和样式标记
- `false` - 在 Vue 文件中缩进脚本和样式标记

## End of Line

**default:** `endOfLine: "lf"`

指定行结束方式

- `"lf"` – 仅换行符(`\n`)，在 Linux 和 macOS 以及 git repos 中常见
- `"crlf"` - 回车符+换行符(`\r\n`)，在 Windows 常见
- `"cr"` - 仅回车符(`\r`)，很少见
- `"auto"` - 维持现有的行结束符

也可通过在`.editorconfig`文件中添加`end_of_line`设置

## Embedded Language Formatting

**default:** `embeddedLanguageFormatting: "off"`

控制文件中嵌入的引用代码是否采用 Prettier 的格式

- `"auto"` – 如果 Prettier 能自动识别嵌入的代码，就格式化它。
- `"off"` - 永远不要自动格式化嵌入代码

## Single Attribute Per Line

**default:** `singleAttributePerLine: false`

在 HTML, Vue 和 JSX 中强制每行只有一个属性。

- `true` - 强制每行只有一个属性
- `false` - 不强制每行只有一个属性
