//这是在运行阶段用的插件 压缩js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const Baseconfig = require('./base.config');
//导入合并的插件
const WebpackMerge = require('webpack-merge');
//配置合并的文件 基础配置文件+运行配置文件
module.exports = WebpackMerge(Baseconfig,{
    plugins:[
        new UglifyjsWebpackPlugin()
    ]
})