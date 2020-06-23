import React from 'react';
import ReactDom from 'react-dom'
import style from '@/css/life.scss';
//这里我们要实现的一个功能就是 使页面上的文字渐隐渐现 并且当点击的时候就删除这个组件
export default class life extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:1,
        }
    }
    componentDidMount(){//这个react的生命周期函数相当于vue里面的mounted
        let moveOpacity = 1;
        this.interval = setInterval(() => {
            moveOpacity -= 0.1;
            this.setState({
                opacity:moveOpacity
            })
            if(moveOpacity <= 0){
                moveOpacity = 1;
            }   
            console.log(222)   
        },200)
    }
    componentWillUnmount(){//这个react生命周期相当于vue里面的beforeDistroy
        clearTimeout(this.interval)
    }
    distroyComponent = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('app'))
    }
    render(){
        return <div>
            <div className={style.title} style={{"opacity":this.state.opacity}}>我就是渐隐渐现的文字</div>
            <button onClick = {()=>{this.distroyComponent()}}>点击按钮销毁组件</button>
        </div>
    }
}
// react生命周期流程
// 1.第一次初始化渲染显示：ReactDom.render();
// constructor():创建对象初始化state
// componentWillMount():将要插入回调 相当于vue里面的beforeMount
// componentDidMount();已经插入回调 相当于vue里面的mounted 开启监听 请求ajax
// 2.每次数据变化更新 state:this.setState()
// componentWillUpdate():将要更新回调 相当于vue里面的beforeUpdate
// render():重新渲染
// componentDidUpdate():已经更新回调 相当于vue里面的updated
// 3.移除组件ReactDom.unmountComponentAtNode(containerDom)
// componentWillUnmount():组件将要被移除 相当于vue里面的beforeDistroy 做一些收尾工作 如清除定时器