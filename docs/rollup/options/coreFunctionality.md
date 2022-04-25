# 核心配置

## input

类型: string | string[] | { [entryName: string]: string }

命令: -i/--input \<filename\>

bundle的入口点(例如`main.js`或`app.js`或`index.js`)。如果您提供了一个入口点数组或一个将名称映射到入口点的对象，它们将被绑定到单独的输出块。除非`output.file`选项被使用，否则生成的chunk名称将匹配`output.entryFileNames`选项。当使用对象形式时，文件名的`[name]`部分将是对象属性的名称，而对于数组形式，它将是入口点的文件名。

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