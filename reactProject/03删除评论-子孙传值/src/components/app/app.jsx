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
    addComment = (comment) => {
        this.state.comments.unshift(comment);
        this.setState({
            comments:this.state.comments
        })
    }
    deleteComment = (index) => {//删除一条在孙子组件里的评论 需要先将函数传递给儿子 儿子再传给孙子
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({
            comments:comments
        })
    }
    render(){
        const {comments} = this.state;
        console.log(comments)
        return (
            <div>
                <h2>请发表对react的评论</h2>
                <CommentAdd addComment={this.addComment}></CommentAdd>
                <CommentList comments={comments} deleteComment={this.deleteComment}></CommentList>
            </div>
        )
    }
}