import React,{Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
export default class image extends Component{
    state = {
        first:true,
        second:false,
        third:null,
        fourth:null,
    }
    static propTypes = {
        wrods:PropTypes.string.isRequired
    }
    componentWillReceiveProps = (newprops) => {//这里是生命周期函数(新数据发生变化的时候回调用)这里接参数需要用参数形式来接
        const {searchwords} = newprops;
        this.setState({
            first:false,
            second:true
        })
        const url = `https://api.github.com/search/users?q=${searchwords}`;
        axios.get(url).then((response) => {
            let data = response.data.items;
            let dataArr = data.map((item,index) => {return {name:item.login,imgUrl:item.avatar_url,htmlUrl:item.html_url}});
            console.log(dataArr)
            this.setState({
                second:false,
                third:dataArr 
            })
        }).catch(error => {
            this.setState({
                second:false,
                third:null,
                fourth:error.message
            })
        })
    }
    render(){
        const {first,second,third,fourth} = this.state;
        if(first){
            return (
                <div>请输入你要搜索的关键字</div>
            )
        }else if(second){
            return (
                <div>正在努力搜索中...</div>
            )
        }else if(third){
            return (
            <div>{third.map((item,index) => {return <a href={item.htmlUrl} key={index}>
                <img src={item.imgUrl} alt="img"></img>
            <p>{item.name}</p>
                </a>})}</div>
            )
        }else{
            return (
            <div>{fourth}</div>
            )
        }
    }
}