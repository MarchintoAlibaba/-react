import React from 'react';
import Comments from '@/Components/Comment2'
//通过class类创建有状态的组件
export default class Comment extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[{"id":1,'name':'zs','msg':'111'},
            {"id":2,'name':'ls','msg':'222'},
            {"id":3,'name':'ww','msg':'333'},
            {"id":4,'name':'xm','msg':'444'}
        ]
    }
    }
    render(){
        return <div><h1>这是评论列表</h1>
                {this.state.data.map(item => {return <Comments {...item} key={item.id}></Comments>})}
        </div>
    }
}