import React,{Component} from 'react';
export default class commentAdd extends Component{
    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="from-group">
                        <label>用户名</label>
                        <input type="text" className="from-control" placeholder="请输入用户名"></input>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" row="6" placeholder="评论能容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}