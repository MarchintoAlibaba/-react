
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
    render(){
       return (
           <View style={{flex:1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
              <Text>首页</Text>
               <Button
                   title="跳转到详情页"
                   onPress={()=>this.props.navigation.navigate('Detail')}
               />
           </View>
       )
    }
}

class DetailScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>详情页</Text>
                <Button
                    title="跳转到详情页"
                    onPress={()=>this.props.navigation.navigate('Detail')}
                />
                <Button
                    title="跳转到详情页(push)"
                    onPress={()=>this.props.navigation.push('Detail')}
                />
                <Button
                    title="跳转到首页"
                    onPress={()=>this.props.navigation.navigate('Home')}
                />
                <Button
                    title="返回上一级"
                    onPress={()=>this.props.navigation.goBack()}
                />
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
