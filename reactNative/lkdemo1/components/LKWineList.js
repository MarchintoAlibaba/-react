import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

const screenW = Dimensions.get('window').width;

import LKSwipers from './../components/Swiper/index'

// 1. 引入本地数据
const wineArr = require('./../assets/localData/Wine');


export default class LKWineList extends Component{
    constructor(){
        super();
        this.state = {
            dataSource: wineArr
        }
    }

    render(){
        return (
            <FlatList
                ListHeaderComponent={()=>(
                   <LKSwipers />
                )}
                ListFooterComponent={()=>(
                    <View>
                        <Image
                          source={require('./../assets/images/lk.jpg')}
                          style={{width: screenW, height: 200}}
                        />
                    </View>
                )}
                data={this.state.dataSource}
                renderItem={({item, index})=>this._renderRow(item, index)}
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    _renderRow(rowData, rowID){
        return (
            <TouchableOpacity
              style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: '#e8e8e8',
                  padding: 10
              }}
            >
                {/*左边*/}
                <Image
                    source={{uri: rowData.image}}
                    style={{width: 80, height: 80, backgroundColor: 'red'}}
                />
                {/*右边*/}
                <View style={{
                    flex:1,
                    // backgroundColor: 'cyan',
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: 'space-around'
                }}>
                    <Text
                      numberOfLines={2}
                      style={{fontSize: 18}}
                    >{rowData.name}</Text>
                    <Text>¥{rowData.money}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

});
