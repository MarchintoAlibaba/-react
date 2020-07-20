/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

// import BaseNav from './navigator1/BaseNav';
// import MainTabNavigator from './navigator/MainTabNavigator';
import MainTopTabNavigator from './navigator/MainTopTabNavigator';


const App: () => React$Node = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <MainTopTabNavigator />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
