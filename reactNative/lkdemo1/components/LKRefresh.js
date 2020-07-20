import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    Dimensions
} from 'react-native'

const screenW = Dimensions.get('window').width;


export default class LKRefresh extends Component{
    constructor(){
        super();
        this.state = {
            rowDataArr: Array.from(new Array(30)).map((value, index)=>({
                title: '初始化数据' + index
            })),
            // 是否显示loading
            isRefreshing: false,
            loaded: 0
        }
    }

    render(){
        const rowsArr = this.state.rowDataArr.map((row, index)=>(<Row data={row} key={index}/>));
        return (
            <ScrollView
                refreshControl = {
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=>this._onRefresh()}
                        colors={['red', 'green', 'blue']}
                        title="正在加载中……"
                    />
                }
            >
                {rowsArr}
            </ScrollView>
        )
    }

    _onRefresh(){
        // 1. 显示指示器
        this.setState({
            isRefreshing: true
        });

        // 2. 模拟加载数据
        setTimeout(()=>{
            let newDataArr = Array.from(new Array(5)).map((value, index)=>({
                title: '我是拉下来的数据' + (this.state.loaded + index)
            })).concat(this.state.rowDataArr);

            // 更新状态机
            this.setState({
                rowDataArr: newDataArr,
                isRefreshing: false,
                loaded: this.state.loaded + 5
            });
        }, 2000);
    }
}

class Row extends Component{
    static defaultProps = {
        data: {}
    };

    render(){
        return (
            <View style={{
                width: screenW,
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: 'red',
                justifyContent:'center'
            }}>
                <Text>{this.props.data.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
