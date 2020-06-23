import React from 'react';
import Comments from '@/Components/Comment2'
import styleCss from '@/css/style2.scss'//导入css 其模块化的原理就是 将选择器名字变成唯一不重复的值
console.log(styleCss)
// import style from '../../../11组件化创建评论列表/src/components/style';
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
        return <div><h1 className={styleCss.title} id={styleCss.special}>这是评论列表</h1>
                {this.state.data.map(item => {return <Comments {...item} key={item.id}></Comments>})}
        </div>
    }
}