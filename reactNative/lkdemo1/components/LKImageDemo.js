import React, { Component } from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'


export default class LKImageDemo extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                {this._renderItem()}
            </View>
        )
    }

    _renderItem(){
       // 0. 常量
       let screenW = Dimensions.get('window').width;
       let cols = 3, boxW = 100, boxH = 120;
       let hMargin = (screenW - boxW * cols) / (cols + 1);
       let vMargin = 20;
       let dataArr = require('./../assets/localData/packageData');

       // 1. 组件数组
       let itemArr = [];

       // 2. 遍历数组
        for(let i=0; i < dataArr.length; i++){
            // 2.1 取出单个数据
            let data = dataArr[i];
            // 2.2 创建组件装入数组
            itemArr.push(
                <View key={i} style={{
                    width: boxW,
                    height: boxH,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hMargin,
                    marginTop: vMargin
                }}>
                    <Image source={{uri: data.icon}} style={{width: 80, height: 80}} />
                    <Text style={{marginTop: 5}}>{data.name}</Text>
                </View>
            )
        }

       // 3. 返回组件数组
       return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
