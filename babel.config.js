module.exports = {
  devServer: {
    proxy: "http://192.168.31.252:80", //服务器域名，80端口是默认的，可以不用配置
  },
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
  
};
