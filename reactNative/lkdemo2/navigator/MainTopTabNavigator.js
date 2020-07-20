import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator, MaterialTopTabBar} from 'react-navigation-tabs'

import {Image, StyleSheet} from 'react-native'

import LKHome from '../pages/LKHome';
import LKFind from '../pages/LKFind';
import LKNearby from '../pages/LKNearby';
import LKMine from '../pages/LKMine';

// 底部导航
const TABS = {
    LKHome: {
       screen: LKHome,
       navigationOptions: {
           tabBarLabel: '首页',
           tabBarIcon: ({focused})=>{
              if(!focused){
                  return <Image source={require('./../assets/tab/icon_tabbar_homepage.png')}  style={styles.bottomTabIconStyle}/>
              }else {
                  return <Image source={require('./../assets/tab/icon_tabbar_homepage_selected.png')}  style={styles.bottomTabIconStyle}/>
              }
           }
       }
   },
    LKFind: {
        screen: LKFind,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({focused})=>{
                if(!focused){
                    return <Image source={require('./../assets/tab/icon_tabbar_misc.png')}  style={styles.bottomTabIconStyle}/>
                }else {
                    return <Image source={require('./../assets/tab/icon_tabbar_misc_selected.png')}  style={styles.bottomTabIconStyle}/>
                }
            }
        }
    },
    LKNearby: {
        screen: LKNearby,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused})=>{
                if(!focused){
                    return <Image source={require('./../assets/tab/icon_tabbar_nearby_normal.png')}  style={styles.bottomTabIconStyle}/>
                }else {
                    return <Image source={require('./../assets/tab/icon_tabbar_nearby_selected.png')}  style={styles.bottomTabIconStyle}/>
                }
            }
        }
    },
    LKMine: {
        screen: LKMine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused})=>{
                if(!focused){
                    return <Image source={require('./../assets/tab/icon_tabbar_mine.png')}  style={styles.bottomTabIconStyle}/>
                }else {
                    return <Image source={require('./../assets/tab/icon_tabbar_mine_selected.png')}  style={styles.bottomTabIconStyle}/>
                }
            }
        }
    }
};

class MainTabNavigator extends Component{
    _tabNavigator(){
        const {LKHome, LKFind, LKNearby, LKMine} = TABS;
        const tabs = {LKHome, LKFind, LKNearby, LKMine};
        if(!this.tabNavigator){
            this.tabNavigator = createAppContainer(createMaterialTopTabNavigator(
                tabs, {
                    tabBarComponent: props => (
                        <MaterialTopTabBar
                            {...props}
                            style={{backgroundColor: 'rgb(231, 133, 54)'}}
                            // showIcon={true}
                            activeTintColor='rgb(62, 187, 175)'
                        />
                    ),
                }
            ))
        }
        return this.tabNavigator;
    }

    render(){
        const TabNavigator = this._tabNavigator();
        return <TabNavigator/>
    }
}

const styles = StyleSheet.create({
    bottomTabIconStyle: {
        width: 30,
        height: 30
    }
});

export default  MainTabNavigator
