import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class commentItem extends Component{
    static propTypes = {//声明接受参数的类型
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    handleDelete = () =>{
        const {deleteComment,index,comment} = this.props;
        if(window.confirm(`是否要删除${comment.username}的评论`)){
            deleteComment(index);
        }
    }
    render(){
        const {comment} = this.props || {};
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <button onClick={this.handleDelete}>删除</button>
                    </div>
                    <p className="user"><span>{comment.username}</span><span>说：</span></p>
                    <p className="centence">{comment.words}</p>
                </li>
            </div>
        )
    }
}