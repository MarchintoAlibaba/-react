import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class search extends Component{
    static propsTypes = {
        setWrods:PropTypes.func.isRequired
    }
    search = () => {
        const {setWrods} = this.props;
        let words = this.refs.input.value
        if(words){
            setWrods(words);
        }
        
    }
    render (){
        return (
            <div>
                <h3>请输入你要搜索的关键字</h3>
                <div>
                    <input type="text" ref="input"></input>
                    <button onClick={this.search}>搜索</button>
                </div>
            </div>
        )
    }
}