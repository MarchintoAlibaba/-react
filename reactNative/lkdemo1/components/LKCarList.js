import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    SectionList
} from 'react-native';

const screenW = Dimensions.get('window').width;


// 1. 引入本地数据
const carDataArr = require('./../assets/localData/Car').total;


export default class LKWineList extends Component{
    constructor(){
        super();
        this.state = {
            dataSource: carDataArr
        }
    }

    render(){
        return (
            <SectionList
                renderItem={({ item, index, section }) => this._renderRow(item, index, section)}
                renderSectionHeader={({ section: { title } }) => this._renderSectionHeader(title)}
                sections={this.state.dataSource}
                keyExtractor={(item, index) => item + index}
            />
            )
    }

    _renderRow(rowData, rowID, section){
        return (
            <TouchableOpacity style={styles.cellStyle}>
                <Image source={{uri: rowData.icon}} style={styles.imgStyle} />
                <Text>{rowData.name}</Text>
            </TouchableOpacity>
        )
    }

    _renderSectionHeader(sectionData){
        return (
            <View style={styles.sectionStyle}>
                <Text>{sectionData}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionStyle: {
        backgroundColor: 'cyan',
        height: 30,
        justifyContent: 'center',
        paddingLeft: 8
    },

    cellStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
        alignItems:'center',
        marginLeft: 8
    },

    imgStyle: {
        width: 80,
        height: 80,
        marginRight: 10
    }
});
