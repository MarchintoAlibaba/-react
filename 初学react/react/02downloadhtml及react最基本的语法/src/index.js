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
const myh1 = React.createElement('h1',{id:"app",title:"this is a h1"},'这是一个大大的h1')
//3.使用ReactDom把虚拟Dom渲染到页面上
//1.参数1 要渲染的那个dom元素
//2.参数2 指定到一个容器上
const dom = document.getElementById('app');
ReactDom.render(myh1,dom);