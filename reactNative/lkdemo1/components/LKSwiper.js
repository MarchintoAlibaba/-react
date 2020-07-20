import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

export default class LKSwiper extends Component {
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                loop={false}
                showsPagination={false}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>撩课学院</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Web前端</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>小撩宝宝</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
