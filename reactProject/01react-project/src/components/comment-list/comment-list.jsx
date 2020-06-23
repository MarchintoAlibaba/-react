import React,{Component} from 'react';
import PropTypes from 'prop-types' //需要先下载插件 npm install prop-types --save
import CommentItem from '../comment-item/comment-item'
export default class commentAdd extends Component{
    //给组件类指定属性
    static propTypes = {
        comments:PropTypes.array.isRequired//规定参数接受的类型
    }
    render(){
        const {comments} = this.props;
        console.log(comments)
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:'none'}}>暂无评论 点击左侧添加评论</h2>
                <ul className="list-group">
                    {comments.map((comment,index) => <CommentItem comment={comment} key={index}></CommentItem>)}
                </ul>
                comment-list
                {this.props.comments[0].username}
            </div>
        )
    }
}
// CommentList.propTypes = {
//     comments:PropTypes.array.isRequired
// }