import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native'


const screenW = Dimensions.get('window').width;

export default class LKFlatList extends Component{
    constructor(){
        super();
        this.state =  {
            dataSource: [
                '第一行数据',
                '第二行数据',
                '第三行数据',
                '第四行数据',
                '第五行数据',
                '第六行数据',
                '第七行数据',
                '第八行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据',
                '第九行数据'
            ]
        }
    }

    render(){
        return (
            <FlatList
              data={this.state.dataSource}
              renderItem={({item, index})=>this._renderRow(item, index)}
              keyExtractor={(item, index) => item + index}
              style={{
                  width: screenW,
                  flexDirection:'row',
                  flexWrap: 'wrap'
              }}
              numColumns={4}
            />
        )
    }

    _renderRow(item, index){
        return (
            <TouchableOpacity
              style={{
                  width:100,
                  height: 200,
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  justifyContent:'center',
                  alignItems:'center'
              }}
              onPress={()=>alert('点击了第' + (index + 1) + '行')}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

});
