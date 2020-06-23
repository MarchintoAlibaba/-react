const path = require('path');
//vue-loader15版本以上的需要配置这句话
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//webpack配置文件
module.exports = {
    entry:'./src/main.js',//入口文件
    output:{//出口文件（打包后形成的文件）
        path:path.resolve(__dirname,'dist'),//出口文件路径 _dirname:这个是node的语法 实时的绝对路径 就是现在这个路径的地方
        filename:'build.js',//出口文件名
        publicPath:'dist/'//每次打包的文件后的文件路径都在dist文件夹下 这个是可以配置的
    },
    //vue-loader15版本以上的需要配置这句话
    plugins: [   //配置插件的节点，所有插件都要在这里配置
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
        {
            test: /\.css$/,
            //css-loader只负责加载css style-loader只负责将css样式添加到dom中
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            //less的预处理
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
             }]
        },
        {
            //图片压缩打包插件
            test: /\.(png|jpg|gif)$/,//可以被打包的图片格式
            use: [
              {
                loader: 'url-loader',
                options: {//参数选项
                  limit: 8192,//图片最大限制 如果该图片大小小于8192则会被webpack打包编译成base64格式 如果图片大于8192则会使用file-loader模块来加载
                  name:'img/[name].[hash:8].[ext]'//配置打包后图片的名字 这里配置的是img文件夹下的图片原有名字+hash值的前8位+图片后缀名
                }
              }
            ]
        },
        {//用babel-loader将es6转化成es5
            test: /\.js$/,//寻找.js结尾的文件
            exclude: /(node_modules|bower_components)/,//把node_modules里面的文件除外
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
        },
        {//配置vue-loader模块 将以vue结尾的文件编译打包
          test:/\.vue$/,
          use: [
            { loader: 'vue-loader' },
          ]
        }
        ]
    },
    resolve:{//配置开发环境版本的vue
      alias:{//配置一个vue别名 让vue引用的时候引用这个vue版本
        'vue$':'vue/dist/vue.esm.js'
      }
    },
}
//这样配置好之后就不用每次打包都输入命令 webpack ./src/main.js ./dist/build.js
//现在打包直接输入webpack即可
// npm install webpack@3.6.0 --save-dev  @3.6.0是制定版本  --save-dev是指在开发阶段使用 项目打包完之后不用