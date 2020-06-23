import React from 'react';
export default class Click extends React.Component{
    render(){
        return <div>click这里是{}里面一个箭头函数里面包着一个函数执行
            <button onClick={() => {this.show()}}>点击</button>
        </div>
    }
    show = () => {
        console.log('这是react中标准的点击事件')
    }
}