//commonjs的导入模块化规范
const {add,mul} = require('./test.js');
add(100,300);
mul(100,300);
//commonjs的代码浏览器不能识别 要用webpack打包好之后才能在浏览器运行
//webpack打包命令：webpack ./src/main.js ./dist/build.js
//意思是：用webpack打包 将main.js的入口文件（只需要一个入口文件即可）打包到build.js里面 然后build.js就可以在浏览器上运行