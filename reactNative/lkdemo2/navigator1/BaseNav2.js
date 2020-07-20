
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


class HomeScreen extends React.Component{
    // 设置头部导航相关内容
    static navigationOptions = {
        title: '撩课',
        headerStyle: {
            backgroundColor: 'skyblue'
        },
        headerTintColor: '#fff',
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
               <Button
                   title="跳转到详情页"
                   onPress={()=>this.props.navigation.navigate('Detail', {
                       newsId: 'lk001',
                       newsName: '撩课学院1号文件',
                       newsTag: '重要'
                   })}
               />
           </View>
       )
    }
}

class DetailScreen extends React.Component{
    // 设置头部导航相关内容
    static navigationOptions = {
        title: '详情页'
    };
    render(){
        const {navigation} = this.props;
        return (
            <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>详情页</Text>
                <Text>ID: {JSON.stringify(navigation.getParam('newsId'))}</Text>
                <Text>标题: {JSON.stringify(navigation.getParam('newsTitle', '默认标题'))}</Text>
                <Text>名称: {JSON.stringify(navigation.getParam('newsName', '默认标题'))}</Text>
                <Text>级别: {JSON.stringify(navigation.getParam('newsTag', '默认标题'))}</Text>
                <Text>整体获取: {JSON.stringify(navigation.state.params)}</Text>
            </View>
        )
    }
}

/*
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});
*/

const RootStack = createStackNavigator({
      Home: HomeScreen,
      Detail: DetailScreen
});



const  AppContainer = createAppContainer(RootStack);


export default AppContainer;
