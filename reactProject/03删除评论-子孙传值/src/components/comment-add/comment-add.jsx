import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class commentAdd extends Component{
    static propTypes = {
        addComment:PropTypes.func.isRequired
    }
    state = {
        username:'',
        words:''
    }
    inputUsername = (event) => {
        // console.log(event.target)
        if(event.target.className.indexOf('comment') > -1){
            this.setState({
                words:event.target.value
            })
        }else{
            this.setState({
                username:event.target.value
            })
        }
    }
    add = () => {
        this.props.addComment(this.state);//通过父组件传递过来的函数触发父组件中的自定义事件
        this.setState({
            username:'',
            words:''
        })
    }
    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="from-group">
                        <label>用户名</label>
                        <input type="text" className="from-control" placeholder="请输入用户名" onChange={this.inputUsername} value={this.state.username}></input>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control comment" row="6" placeholder="评论能容" onChange={this.inputUsername} value={this.state.words}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}