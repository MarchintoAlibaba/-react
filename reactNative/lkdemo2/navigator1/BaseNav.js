
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


class HomeScreen extends React.Component{
    render(){
       return (
           <View style={{flex:1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
              <Text>首页</Text>
           </View>
       )
    }
}

class DetailScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>详情页</Text>
            </View>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
      Home: HomeScreen,
      Detail: DetailScreen
});

const  AppContainer = createAppContainer(TabNavigator);


export default AppContainer;
