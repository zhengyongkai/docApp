const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname,dir) //path.join(_dirname)设置绝对路径
}

module.exports = {
    //devServer.proxy适用于本地开发使用，
    //生成环境请用第三方代理软件，如nginx。
    devServer: {
        port: 9999, //本机端口号
        host: "localhost", //本机主机名
        https: false, //协议
        open: true, //启动服务器时自动打开浏览器访问
        proxy: {
            '/api': {
                //目标服务器,代理访问到http://localhost:8888
                target: "http://localhost",
                changOrigin: true, //开启代理
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('@components',resolve('src/components'))
            .set('@assets',resolve('src/assets'))
            .set('@common',resolve('src/common'))
            .set('@views',resolve('src/views'))
            .set('@utils',resolve('src/utils'))
            .set('@router',resolve('src/router'))
    }
}