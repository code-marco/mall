module.exports = {
  // 关闭eslint
  lintOnSave: false,
  // 运行服务
  devServer: {
    // 运行IP（域名）
    host: "localhost",
    // 运行端口号
    port: 8888,
    // 自动打开浏览器
    open: true
  },
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        content: "components/content",
        common: "components/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
