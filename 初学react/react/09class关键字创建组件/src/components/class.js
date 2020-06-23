//使用class关键字创建组件 
import React from 'react';
export default class Movie extends React.Component{
    //这里的render函数的作用是 渲染当前组件所对应的虚拟dom元素
    render(){
        //这里接受父组件传递过来的参数直接用this.props接受
    return <div>这里是movie组件 {this.props.name} {this.props.age} {this.props.sex}</div>
    }
}