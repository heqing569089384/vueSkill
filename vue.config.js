const PUBLIC_PATH = process.env.NODE_ENV==='production'?'./':'/'

module.exports = {
    //配置选项
    
    //基本路径
    publicPath:PUBLIC_PATH,
    //构建时输出的目录
    outputDir:'dist',
    devServer: {
        port: 8000,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/pzjd": {
                //target: "http://192.168.21.156:8086",
                target: "http://192.168.21.180:8060/", // 阳
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/pzjd": "/pzjd"
                }
            }
        }
    },
    lintOnSave:false
}