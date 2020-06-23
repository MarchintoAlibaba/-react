//commonjs的导入模块化规范
//依赖test.js
const {add,mul} = require('./js/test.js');
add(100,300);
mul(100,300);
//commonjs的代码浏览器不能识别 要用webpack打包好之后才能在浏览器运行
//webpack打包命令：webpack ./src/main.js ./dist/build.js
//意思是：用webpack打包 将main.js的入口文件（只需要一个入口文件即可）打包到build.js里面 然后build.js就可以在浏览器上运行
//依赖css文件
require("./css/normal.css");
require("./css/special.less");

//引入vue 这是es6的模块导入语法
import Vue from 'vue'
import App from './vue/app.vue'
//创建vue实例
var app = new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})
document.write("5899988")