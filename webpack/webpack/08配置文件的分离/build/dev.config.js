const Baseconfig = require('./base.config');
//导入合并的插件
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(Baseconfig,{//这是在开发阶段用的页面实时刷新 便于调试
    devServer:{
        contentBase:'./dist',//为哪一个文件夹提供本地服务
        inline:true//页面实时刷新
      }
})