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
