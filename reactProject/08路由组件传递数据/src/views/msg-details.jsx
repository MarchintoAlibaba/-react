import React,{Component} from 'react';
export default class msgDetails extends Component{
    state = {
        details:[
            {id:'001',content:'我爱你 中国',user:'天空'},
            {id:'002',content:'我爱你 父母',user:'小天'},
            {id:'003',content:'我爱你 老婆',user:'小空'},
        ],
        detail:''
    }
    componentWillReceiveProps(props){
        const {id} = props.match.params;//取出url路径上的id值 一般这里是根据这个id发送ajax请求
        console.log(id)
        const aa = this.state.details.find((item) => {return item.id === id})
        this.setState({
            detail:aa
        })
    }
    render(){
        return (
            <div>{this.state.detail.content}</div>
        )
    }
}
