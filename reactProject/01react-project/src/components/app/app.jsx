import React,{Component}from 'react';
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
import './test.css';
export default class app extends Component{
    state = {
        comments:[
            {username:'张三',words:'react还可以'},
            {username:'李四',words:'react真难'},
        ]
    }
    render(){
        const {comments} = this.state;
        console.log(comments)
        return (
            <div>
                <h2>请发表对react的评论</h2>
                <CommentAdd></CommentAdd>
                <CommentList comments={comments}></CommentList>
            </div>
        )
    }
}