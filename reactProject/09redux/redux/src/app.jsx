import React,{Component} from 'react';
import * as action from './redux/actions';

export default class app extends Component{
    increment = () => {
        //得到选择增加数量
        const number = this.select.value * 1;
        //调用store方法更新状态
        this.props.store.dispatch(action.increment(number));
    }
    decrement = () => {
        //得到选择增加数量
        const number = this.select.value * 1;
        this.props.store.dispatch(action.decrement(number));
    }
    incrementIfOdd = () => {
        //得到选择增加数量
        const number = this.select.value * 1;
        const count = this.props.store.getState();//得到state的值
        if(count % 2 === 1){
            this.props.store.dispatch(action.increment(number));
        }
    }
    incrementAsync = () => {
        //得到选择增加数量
        const number = this.select.value * 1;
        setTimeout(() => {
            this.props.store.dispatch(action.increment(number));
        },1000)
    }
    render(){
        const count = this.props.store.getState();
        return (
        <div>
            <div>click {count} times</div>
            <select ref={(select) => {this.select = select}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&ensp;
            <button onClick={this.increment}>+</button>&ensp;
            <button onClick={this.decrement}>-</button>&ensp;
            <button onClick={this.incrementIfOdd}>如果是奇数才加</button>&ensp;
            <button onClick={this.incrementAsync}>异步加</button>
        </div>
        )
    }
}
//功能解释说明 初始值为0times 点击按钮加就加 点击按钮减就减 看选择框里的数是多少就加减多少；这个功能很简单 但是我们要用redux来做