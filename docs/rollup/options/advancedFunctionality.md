# 高级功能

## cache

类型: `RollupCache | false`

上次构建时的`cache`属性。使用它来加速在监视模式下的后续构建——Rollup 只会重新分析已更改的模块。将此选项显式地设置为`false`将防止在 bundle 上生成`cache`属性，也将禁用插件的缓存。

```js
const rollup = require('rollup');
let cache;

async function buildWithCache() {
  const bundle = await rollup.rollup({
    cache // is ignored if falsy
    // ... other input options
  });
  cache = bundle.cache; // store the cache object of the previous build
  return bundle;
}

buildWithCache()
  .then(bundle => {
    // ... do something with the bundle
  })
  .then(() => buildWithCache()) // will use the cache of the previous build
  .then(bundle => {
    // ... do something with the bundle
  });
```

## makeAbsoluteExternalsRelative

类型: `RollupCache | false`

命令: `--makeAbsoluteExternalsRelative/--no-makeAbsoluteExternalsRelative`

默认：`true`

确定输出中的绝对外部路径是否应该转换为相对路径。这不仅适用于源文件中的绝对路径，也适用于插件或 Rollup 核心解析为绝对路径的路径。

值为`true`时，像`import "/Users/Rollup/project/relative.js"`这样的外部导入将被转换为一个相对路径。当将绝对路径转换为相对路径时，Rollup 不会考虑`file`或`dir`选项，因为这些选项可能不会出现，例如在使用 JavaScript API 构建时。相反，它假设生成的包的根位于包中包含的所有模块的公共共享父目录。假设所有模块的公共父目录是`“/Users/Rollup/project”`，上面的导入可能会在输出中转换为`import“./relative.js”`。如果通过选择`chunkFileNames: "chunks/[name].js"`，输出块本身嵌套在子目录中，则导入为`"../relative.js"`。

