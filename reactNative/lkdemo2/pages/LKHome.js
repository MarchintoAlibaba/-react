import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class LKHome extends React.Component{
    static navigationOptions = {
        title: '撩课',
        headerStyle: {
            // backgroundColor: 'skyblue'
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        headerLeft: ()=>(
            <Button title="设置" onPress={()=>alert('设置')} />
        ),
        headerRight: ()=>(
            <Button title="扫一扫" onPress={()=>alert('扫一扫')} />
        )
    };

    render(){
        return (
            <View style={{flex:1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
                <Text>首页</Text>
                <Button title="跳转" onPress={()=>this.props.navigation.navigate('HomeDetail')} />
            </View>
        )
    }
}
