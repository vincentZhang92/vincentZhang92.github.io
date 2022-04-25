# Rollup 学习

## 官方资源

* [rollup.js 英文官网](https://rollupjs.org/guide/en/)

* [rollup.js 中文文档](https://www.rollupjs.com/)

## 概述

Rollup是一个用于JavaScript的模块打包器，它可以将小段代码编译成更大更复杂的内容，比如library或应用程序。 它使用了JavaScript ES6修订版中包含的代码模块的新的标准化格式，而不是以前的特殊解决方案，如CommonJS和AMD。 ES模块可以让您自由无缝地结合您最喜欢的库中最有用的单个函数。 这最终将可能在任何地方实现，但Rollup允许您提前体验。

## 安装

```shell
npm install --global rollup
```

这将使Rollup成为一个全局命令行工具。 您也可以在本地安装它：

```shell
npm install --development rollup
```