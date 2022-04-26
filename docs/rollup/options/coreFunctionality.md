# 核心配置

## external

类型: `(string | RegExp)[] | RegExp | string | (id: string, parentId: string, isResolved: boolean) => boolean`

命令: `-e/--external <external-id,another-external-id,...>`

一个接受`id`并返回`true`(外部)或`false`(非外部)的函数，或者一个模块id数组，或者匹配模块id的正则表达式，这些都应该保持在bundle的外部。 也可以只是一个ID或正则表达式。 匹配的id应该是: 

1. 外部依赖项的名称，与在import语句中编写它的方式完全相同。 也就是说，要将`import "dependency.js"`标记为external，请使用`"dependency.js"`，而要将`import "dependency"`标记为external，请使用`"dependency"`。
2. 解析后的ID(类似于文件的绝对路径)。

```js
// rollup.config.js
import path from 'path';

export default {
  ...,
  external: [
    'some-externally-required-library',
    path.resolve(__dirname, 'src/some-local-file-that-should-not-be-bundled.js' ),
    /node_modules/
  ]
};
```

::: tip 注意
如果你想过滤掉包的导入，例如通过/node_modules/正则表达式过滤`import {rollup} from 'rollup'`，你需要像[@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)这样的工具来首先将导入解析为`node_modules`。  
:::

当作为命令行参数给出时，它应该是一个以逗号分隔的id列表:  

```shell
rollup -i src/main.js ... -e foo,bar,baz
```

当提供一个函数时，它被调用时带有三个参数(id, parent, isresolve)，这些参数可以给你更多细粒度的控制:  

* id是有问题的模块的Id
* parent是执行导入操作的模块的id  
* isresolve表示该id是否已被例如插件解析 

