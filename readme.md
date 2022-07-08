# 多页面极简模板

使用 vue 搭建多页面的核心就是 vue.config.js 文件中的 pages 属性。
[查看官方文档介绍(中文)](https://cli.vuejs.org/zh/config/#pages)
[查看官方文档介绍(英文)](https://cli.vuejs.org/config/#pages)
从 pages 属性中可以看出，另外的重点就是，模板文件，即 public 中要有一个 html 文件。
还有一个就是入口文件，即 entry 的值。
对应到我们的项目中就是 src/main.js 文件。

## vue.config.js 配置文件内容

```js
module.exports = {
  pages: {
    // index 代表默认, 即 http://127.0.0.1:8081/index.html 可直接写成 http://127.0.0.1:8081
    index: {
      // page 的入口
      entry: './src/main.js',
      // 模板来源
      template: './public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '主页面',
    },
    // abab, 访问该副页面路径为 : http://127.0.0.1:8081/abab. 如果使用了路由 hasHistory, 则路径为 http://127.0.0.1:8081/abab#/about
    abab: {
      entry: './sub/main.js',
      template: './public/sub.html',
      filename: 'sub.html',
      title: '副页面',
    },
  },
}

```

