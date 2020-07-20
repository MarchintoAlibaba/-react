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
} from 'react-native';


const App: () => React$Node = () => {
  let str = 'Hello，撩课学院！';
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={{flex:1, backgroundColor: 'red'}}>
        <View style={styles.mainViewStyle}>
           <Text>{str}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    mainViewStyle: {
        width: 200,
        height: 200,
        backgroundColor: 'green'
    }
});

export default App;
