import React,{Component} from 'react';
import  Pubsub from 'pubsub-js';//导入pubsub//这是注册pubsub需要的包 需先下载 cnpm install pubsub-js --save
export default class search extends Component{
    search = () => {
        let words = this.refs.input.value
        if(words){
            Pubsub.publish('clickSearch',words)//发布点击事件 并传一个搜索关键字
        }  
    }
    render (){
        return (
            <div>
                <h3>请输入你要搜索的关键字</h3>
                <div>
                    <input type="text" ref="input"></input>
                    <button onClick={this.search}>搜索</button>
                </div>
            </div>
        )
    }
}