/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';


/*
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.mainViewStyle}>
         <View style={{width: 40, height: 110, backgroundColor: 'green'}}><Text>视图1</Text></View>
         <View style={{width: 60, height: 120, backgroundColor: 'purple'}}><Text>视图2</Text></View>
         <View style={{width: 70, height: 150, backgroundColor: 'cyan'}}><Text>视图3</Text></View>
         <View style={{width: 80, height: 170, backgroundColor: 'orange'}}><Text>视图4</Text></View>
      </SafeAreaView>
    </>
  );
};
*/

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.mainViewStyle}>
                <Text>
                    当前屏幕的宽度：{Dimensions.get('window').width + '\n'}
                    当前屏幕的高度：{Dimensions.get('window').height + '\n'}
                    当前屏幕的分辨率：{Dimensions.get('window').scale + '\n'}
                    当前运行的平台：{Platform.OS}
                </Text>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    mainViewStyle: {
        flex:1,
        backgroundColor: 'red',
        // 主轴方向
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
