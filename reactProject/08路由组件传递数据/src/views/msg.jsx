import React,{Component} from 'react';
import {NavLink,Route} from 'react-router-dom';
import MsgDetails from './msg-details';
export default class msg extends Component{
    state = {
        msg:[]
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                msg:[
                    {id:'001',title:'msg0011',url:'msg-details'},
                    {id:'002',title:'msg002',url:'msg-details'},
                    {id:'003',title:'msg003',url:'msg-details'},
                ]
            })
        },1000)
    }
    render(){
        return (
            <div>
                {this.state.msg.map((item) => {return <NavLink to={`/home/msg/${item.url}/${item.id}`} key={item.id}>{item.title}</NavLink>})}
                <Route path="/home/msg/msg-details/:id" component={MsgDetails}></Route>
            </div>
        )
    }
}