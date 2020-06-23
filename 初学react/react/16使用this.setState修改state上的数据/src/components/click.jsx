import React from 'react';
export default class Click extends React.Component{
    constructor(){
        super();
        this.state = {
            msg:'这个数据将要被修改'
        }
    }
    render(){
        return <div>   click这里是{}里面一个箭头函数里面包着一个函数执行
            <button onClick={() => {this.show()}}>点击</button>
            <div>{this.state.msg}</div>
        </div>
    }
    show = () => {
        console.log('这是react中标准的点击事件')
        //注意 this.setState方法里面执行是异步的 如果要拿到修改后的最新的值要调用异步函数
        this.setState({
            msg:'这是修改后的数据'
        },function(){//这就是回调函数
            console.log(this.state.msg)
        })
    }
}