如前所述，这也适用于原始的相对导入，如`import "./relative.js"`，它们在被[external](./coreFunctionality.md#external)选项标记为外部之前被解析为绝对路径。

一个常见的问题是，这种机制也适用于`import "/absolute.js'"`之类的导入，导致输出中出现意外的相对路径。

对于这种情况，选择`“ifRelativeSource”`将检查原始导入是否为相对导入，然后在输出中将其转换为相对导入。选择`false`将在输出中保持所有路径为绝对路径。

::: tip 注意
当使用[external](./coreFunctionality.md#external)选项将一个相对路径直接标记为“external”时，那么它在输出中将是相同的相对路径。当它首先通过插件或 Rollup 核心进行解析，然后标记为外部时，将应用上述逻辑。
:::

## maxParallelFileReads

类型: `number`

命令: `--maxParallelFileReads <number>`

默认：`20`

限制汇总读取模块时并行打开的文件数量。如果没有限制或有足够高的值，构建可能会因为“EMFILE: too many open files”而失败。这取决于操作系统允许打开多少个文件句柄。

## onwarn

类型: `(warning: RollupWarning, defaultHandler: (warning: string | RollupWarning) => void) => void`

拦截警告消息的函数。如果没有提供，警告将被去重并打印到控制台。当使用 [——silent](https://rollupjs.org/guide/en/#--silent) CLI 选项时，此处理程序是获得警告通知的惟一方法。

该函数接收两个参数:警告对象和默认处理程序。警告对象至少有一个`code`和一个`message`属性，允许您控制如何处理不同类型的警告。根据警告的类型添加其他属性。

```js
// rollup.config.js
export default {
  ...,
  onwarn (warning, warn) {
    // skip certain warnings
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

    // throw on others
    if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);

    // Use default for everything else
    warn(warning);
  }
};
```

许多警告也有一个`loc`属性和一个允许你定位警告来源的`frame`:

```js
// rollup.config.js
export default {
  ...,
  onwarn ({ loc, frame, message }) {
    if (loc) {
      console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
      if (frame) console.warn(frame);
    } else {
      console.warn(message);
    }
  }
};
```

## output.assetFileNames

类型: `string | ((assetInfo: AssetInfo) => string)`

命令: `--assetFileNames <pattern>`

默认：`assets/[name]-[hash][extname]`

对构建输出中的 assets 进行自定义命名，可以直接传递模式，也可以传递一个返回模式的函数(每个 asset 都会执行该函数)。模式支持以下占位符:

- `[extname]`: 资产的文件扩展名，包含前导点，例如`.css`。
- `[ext]`: 不带前导点的文件扩展名，例如 css。
- `[hash]`: 基于资产名称和内容的哈希。
- `[name]`: 资产文件名，不包含扩展名。

正斜杠 `/` 可以用于将文件放在子目录中。当使用函数时，`assetInfo`是[generateBundle](https://rollupjs.org/guide/en/#generatebundle)中不带`fileName`的函数的简化版本。也可以查看[output.chunkFileNames](#output-chunkfilenames), [output.entryFileNames](#output-entryfilenames)

## output.banner/output.footer

类型: `string | (() => string | Promise<string>)`

命令: `--banner/--footer <text>`

要在 bundle 前面/后面追加的字符串。你也可以提供一个函数来返回一个解析为字符串的`Promise`来异步地生成它(注意:`banner`和`footer`选项不会破坏 sourcemaps)。

```js
// rollup.config.js
export default {
  ...,
  output: {
    ...,
    banner: '/* my-library version ' + version + ' */',
    footer: '/* follow me on Twitter! @rich_harris */'
  }
};
```

也可以查看[output.intro/output.outro](#output-intro-output-outro)

## output.chunkFileNames

类型: `string | ((chunkInfo: ChunkInfo) => string)`

命令: `--chunkFileNames <pattern>`

默认：`[name]-[hash].js`

当代码拆分时用于命名共享块的模式，可以是字符串也可以是一个返回此类模式的函数(该函数会被每个块调用)。模式支持以下占位符:

- `[format]`: 在输出选项中定义的渲染格式，例如`es`或`cjs`。
- `[hash]`: 基于数据块及其所有依赖项的内容的哈希。
- `[name]`: 块的名称。这可以通过 [output.manualChunks](#output-manualchunks) 选项或当代码块被插件通过 [this.emitFile](https://rollupjs.org/guide/en/#thisemitfile) 创建时被显式地设置。否则，它将从块内容派生。

正斜杠`/`可以用于将文件放在子目录中。当使用函数时，`assetInfo`是[generateBundle](https://rollupjs.org/guide/en/#generatebundle)中不带`fileName`的函数的简化版本。也可以查看[output.assetFileNames](#output-assetfilenames), [output.entryFileNames](#output-entryfilenames)。

## output.compact

类型: `boolean`

命令: `--compact/--no-compact`

默认：`false`

这将减少由 rollup 生成的包装器代码。注意，这不会影响用户编写的代码。这个选项在绑定预压缩的代码时很有用。

## output.entryFileNames

类型: `string | ((chunkInfo: ChunkInfo) => string)`

命令: `--entryFileNames <pattern>`

默认：`[name].js`

用于对被入口点创建的代码块进行命名的模式，该模式可以是字符串，也可以是被每个入口代码块调用并返回此类模式的函数。模式支持以下占位符:

- `[format]`: 在输出选项中定义的渲染格式，例如`es`或`cjs`。
- `[hash]`: 基于入口点的内容及其所有依赖项的内容的哈希。
- `[name]`: 入口点的文件名(不带扩展名)，除非输入的对象形式用于定义不同的名称。

正斜杠 `/` 可以用于将文件放在子目录中。当使用函数时，`assetInfo`是[generateBundle](https://rollupjs.org/guide/en/#generatebundle)中不带`fileName`的函数的简化版本。也可以查看[output.assetFileNames](#output-assetfilenames), [output.chunkFileNames](#output-chunkfilenames).

当设置 [output.preserveModules]() 选项时这个模式也可以使用。这里有一组不同的占位符:

- `[format]`: 输出选项中定义的呈现格式。
- `[name]`: 文件名(不带扩展名)。
- `[ext]`: 文件扩展名。
- `[extname]`: 文件扩展名，前缀为 `.`，如果非空时。
- `[assetExtname]`: 文件扩展名，前缀为`.` 如果它非空且它不是`js`, `jsx`, `ts`或`tsx`之一。

## output.extend

类型: `boolean`

命令: `--extend/--no-extend`

默认：`false`

是否以`umd`或`iife`格式扩展`name`选项定义的全局变量。当为`true`时，全局变量将定义为`(global.name = global.name ||{})`。 当为`false`时，由`name`定义的全局将被覆盖，就像`(global.name ={})`一样。

## output.generatedCode

类型: `"es5" | "es2015" | { arrowFunctions?: boolean, constBindings?: boolean, objectShorthand?: boolean, preset?: "es5" | "es2015", reservedNamesAsProps?: boolean, symbols?: boolean }`

命令: `--generatedCode <preset>`

默认：`es5`

Rollup 可以在生成的代码中安全地使用哪些语言特性。这不会转换任何用户代码，只会更改 Rollup 在包装器和 helper 中使用的代码。你可以选择一个预设:

- `"es5"`: 不要使用像箭头函数这样的 ES2015+特性，但不要引用用作道具的保留名称。
- `"es2015"`: 使用 es2015 之前的任何 JavaScript 特性。

### output.generatedCode.arrowFunctions

类型: `boolean`

命令: `--generatedCode.arrowFunctions/--no-generatedCode.arrowFunctions`

默认：`false`

是否为自动生成的代码段使用箭头函数。请注意，在某些地方，如模块包装器，Rollup 将继续使用括号包装的常规函数，就像在一些 JavaScript 引擎中一样，这将提供[明显更好的性能](https://v8.dev/blog/preparser#pife)。

### output.generatedCode.constBindings

类型: `boolean`

命令: `--generatedCode.constBindings/--no-generatedCode.constBindings`

默认：`false`

这将在某些地方和帮助函数中使用`const`而不是`var`。由于块的作用域，这将允许 Rollup 生成更有效的帮助程序。

```js
// input
export * from 'external';

// cjs output with constBindings: false
var external = require('external');

Object.keys(external).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return external[k];
      }
    });
});

// cjs output with constBindings: true
const external = require('external');

for (const k in external) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => external[k]
    });
}
```

### output.generatedCode.objectShorthand

类型: `boolean`

命令: `--generatedCode.objectShorthand/--no-generatedCode.objectShorthand`

默认：`false`

当属性名与值匹配时，允许在对象中使用简写符号。

```js
// input
const foo = 1;
export { foo, foo as bar };

// system output with objectShorthand: false
System.register('bundle', [], function (exports) {
  'use strict';
  return {
    execute: function () {
      const foo = 1;
      exports({ foo: foo, bar: foo });
    }
  };
});

// system output with objectShorthand: true
System.register('bundle', [], function (exports) {
  'use strict';
  return {
    execute: function () {
      const foo = 1;
      exports({ foo, bar: foo });
    }
  };
});
```

### output.generatedCode.preset

类型: `"es5" | "es2015"`

命令: `--generatedCode <value>`

允许在覆盖一些选项时选择上面列出的预置之一。

```js
export default {
  // ...
  output: {
    generatedCode: {
      preset: 'es2015',
      arrowFunctions: false
    }
    // ...
  }
};
```

### output.generatedCode.reservedNamesAsProps

类型: `boolean`

命令: `--generatedCode.reservedNamesAsProps/--no-generatedCode.reservedNamesAsProps`

默认：`false`

确定像“default”这样的保留字是否可以在不使用引号的情况下用作属性名。这将使生成的代码的语法符合 ES3。但是请注意，为了完全符合 ES3，你可能还需要填充一些内置函数，比如`Object.keys`或`Array.prototype.forEach`。

```js
// input
const foo = null;
export { foo as void };

// cjs output with reservedNamesAsProps: false
Object.defineProperty(exports, '__esModule', { value: true });

const foo = null;

exports['void'] = foo;

// cjs output with reservedNamesAsProps: true
Object.defineProperty(exports, '__esModule', { value: true });

const foo = null;

exports.void = foo;
```

### output.generatedCode.symbols

类型: `boolean`

命令: `--generatedCode.symbols/--no-generatedCode.symbols`

默认：`false`

是否允许在自动生成的代码段中使用`Symbol`。目前，这只是控制具有`Symbol.toStringTag`属性的命名空间设置为`Module`的正确值，这意味着对于命名空间来说，`String(namespace)`会记录`[object Module]`。这同样用于某些库和框架的特征检测。

```js
// input
export const foo = 42;

// cjs output with symbols: false
Object.defineProperty(exports, '__esModule', { value: true });

const foo = 42;

exports.foo = foo;

// cjs output with symbols: true
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: 'Module' }
});

const foo = 42;

exports.foo = foo;
```

::: tip 注意
示例中的`__esModule`标志可以通过[output.esModule]()选项来阻止。
:::

## output.hoistTransitiveImports

类型: `boolean`

命令: `--hoistTransitiveImports/--no-hoistTransitiveImports`

默认：`true`

在创建多个块时，默认情况下，条目块的可传递导入将作为空导入添加到条目块。有关详细信息和背景信息，请参阅["Why do additional imports turn up in my entry chunks when code-splitting?"](https://rollupjs.org/guide/en/#why-do-additional-imports-turn-up-in-my-entry-chunks-when-code-splitting) 。将此选项设置为`false`将禁用此行为。使用[output.preserveModules]() 选项时会忽略此选项，导入将永远不会被提升。

## output.hoistTransitiveImports

类型: `boolean`

命令: `--inlineDynamicImports/--no-inlineDynamicImports`

默认：`false`

这将内联动态导入，而不是创建新的块来创建单个包。只有在提供单个输入时才可能 注意，这将改变执行顺序：如果动态导入是内联的，则只动态导入的模块将立即执行。

## output.interop

类型: `"auto" | "esModule" | "default" | "defaultOnly" | boolean | ((id: string) => "auto" | "esModule" | "default" | "defaultOnly" | boolean)`

命令: `--interop <value>`

默认：`true`

控制 Rollup 如何处理来自外部依赖的 default、命名空间和动态导入，格式如 CommonJS，不支持这些概念。请注意，即使`true`是当前的默认值，该值已被弃用，并将在 Rollup 的下一个主要版本中被`“auto”`替换。在本例中，我们将使用 CommonJS 格式，但互操作同样适用于 AMD、IIFE 和 UMD 目标。详情参阅[output.interop](https://rollupjs.org/guide/en/#outputinterop)。

## output.intro/output.outro

类型: `string | (() => string | Promise<string>)`

命令: `--intro/--outro <text>`

类似于[output.banner/output.footer](#output-banner-output-footer)，只是代码放在任何特定于格式的包装器中。

```js
export default {
  ...,
  output: {
    ...,
    intro: 'const ENVIRONMENT = "production";'
  }
};
```

## output.manualChunks

类型: `{ [chunkAlias: string]: string[] } | ((id: string, {getModuleInfo, getModuleIds}) => string | void)`

允许创建自定义共享公共块。当使用对象形式时，每个属性表示一个包含列出的模块及其所有依赖项(如果它们是模块图的一部分)的块，除非它们已经在另一个手动块中。块的名称将由属性键确定。

::: tip 注意
列出的模块本身不一定要成为模块图的一部分，如果您正在使用`@rollup/plugin-node-resolve`并从包中使用深度导入，这是很有用的。 例如

```js
manualChunks: {
  lodash: ['lodash'];
}
```

将把所有 lodash 模块放入一个手动块，即使你只使用从`'lodash/get'`导入表单的导入。
:::

当使用函数形式时，每个解析的模块 id 将被传递给函数。如果返回一个字符串，该模块及其所有依赖项将以给定的名称添加到手动块中。例如，这将创建一个包含`node_modules`中所有依赖项的`vendor`块:

```js
manualChunks(id) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
}
```

请注意，如果在实际使用相应模块之前触发了副作用，手动块可能会改变应用程序的行为。

当使用函数形式时，`manualChunks`将被传递一个对象作为第二个参数，其中包含函数`getModuleInfo`和`getModuleIds`，它们的工作方式与插件上下文中的[this.getModuleInfo](https://rollupjs.org/guide/en/#thisgetmoduleinfo)和[this.getModuleIds](https://rollupjs.org/guide/en/#thisgetmoduleids)相同。

这可以用于根据模块在模块图中的位置动态确定模块应该放置到哪个手动块中。例如，考虑这样一个场景: 您有一组组件，每个组件动态地导入一组翻译后的字符串，即

```js
function getTranslatedStrings(currentLanguage) {
  switch (currentLanguage) {
    case 'en':
      return import('./foo.strings.en.js');
    case 'de':
      return import('./foo.strings.de.js');
    // ...
  }
}
```

如果很多这样的组件一起使用,这将导致大量的动态的引入非常小的块。虽然我们知道所有语言文件(被同样的块引入的相同语言)将总是被一起使用，但是 Rollup 并不知道这一点。

下面的代码将合并只有一个入口点使用的同一语言的所有文件:

```js
manualChunks(id, { getModuleInfo }) {
  const match = /.*\.strings\.(\w+)\.js/.exec(id);
  if (match) {
    const language = match[1]; // e.g. "en"
    const dependentEntryPoints = [];

    // we use a Set here so we handle each module at most once. This
    // prevents infinite loops in case of circular dependencies
    const idsToHandle = new Set(getModuleInfo(id).dynamicImporters);

    for (const moduleId of idsToHandle) {
      const { isEntry, dynamicImporters, importers } = getModuleInfo(moduleId);
      if (isEntry || dynamicImporters.length > 0) dependentEntryPoints.push(moduleId);

      // The Set iterator is intelligent enough to iterate over elements that
      // are added during iteration
      for (const importerId of importers) idsToHandle.add(importerId);
    }

    // If there is a unique entry, we put it into a chunk based on the entry name
    if (dependentEntryPoints.length === 1) {
      return `${dependentEntryPoints[0].split('/').slice(-1)[0].split('.')[0]}.strings.${language}`;
    }
    // For multiple entries, we put it into a "shared" chunk
    if (dependentEntryPoints.length > 1) {
      return `shared.strings.${language}`;
    }
  }
}
```

## output.minifyInternalExports

类型: `boolean`

命令: `--minifyInternalExports/--no-minifyInternalExports`

默认：如果格式是`es`和`system`或者`output.compact`是`true`，则此选项默认为`true`，否则默认`false`

默认情况下，对于是`es`和`system`，或者如果`output.compact`是`true`, Rollup 将尝试将内部变量导出为单个字母变量，以便更好地缩小。

**例如**

输入:

```js
// main.js
import './lib.js';

// lib.js
import('./dynamic.js');
export const value = 42;

// dynamic.js
import { value } from './lib.js';
console.log(value);
```

带有`output.minifyInternalExports: true`的输出：

```js
// main.js
import './main-5532def0.js';

// main-5532def0.js
import('./dynamic-402de2f0.js');
const importantValue = 42;

export { importantValue as i };

// dynamic-402de2f0.js
import { i as importantValue } from './main-5532def0.js';

console.log(importantValue);
```

带有`output.minifyInternalExports: false`的输出：

```js
// main.js
import './main-5532def0.js';

// main-5532def0.js
import('./dynamic-402de2f0.js');
const importantValue = 42;

export { importantValue };

// dynamic-402de2f0.js
import { importantValue } from './main-5532def0.js';

console.log(importantValue);
```

尽管将这个选项设置为`true`会使输出变大，但如果使用了一个压缩工具，它实际上会使输出变小。 在这种情况下，`export{importantValue as i}`可以变成`export{a as i}`甚至`export{i}`，而在其他情况下，它会生成`export{a as importantValue}`，因为压缩工具通常不会改变导出签名。

## output.paths

类型: `{ [id: string]: string } | ((id: string) => string)`

将外部模块 id 映射到路径。外部 id 是无法解析的 id 或[external](./coreFunctionality.md#external)选项显式提供的 id。由`output.paths`提供的路径将取代模块 ID 在生成的包中使用，这允许你，例如，从 CDN 加载依赖项:

```js
// app.js
import { selectAll } from 'd3';
selectAll('p').style('color', 'purple');
// ...

// rollup.config.js
export default {
  input: 'app.js',
  external: ['d3'],
  output: {
    file: 'bundle.js',
    format: 'amd',
    paths: {
      d3: 'https://d3js.org/d3.v4.min'
    }
  }
};

// bundle.js
define(['https://d3js.org/d3.v4.min'], function (d3) {
  d3.selectAll('p').style('color', 'purple');
  // ...
});
```
