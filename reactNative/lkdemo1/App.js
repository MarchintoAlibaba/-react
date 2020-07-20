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

// import LKText from './components/LKText';
// import LKImage from './components/LKImage';
// import LKImageDemo from './components/LKImageDemo';
// import LKTextInput from './components/LKTextInput';
// import LKOther from './components/LKOther';
// import LKFlexDemo from './components/LKFlexDemo';
// import LKScrollView from './components/LKScrollView';
// import LKSwiper from './components/LKSwiper';
// import DyNamic from './components/Dynamic/index'
// import Phone from './components/Phone/index'
// import NSwiper from './components/Swiper/index'
// import LKRefresh from './components/LKRefresh';
// import LKFlatList from './components/LKFlatList';
// import LKWineList from './components/LKWineList';
// import LKSectionList from './components/LKSectionList';
// import LKCarList from './components/LKCarList';
import LKNet from './components/LKNet';


const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.mainViewStyle}>
               {/*<LKText />*/}
               {/*<LKImage />*/}
               {/*<LKImageDemo />*/}
               {/*<LKTextInput />*/}
               {/*<LKOther />*/}
               {/*<LKFlexDemo />*/}
               {/*<LKScrollView />*/}
               {/*<LKSwiper />*/}
               {/*<DyNamic />*/}
               {/*<Phone />*/}
               {/*<NSwiper />*/}
               {/*<LKRefresh />*/}
               {/*<LKFlatList />*/}
               {/*<LKWineList />*/}
               {/*<LKSectionList />*/}
               {/*<LKCarList />*/}
               <LKNet />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    mainViewStyle: {
        flex:1,
        backgroundColor: '#fff',
    }
});

export default App;
