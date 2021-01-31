const path = require("path");
// vite.config.js # or vite.config.ts

console.log(path.resolve(__dirname, "./src"));

module.exports = {
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "/",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "target",
  port: 3001,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    include: ["moment", "echarts", "axios", "mockjs"],
  },
  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
    //'/@/': path.resolve(__dirname, './src')
    "/@components/": path.resolve(__dirname, "./src/components"),
  },
  proxy: {
    // 如果是 /lsbdb 打头，则访问地址如下
    "/lsbdb": "http://10.192.195.96:8087",
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': {
    //   target: 'http://10.192.195.96:8087/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/lsbdb/, '')
    // }
  },
};
