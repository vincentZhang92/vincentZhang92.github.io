## 介绍

EditorConfig 有助于在不同的编辑器和 ide 中为从事同一项目的多个开发人员维护一致的编码风格。EditorConfig 项目由定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。EditorConfig 文件易于阅读，并且与版本控制系统配合良好。

[官网](https://editorconfig.org/)

## 示例文件

```shell
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

## 使用

在项目根目录创建`.editorconfig`文件并增加配置`root = true`。

::: tip Windows 用户
对于 Windows 用户，闯将文件时需要将文件命名为`.editorconfig.`(注意后面有个`.`)，Windows 会自动重命名为`.editorconfig`
:::

## 选项

### indent_style

设置为`tab`或`space`，分别使用 tabs 或空格的缩进形式

### indent_size

一个整数，定义每个缩进级别使用的列数和使用`space`缩进风格时的宽度。当`indent_style`设置为`tab`时，将使用`tab_width`的值(如果指定)。

### tab_width

一个整数，定义用于表示 tab 字符的列数。默认值为 indent_size，通常不需要指定。

### end_of_line

设置为`lf`、`cr`或`crlf`以控制换行的表示方式。

### charset

设置为`latin1`、`utf-8`、`utf-8-bom`、`utf-16be`或`utf-16le`来控制字符集。

### trim_trailing_whitespace

设置为`true`可以删除换行符之前的任何空格字符，设置为`false`可以确保不删除。

### insert_final_newline

设置为`true`确保文件在保存时以换行符结束，设置为`false`确保文件不以换行符结束。

### root

应在文件顶部的任何部分之外指定的特殊属性。设置为`true`将停止对当前文件夹的`.editorconfig`文件搜索。即表示当前配置文件所在的目录为根目录。

::: tip 提示
对于任何属性，为`unset`的值将删除该属性的效果，即使该属性之前已设置。例如，添加`indent_size = unset`来取消定义`indent_size`属性(并使用编辑器默认值)。

此外，如果一个属性在您的项目中没有标准化(例如`end_of_line`)，那么最好将其留空。
:::
