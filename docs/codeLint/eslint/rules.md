# 规则

::: tip 说明
下面的规则描述并不完整，只是个人认为需要注意的才着重记录，完整的规则列表请查看[规则](https://eslint.org/docs/rules/)
:::

## [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

在数组方法的回调中强制返回语句。

`Array`有几个用于过滤、映射和折叠的方法。 如果我们忘记在那些的回调中写`return`语句，那可能是错误的。如果您不想使用返回或不需要返回的结果，请考虑使用[.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)。

该规则强制在数组方法的回调中使用`return`语句。此外，它还可以使用`checkForEach`选项强制`forEach`数组方法回调不返回值。

**ESLint Version**: 2.0.0-alpha-1

## [constructor-super](https://eslint.org/docs/rules/constructor-super)<Badge text="eslint:recommended" type="tip" />

要求在构造函数中调用“super()”

**ESLint Version**: 0.24.0

## [for-direction](https://eslint.org/docs/rules/for-direction)<Badge text="eslint:recommended" type="tip" />

强制`for`循环更新子句向正确的方向移动计数器。

**ESLint Version**: 4.0.0-beta.0

## [getter-return](https://eslint.org/docs/rules/getter-return)<Badge text="eslint:recommended" type="tip" />

强制在属性 getter 中出现`return`语句

**ESLint Version**: 4.2.0

## [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)<Badge text="eslint:recommended" type="tip" />

禁止使用异步函数作为 Promise 执行器

**ESLint Version**: 5.3.0

## [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)

禁止在循环中使用`await`。

对可迭代对象的每个元素执行操作是一个常见的任务。然而，在每个操作中执行`await`表示程序没有充分利用`async/await`的并行优势。

通常，应该对代码进行重构，一次创建所有的 promise，然后使用`Promise.all()`访问结果。否则，在前一个操作完成之前，每个后续操作都不会开始

**ESLint Version**: 3.12.0

## [no-class-assign](https://eslint.org/docs/rules/no-class-assign)<Badge text="eslint:recommended" type="tip" />

禁止修改`class`声明的变量

**ESLint Version**: 1.0.0-rc-1

## [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)<Badge text="eslint:recommended" type="tip" />

禁止与`-0`进行比较

**ESLint Version**: 3.17.0

## [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)<Badge text="eslint:recommended" type="tip" />

禁止在条件语句中使用赋值操作符

**ESLint Version**: 0.0.9

## [no-const-assign](https://eslint.org/docs/rules/no-const-assign)<Badge text="eslint:recommended" type="tip" />

禁止修改使用`const`声明的变量

**ESLint Version**: 1.0.0-rc-1

## [no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)

禁止使用操作符不影响值的表达式。

因为运算符的优先级很容易判断错误，导致在复杂表达式等情况中特别容易出现错误，例如

```js
// 有人可能会认为这是a + (b ?? c)”:
const x = a + b ?? c;
// 但它实际上等于(a + b) ?? c”。 因为'a + b'不能为空，"?? c"不会生效
```

此外，该规则检测与新构造的对象/数组/函数等的比较。在 JavaScript 中，对象是通过引用进行比较的，新构造的对象永远不能`===`任何其他值。

**ESLint Version**: 8.14.0

## [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)<Badge text="eslint:recommended" type="tip" />

禁止在条件中使用常量表达式

**ESLint Version**: 0.4.1

## [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)

禁止在构造函数中返回值

**ESLint Version**: 6.7.0

## [no-control-regex](https://eslint.org/docs/rules/no-control-regex)<Badge text="eslint:recommended" type="tip" />

禁止在正则表达式中使用控制字符

在 ASCII 码范围 0-31 中，控制字符是特殊的、不可见的字符。这些字符很少在 JavaScript 字符串中使用，所以包含这些字符的正则表达式很可能是错误的。

**ESLint Version**: 0.1.0

## [no-debugger](https://eslint.org/docs/rules/no-debugger)<Badge text="eslint:recommended" type="tip" />

禁止使用`debugger`

**ESLint Version**: 0.0.2

## [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)<Badge text="eslint:recommended" type="tip" />

在函数定义中禁止重复参数

**ESLint Version**: 0.16.0

## [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)<Badge text="eslint:recommended" type="tip" />

禁止类成员中出现重复名称

**ESLint Version**: 1.2.0

## [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)<Badge text="eslint:recommended" type="tip" />

在`if-else-if`链中禁止重复条件

**ESLint Version**: 6.7.0

## [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)<Badge text="eslint:recommended" type="tip" />

禁止在对象字面量中出现重复的键

**ESLint Version**: 0.0.9

## [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)<Badge text="eslint:recommended" type="tip" />

禁止重复`case`标签

**ESLint Version**: 0.17.0

## [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

不允许重复的导入

**ESLint Version**: 2.5.0

## [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)<Badge text="eslint:recommended" type="tip" />

禁止在正则表达式中使用空字符类

注意：`RegExp`函数中的正则表达式不会触发该检查。

**ESLint Version**: 0.22.0

## [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)<Badge text="eslint:recommended" type="tip" />

禁止空的解构模式

**ESLint Version**: 1.7.0

## [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)<Badge text="eslint:recommended" type="tip" />

禁止在 catch 子句中重新分配异常

**ESLint Version**: 0.0.9

## [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)<Badge text="eslint:recommended" type="tip" />

禁止`case`语句连续执行

**ESLint Version**: 0.0.7

## [no-func-assign](https://eslint.org/docs/rules/no-func-assign)<Badge text="eslint:recommended" type="tip" />

禁止对`function`声明重新赋值

**ESLint Version**: 0.0.9

## [no-import-assign](https://eslint.org/docs/rules/no-import-assign)<Badge text="eslint:recommended" type="tip" />

禁止对导入的绑定赋值

**ESLint Version**: 6.4.0

## [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)<Badge text="eslint:recommended" type="tip" />

禁止在嵌套块中声明变量或函数

**ESLint Version**: 0.6.0

## [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)<Badge text="eslint:recommended" type="tip" />

禁止在`RegExp`构造函数中使用无效的正则表达式字符串

**ESLint Version**: 0.1.4

## [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)<Badge text="eslint:recommended" type="tip" />

禁止不规则空白字符

**ESLint Version**: 0.9.0

## [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)<Badge text="eslint:recommended" type="tip" />

禁止失去精度的数字字面值

**ESLint Version**: 7.1.0

## [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)<Badge text="eslint:recommended" type="tip" />

禁止字符类语法中包含多个码位的字符

**ESLint Version**: 5.3.0

## [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)<Badge text="eslint:recommended" type="tip" />

禁止对`Symbol`对象使用`new`操作符

**ESLint Version**: 2.0.0-beta.1

## [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)<Badge text="eslint:recommended" type="tip" />

禁止将全局对象属性作为函数调用

**ESLint Version**: 0.0.9

## [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)

禁止从`Promise`执行器函数返回值

**ESLint Version**: 7.3.0

## [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)<Badge text="eslint:recommended" type="tip" />

禁止直接在对象上调用一些`Object.prototype`方法

**ESLint Version**: 2.11.0

## [no-self-assign](https://eslint.org/docs/rules/no-self-assign)<Badge text="eslint:recommended" type="tip" />

禁止两端完全相同的赋值

**ESLint Version**: 2.0.0-rc.0

## [no-self-compare](https://eslint.org/docs/rules/no-self-compare)

禁止在两边完全相同的情况下进行比较

**ESLint Version**: 0.0.9

## [no-setter-return](https://eslint.org/docs/rules/no-setter-return)<Badge text="eslint:recommended" type="tip" />

禁止从`setter`返回值

**ESLint Version**: 6.7.0

## [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)<Badge text="eslint:recommended" type="tip" />

不允许稀疏数组

**ESLint Version**: 0.4.0

## [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

禁止在常规字符串中使用模板字面值占位符语法

**ESLint Version**: 3.3.0

## [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)<Badge text="eslint:recommended" type="tip" />

禁止在构造函数中调用`super()`之前使用`this`/`super`

**ESLint Version**: 0.24.0

## [no-undef](https://eslint.org/docs/rules/no-undef)<Badge text="eslint:recommended" type="tip" />

除非在`/*global */`注释中提及，否则禁止使用未声明的变量

**ESLint Version**: 0.0.9

## [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)<Badge text="eslint:recommended" type="tip" />

禁止混淆多行表达式

**ESLint Version**: 0.24.0

## [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)

禁止循环中未修改条件

**ESLint Version**: 2.0.0-alpha-2

## [no-unreachable](https://eslint.org/docs/rules/no-unreachable)<Badge text="eslint:recommended" type="tip" />

在`return`、`throw`、`continue`和`break`语句之后禁止不可访问的代码

**ESLint Version**: 0.0.6

## [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)

禁止循环体只允许一次迭代

**ESLint Version**: 7.3.0

## [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)<Badge text="eslint:recommended" type="tip" />

禁止在`finally`块中使用控制流语句

JavaScript 会挂起`try`和`catch`块的控制流语句，直到`finally`块的执行结束。因此，当在`finally`中使用`return`、`throw`、`break`或`continue`时，`try`和`catch`中的控制流语句将被覆盖，这被认为是意外行为。

**ESLint Version**: 2.9.0

## [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)<Badge text="eslint:recommended" type="tip" />

禁止对关系操作符的左操作数求反

就像开发人员可能会在求和的负数`-(a + b)`时输入`-a + b`一样，他们也可能会错误地定义`!key in object`，而实际上他们几乎肯定是想要输入`!(key in object)`来测试键不在对象中。`!obj instanceof Ctor`也是类似情况。

**ESLint Version**: 3.3.0

## [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)<Badge text="eslint:recommended" type="tip" />

禁止在不允许使用`undefined`值的上下文中使用可选链

可选链(?.)表达式可以短路，返回值为`undefined`。因此，将求值的可选链表达式作为函数、对象、数字等处理，可能会导致 TypeError 或意外结果。

**ESLint Version**: 7.15.0

## [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)

禁用未使用的私有类成员

在代码中声明但没有使用的私有类成员很可能是由于不完整的重构而导致的错误。 这样的类成员会占用代码中的空间，并可能导致读者的困惑。

**ESLint Version**: 8.1.0

## [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)<Badge text="eslint:recommended" type="tip" />

禁用未使用变量

**选项**：

- [vars](https://eslint.org/docs/rules/no-unused-vars#vars): `all`/`local`
  - `all`: 检查使用的所有变量，包括全局作用域中的变量。这是默认设置
  - `local`: 只检查是否使用了本地声明的变量，但允许未使用的全局变量
- [varsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#varsignorepattern): 指定不检查的异常:名称匹配 regexp 模式的变量。
- [args](https://eslint.org/docs/rules/no-unused-vars#args): `after-used`/`all`/`none`
  - `after-used`: 在最后一个使用的参数之前未使用的位置参数将不会被检查，但所有命名参数和最后一个使用的参数之后的所有位置参数将被检查。
  - `all`: 所有命名参数都必须检查
  - `none`: 不检查参数
- [ignoreRestSiblings](https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings): 使用[Rest 属性](https://github.com/tc39/proposal-object-rest-spread)可以从对象中获取"省略"属性。默认情况下(`false`)，兄弟属性将被标记"未使用"。启用此选项后，将忽略"省略"属性的兄弟属性
- [argsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#argsignorepattern): 指定不检查的异常:名称匹配 regexp 模式的参数。
- [destructuredArrayIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#destructuredarrayignorepattern): 指定不检查的异常:数组解构模式中名称匹配 regexp 模式的元素
- [caughtErrors](https://eslint.org/docs/rules/no-unused-vars#caughterrors): 用于捕获块参数验证
  - `none`: 不要检查错误对象。这是默认设置
  - `all`: 所有命名参数都必须检查
- [caughtErrorsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#caughterrorsignorepattern): 指定不检查的异常:catch 参数的名称匹配 regexp 模式。

**ESLint Version**: 0.0.9
