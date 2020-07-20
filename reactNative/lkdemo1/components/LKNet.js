import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import axios from 'axios'
import LKSwipers from './../components/Swiper/index'

const screenW = Dimensions.get('window').width;


export default class LKNet extends Component{
    constructor(){
        super();
        this.state = {
            dataSource: [],
            imgDataArr: []
        }
    }

    render(){
        return (
            <FlatList
                ListEmptyComponent={()=>(<Text>正在拼命加载中......</Text>)}
                ListHeaderComponent={()=>(
                    <LKSwipers imgDataArr={this.state.imgDataArr} />
                )}
                data={this.state.dataSource}
                renderItem={({item, index})=>this._renderRow(item, index)}
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    _renderRow(item, index){
        return (
            <TouchableOpacity
                style={{
                    width:screenW,
                    height: 140,
                    borderBottomWidth: 1,
                    borderBottomColor: '#e8e8e8',
                    flexDirection: 'row',
                    padding: 10
                }}
                key={index}
            >
                <Image source={{uri: item.small_image}} style={{width: 120, height: 120}}/>
                <View
                  style={{
                      flex:1
                  }}
                >
                    <Text>{item.product_name}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount(){
        // 1. 发起网路请求(fetch)
       /* fetch('http://demo.itlike.com/web/xlmc/api/homeApi')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
      */

       // this.getHomeFromApi();

        // 2. 发起网络请求 axios
        axios('http://demo.itlike.com/web/xlmc/api/homeApi')
            .then((response) =>{
            // console.log(response);
            let icon_list = response.data.data.list[0].icon_list;
            let product_list = response.data.data.list[12].product_list;
            this.setState({
                imgDataArr: icon_list,
                dataSource: product_list
            })
        })
            .catch((error) =>{
                console.log(error);
            })
            .finally( () =>{

            });
    }

    async getHomeFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(
                'http://demo.itlike.com/web/xlmc/api/homeApi',
            );
            let responseJson = await response.json();
            console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    }
}

const styles = StyleSheet.create({

});
