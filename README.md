# 从零搭建 Webpack5 + TypeScript + Eslint + React

[参考链接](https://juejin.cn/post/7257558539719295031)

## 安装包详解

### webpack基础包

- 1、**webpack** webpack核心包
- 2、**webpack-cli** webpack的命令行工具
- 3、**webpack-dev-server** webpack运行开发环境工具

### 打包命令

- 1、**cross-env** 设置环境变量

### 处理js、jsx、ts、tsx

- 1、**@babel/core** Babel 核心模块，负责将代码解析成 AST（抽象语法树），并对
 AST 进行转换和生成新的代码
- 2、**@babel/preset-env** Babel 预设，用于根据目标环境自动确定需要进行的转换和插件，以达到兼容性的目的
- 3、**@babel/preset-react** Babel 预设，用于转换 JSX 语法为普通的 JavaScript 代码。它提供了一系列的转换规则，包括将 JSX 转换为 React.createElement 或其他等有效形式的代码，并处理一些 React 相关的语法和特性
- 4、**@babel/preset-typescript** Babel 预设，用于转换 TypeScript 代码为普通的 JavaScript 代码
- 5、**@babel/plugin-transform-runtime** Babel 插件，用于减少编译过程中的代码冗余。它将一些辅助函数和工具函数抽离出来，通过引入 @babel/runtime 模块，避免在每个文件中重复生成这些函数，从而减小编译后代码的体积
- 6、**@pmmmwh/react-refresh-webpack-plugin** Webpack 插件，用于支持 React 组件的热模块替换（HMR）。它基于 React Fast Refresh 技术，能够在开发过程中实现在不刷新整个页面的情况下，对 React 组件进行快速更新，提高开发体验和效率。
- 7、**react-refresh** Babel 插件，与 @pmmmwh/react-refresh-webpack-plugin 配合使用，用于在开发环境下实现 React 组件的热模块更新。

### 处理样式文件

- 1、**less** less 核心包
- 2、**less-loader** 将 less 转为 css
- 3、**style-resources-loader** 将一个样式文件导入所有样式文件中，用于 less 定义全局变量
- 4、**css-loader** 用于解析 css 文件
- 5、**style-loader** 用于将样式注入到 html 的 style 标签中，在开发环境中使用
- 6、**postcss、postcss-loader、postcss-preset-env** 用于兼容老版本浏览器，可以将 css3 最新的一些属性，转成之前浏览器可识别属性
- 7、**mini-css-extract-plugin** 将 css 文件提取到单独文件中，生产环境使用
- 8、**css-minimizer-webpack-plugin** 价格提取的 css 文件压缩，减小打包体积

### 安装 Type Declaration

- 1、**@types/react** 提供了用于 React 库的类型声明文件。
- 2、**@types/react-dom** 提供了用于 React DOM 库的类型生命文件。
- 3、**@types/type-redux** 包含了用于 React Redux 库的类型声明文件。
- 4、**@types/type-router-dom** 提供了用于 React Router DOM 库的类型声明文件。
- 5、**@types/type-router-redux** 提供了用于 React Router Redux 库的类型声明文件。