import React,{Component} from 'react';
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'
export default class commentAdd extends Component{
    //给组件类指定属性
    static propTypes = {
        comments:PropTypes.array.isRequired,//规定参数接受的类型
        deleteComment:PropTypes.func.isRequired
    }
    render(){
        const {comments,deleteComment} = this.props;
        const ifdisplay = comments.length === 0 ? 'block' : 'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:ifdisplay}}>暂无评论 点击左侧添加评论</h2>
                <ul className="list-group">
                    {comments.map((comment,index) => <CommentItem comment={comment} key={index} deleteComment={deleteComment} index={index}></CommentItem>)}
                </ul>
                comment-list
            </div>
        )
    }
}
// CommentList.propTypes = {
//     comments:PropTypes.array.isRequired
// }