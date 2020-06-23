const path = require('path');
//webpack配置文件
module.exports = {
    entry:'./src/main.js',//入口文件
    output:{//出口文件（打包后形成的文件）
        path:path.resolve(__dirname,'dist'),//出口文件路径 _dirname:这个是node的语法 实时的绝对路径 就是现在这个路径的地方
        filename:'build.js'//出口文件名
    }
}
//这样配置好之后就不用每次打包都输入命令 webpack ./src/main.js ./dist/build.js
//现在打包直接输入webpack即可
// npm install webpack@3.6.0 --save-dev  @3.6.0是制定版本  --save-dev是指在开发阶段使用 项目打包完之后不用