当创建一个`life`或`umd`包时，你需要提供全局变量名来通过[output.globals](#output-dir)选项替换你的外部导入。 
 
如果是相对导入，即以`./`或`../`开头，将标记为“external”，rollup将在内部将id解析为绝对文件系统位置，以便可以合并外部模块的不同导入。写入结果包时，导入将再次转换为相对导入。例子: 

```js
// input
// src/main.js (entry point)
import x from '../external.js';
import './nested/nested.js';
console.log(x);

// src/nested/nested.js
// the import would point to the same file if it existed
import x from '../../external.js';
console.log(x);

// output
// the different imports are merged
import x from '../external.js';

console.log(x);

console.log(x);
```


## input

类型: `string | string[] | { [entryName: string]: string }`

命令: `-i/--input \<filename\>`

bundle的入口点(例如`main.js`或`app.js`或`index.js`)。如果您提供了一个入口点数组或一个将名称映射到入口点的对象，它们将被绑定到单独的输出块。除非 [output.file](#output-file) 选项被使用，否则生成的chunk名称将匹配`output.entryFileNames`选项。当使用对象形式时，文件名的`[name]`部分将是对象属性的名称，而对于数组形式，它将是入口点的文件名。

::: tip 注意
在使用对象形式时，可以通过在名称中添加 `/` 将入口点放入不同的子文件夹中。下面将生成至少两个入口chunk，名称分别为`entry-a.js`和`entry-b/index.js`，即文件`index.js`被放置在文件夹`entry-b`中:  
:::

```js
// rollup.config.js
export default {
  ...,
  input: {
    a: 'src/main-a.js',
    'b/index': 'src/main-b.js'
  },
  output: {
    ...,
    entryFileNames: 'entry-[name].js'
  }
};
```

如果某些插件在`buildStart`钩子的末尾发出至少一个chunk(使用this.emitFile)，则可以忽略该选项。

命令格式：
```shell
rollup --format es --input src/entry1.js --input src/entry2.js
# 等同于
rollup src/entry1.js src/entry2.js --format es
# chunk可以通过在提供的值前添加 = 来命名:  
rollup main=src/entry1.js other=src/entry2.js --format es
# 可以使用引号指定包含空格的文件名
rollup "main entry"="src/entry 1.js" "src/other entry.js" --format es
```


## output.dir

类型: `string`

命令: `-d/--dir \<dirname\>`

存放所有生成的`chunk`的目录。如果生成了多个`chunk`，则需要此选项。否则，可以使用 [file](#output-file) 选项代替。


## output.file

类型: `string`

命令: `-o/--file \<filename\>`

要写入的文件。如果适用，还将用于生成`sourcemap`。只有在不生成多个`chunk`的情况下才能使用。


## output.format

类型: `string`

命令: `-f/--format \<formatspecifier\>`

指定生成的包的格式。下列选项之一: 

* amd - 异步模块定义，与RequireJS等模块加载器一起使用； 
* cjs - CommonJS，适用于Node和其他绑定器(别名:`commonjs`)
* es - 保持bundle为ES模块文件，适合于其他绑定器，并在现代浏览器中以\<script type=module\>标签的形式包含(别名:`esm`, `module`)  
* iife - 一个自动执行的函数，适合包含为\<script\>标记。(如果你想为你的应用程序创建一个bundle，你可能会想使用这个。) “iife”表示“立即调用[函数表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)”  
* umd - 通用模块定义，工作于`amd`, `cjs`和`life`
* system - SystemJS加载器的原生格式(别名:systemjs)

## output.globals

类型: `{ [id: string]: string } | ((id: string) => string)`

命令: `-g/--globals \<external-id:variableName,another-external-id:anotherVariableName,...\>`

指定`id: variableName`对，这对`umd/iife`包中的外部导入是必需的。 例如，在这种情况下……  

```js
import $ from 'jquery';
```

我们想告诉Rollup `jquery`是外部的，`jquery`模块ID等于全局变量`$`: 

```js
// rollup.config.js
export default {
  ...,
  external: ['jquery'],
  output: {
    format: 'iife',
    name: 'MyBundle',
    globals: {
      jquery: '$'
    }
  }
};

/*
var MyBundle = (function ($) {
  // code goes here
}($));
*/
```

或者，提供一个将外部模块ID转换为全局变量名的函数。

当作为命令行参数给出时，它应该是一个逗号分隔的`id:variableName`对列表:

```shell
rollup -i src/main.js ... -g jquery:$,underscore:_
```

要告诉Rollup本地文件应该被全局变量替换，使用绝对id:  

```js
// rollup.config.js
import path from 'path';
const externalId = path.resolve(__dirname, 'src/some-local-file-that-should-not-be-bundled.js' );

export default {
  ...,
  external: [externalId],
  output: {
    format: 'iife',
    name: 'MyBundle',
    globals: {
      [externalId]: 'globalVariable'
    }
  }
};
```


## output.name

类型: `string`

命令: `-n/--name \<variableName\>`

对于导出值的iife/umd包来说是必要的，在这种情况下，它是代表你的包的全局变量名。同一页面上的其他脚本可以使用这个变量名来访问bundle的导出。

```js
// rollup.config.js
export default {
  ...,
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle'
  }
};

// var MyBundle = (function () {...
```

支持命名空间，例如你的名字可以包含点。生成的包将包含名称空间所需的设置。  

```shell
rollup -n "a.b.c"

/* ->
this.a = this.a || {};
this.a.b = this.a.b || {};
this.a.b.c = ...
*/
```


## output.plugins

类型: `OutputPlugin | (OutputPlugin | void)[]`

在输出中添加一个插件。查看[使用输出插件](https://rollupjs.org/guide/en/#using-plugins)获得关于如何使用特定于输出的插件的更多信息，查看[插件](https://rollupjs.org/guide/en/#plugin-development)获得关于如何编写自己的插件的更多信息。对于从包中导入的插件，记得调用导入的插件函数(即`commonjs()`，而不仅仅是`commonjs`)。错误的插件将被忽略，可以用来轻松激活或禁用插件。

并不是每个插件都可以在这里使用。 `output.plugins`被限制为只使用在`bundle.generate()`或`bundle.write()`期间运行的钩子的插件，即在Rollup的主分析完成之后。如果你是一个插件作者，查看[输出生成钩子](https://rollupjs.org/guide/en/#output-generation-hooks)来找出哪些钩子可以使用。

下面的代码将在其中一个输出中添加压缩:

```js
// rollup.config.js
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'main.js',
  output: [
    {
      file: 'bundle.js',
      format: 'es'
    },
    {
      file: 'bundle.min.js',
      format: 'es',
      plugins: [terser()]
    }
  ]
};
```

## plugins

类型: `Plugin | (Plugin | void)[]`

查看[使用插件](https://rollupjs.org/guide/en/#using-plugins)获得关于如何使用插件的更多信息，查看[插件](https://rollupjs.org/guide/en/#plugin-development)获得关于如何编写自己的插件的更多信息。对于从包中导入的插件，记得调用导入的插件函数(即commonjs()，而不仅仅是commonjs)。错误的插件将被忽略，可以用来轻松激活或禁用插件。

```js
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  input: 'main.js',
  plugins: [resolve(), commonjs(), isProduction && (await import('rollup-plugin-terser')).terser()],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
}))();
```

这个例子还演示了如何使用异步IIFE和动态导入来避免不必要的模块加载，但这可能会非常慢。  