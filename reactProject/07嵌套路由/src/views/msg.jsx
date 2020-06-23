import React,{Component} from 'react';
export default class msg extends Component{
    state = {
        msg:[]
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                msg:[
                    {id:'001',title:'msg001',url:'aaa'},
                    {id:'002',title:'msg002',url:'bbb'},
                    {id:'003',title:'msg003',url:'ccc'},
                ]
            })
        },1000)
    }
    render(){
        return (
            <div>
                {this.state.msg.map((item) => {return <a href={item.url} key={item.id}>{item.title}</a>})}
            </div>
        )
    }
}