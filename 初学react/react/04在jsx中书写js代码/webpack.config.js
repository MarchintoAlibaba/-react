const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入下载的打包index.html到内存的插件
const htmlwebpack = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),//配置以index.html为模板
    filename:'index.html'//打包到内存的文件名
})
module.exports = {
    mode:'development', //production运行版本换成这个  development是开发版本
    //在webpack4.x中有一个很大特性 就是约定大于配置 约定：默认的打包入口路径是src->index.js文件
    plugins:[//配置插件的地方
        htmlwebpack
    ],
    module:{//要配置第三方模块
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}