import React, { Component } from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native'


export default class LKText extends Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    render(){
        return (
            <View>
               <TextInput
                  style={{
                      width: 300,
                      height: 80,
                      borderColor:'gray',
                      borderWidth: 1,
                      marginLeft: 10,
                      paddingLeft: 10
                  }}
                  clearButtonMode="always"
                  // keyboardType="visible-password"
                  placeholder="请输入用户名"
                  placeholderTextColor="red"
                  multiline = {true}
                  onChangeText={(text)=>{this.setState({inputValue: text})}}
               />
               <Text>输入的内容：{this.state.inputValue}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
