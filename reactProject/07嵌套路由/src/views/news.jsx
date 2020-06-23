import React,{Component} from 'react';
export default class news extends Component{
    state = {
        data:[
            'news001',
            'news002',
            'news003',
        ]
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.data.map((item,index) => {return (<li key={index}>{item}</li>)})}
                </ul>
            </div>
        )
    }
}