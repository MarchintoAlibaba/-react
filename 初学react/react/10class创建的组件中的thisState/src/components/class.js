//使用class关键字创建组件 
import React from 'react';
export default class Movie extends React.Component{
    
    constructor(){
        //有自定义的构造器 并且继承了ReactComponent所有要在构造器里面写super函数
        super();
        this.state = {
            msg:'我是react里面的数据'
        }//这里就相当于vue里面的data(){return{}} 这里的数据时可读可写的
    }
    //这里的render函数的作用是 渲染当前组件所对应的虚拟dom元素
    //class关键字创建组件的方式比构造函数的好处是 1.有私有数据和生命周期
    render(){
        this.state.msg="我是react里面的数据 我是可读可写的"
        //这里接受父组件传递过来的参数直接用this.props接受
    return <div>这里是movie组件 {this.props.name} {this.props.age} {this.props.sex}
        <h1>{this.state.msg}</h1>
    </div>
    }
}