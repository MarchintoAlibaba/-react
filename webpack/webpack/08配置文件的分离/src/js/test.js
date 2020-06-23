var add = function(num1,num2){
    console.log(num1 + num2);
}
var mul = function(num1,num2){
    console.log(num1 * num2);
}
//commonjs的导出模块化规范
module.exports = {add,mul};