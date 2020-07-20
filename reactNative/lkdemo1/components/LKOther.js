import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text
} from 'react-native'


export default class LKOther extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    title="登录"
                    onPress={()=>this._onBtnPress()}
                    color="red"
                />

                <TouchableOpacity
                   style = {styles.btnStyle}
                   activeOpacity={0.6}
                   // onPress={()=>this._onBtnPress()}
                   // onPressIn ={()=>this._onBtnPress()}
                   // onPressOut ={()=>this._onBtnPress()}
                   onLongPress ={()=>this._onBtnPress()}
                >
                    <Text style={{fontSize: 20, color: '#fff'}}>注册账号</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onBtnPress(){
        alert('点我干嘛？');
    }
}

const styles = StyleSheet.create({
    btnStyle: {
        width: 200,
        height: 40,
        borderRadius:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
});
