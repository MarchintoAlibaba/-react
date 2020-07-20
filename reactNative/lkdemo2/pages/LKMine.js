import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class LkMine extends React.Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                <Text>我的</Text>
            </View>
        )
    }
}
