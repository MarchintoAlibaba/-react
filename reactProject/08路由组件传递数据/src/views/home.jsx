import React,{Component} from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
import News from './news';
import Msg from './msg';
export default class home extends Component{
    render(){
        return (<div>我是home组件11
            <div>
                <NavLink activeClassName="active" to="/home/news">news</NavLink><br/>
                <NavLink activeClassName="active" to="/home/msg">msg</NavLink>
            </div>
            <Switch>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/msg" component={Msg}></Route>
                <Redirect to="/home/news"></Redirect>
            </Switch>
        </div>)
    }
}