import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class commentItem extends Component{
    static propTypes = {//声明接受参数的类型
        comment:PropTypes.object.isRequired
    }
    render(){
        const {comment} = this.props;
        return (
            <div>
                <li className="list-group-item">
                        <div className="handle">
                            <button>删除</button>
                        </div>
                        <p className="user"><span>{comment.username}</span><span>说：</span></p>
                        <p className="centence">{comment.words}</p>
                    </li>
            </div>
        )
    }
}