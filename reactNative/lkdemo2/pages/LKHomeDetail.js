import React from 'react';
import {
    StyleSheet,
    View,
    Text, Button,
} from 'react-native';

export default class LKHomeDetail extends React.Component{
    static navigationOptions = {
        title: '详情页'
    };

    render(){
        return (
            <View style={{flex:1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
                <Text>详情页</Text>
            </View>
        )
    }
}
