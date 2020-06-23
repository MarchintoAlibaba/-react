// console.log('我是react项目11223553')
import React from 'react' //导入react创建组件 虚拟dom元素 生命周期
import ReactDom from 'react-dom' //导入react-dom 吧创建好的组件和虚拟dom渲染到页面上
//一、react最基本的将虚拟dom渲染到页面上 先导入两个包 cnpm install react react-dom -S
//2.创建虚拟dom
//参数1 创建元素的类型 字符串 元素名称
//参数2 是一个对象或null 表示这个dom的属性
//参数3 子节点
//参数n 所有子节点
//列创建一个 <h1 class="myh1" title="this is a h1">这是一个大大的h1</h1>
// const myh1 = React.createElement('h1',{id:"app",title:"this is a h1"},'这是一个大大的h1')
//3.使用ReactDom把虚拟Dom渲染到页面上
//1.参数1 要渲染的那个dom元素
//2.参数2 指定到一个容器上

//jsx语法就是在js文件里面写一个html标签 下载这些babel的目的是将jsx语法先转化为js然后打包
//现在要下载一些babel来解析编译并加载jsx语法
//1.cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//2.cnpm i babel-preset-env babel-preset-stage-0 -D
//3.cnpm i babel-preset-react -D

// const bb = <div id="aa">aaa
//     <h1>注意安装的babel的版本问题</h1>
// </div>

// ReactDom.render(bb,dom);
//04在jsx中书写js代码
const a = 10;
const b = '我是一个字符串';
const c = true;
const d = <h1>可以是一个标签</h1>;
const arr = [
    <h2>也可以是一个数组</h2>,
    <h3>数组里面是标签</h3>
]

//jsx xml比html语法要严格
//直接可以在jsx里面写js表达式

const testarr = ['腾讯','阿里巴巴','京东'];
//现在需要将数组里面每一项外面添加一个h5标签 并将其渲染到页面上
//注意react中需要将key添加给数组里面 并且要将key直接加给for循环的这个元素 key值的作用是防止页面渲染的每一项的状态紊乱
const allarr = [];
testarr.forEach(item=>{
    allarr.push(<h5 key={item}>{item}</h5>)
})
console.log(allarr[0])
const dom = document.getElementById('app');
ReactDom.render(<div>
    {a + 2} 
    <hr/>
    {b}
    <hr/>
    {c ? 'c为ture就为true':'c为false就为false'}
    <hr/>
    {d}
    <hr/>
    {/* {arr} */}
    <hr/>
    <div className="aa"></div>
    <label htmlFor="bb"></label>
    {allarr}
    <hr/>
    {testarr.map(temp => {
        return <h5 key={temp}>{temp}</h5>
    })}
</div>,dom)