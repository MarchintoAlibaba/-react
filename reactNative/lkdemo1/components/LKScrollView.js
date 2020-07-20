import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'


export default class LKScrollView extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // scrollEnabled={false}
                >
                    {this._renderItem()}
                </ScrollView>
            </View>
        )
    }

    _renderItem(){
       // 1. 颜色数组
       let colorArr = ['red', 'green', 'blue', 'yellow', 'purple'];
       // 2. 组件数组
       let itemArr = [];
       // 3. 遍历
        for(let i=0; i<colorArr.length; i++){
            itemArr.push(
                <View
                   style={{
                       width: Dimensions.get('window').width,
                       height: 300,
                       backgroundColor: colorArr[i]
                   }}
                   key={i}
                >
                    <Text>{i}</Text>
                </View>
            )
        }
        // 4. 返回组件数组
        return itemArr;
    }
}

const styles = StyleSheet.create({

});
