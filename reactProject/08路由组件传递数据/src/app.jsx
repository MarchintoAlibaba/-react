import React from 'react';
import About from './views/about';
import Home from './views/home'; 
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';

export default class app extends React.Component{
    render(){
        return(
        <div>
            <div>点击显示不同的路由组件</div>
            <NavLink to="/about" activeClassName="active">
                去往about组件 
                {/* 这个部分是挂载路由路径的  解构赋值 {...this.props} */}
            </NavLink>
            <br></br>
            <NavLink to="/home" activeClassName="active">
                去往home组件
            </NavLink>
            <div>
                <Switch>
                    {/* 匹配路由 当项目在哪个路劲下面就显示哪个组件 在vue里面有个专门的路由配置文件 */}
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                    {/* 这里重定向配置默认展示的组件 */}
                    <Redirect to="about"></Redirect> 
                </Switch>
            </div>
        </div>
        ) 
    }
}