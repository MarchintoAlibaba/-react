import React, { Component } from 'react';

import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    Text
} from 'react-native'


export default class LKImage extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View>
                {/*加载本地图片*/}
               {/* <Image
                    source={require('./../assets/images/bit.jpeg')}
                    style={{width: 200, height: 200}}
                />*/}
                {/*加载网络图片*/}
               {/* <Image
                    source={{uri: 'http://www.itlike.com/template/simple/res/404/img/xiaoliao.png'}}
                    style={{width: 200, height: 200}}
                />*/}
                {/*base64加载*/}
                {/*<Image
                    style={{width: 66, height: 58}}
                    source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                />*/}
                {/*图片作为背景*/}
                {/*<ImageBackground
                    source={require('./../assets/images/lk.jpg')}
                    style={{width: 300, height: 200}}
                >
                    <Text style={{color: '#fff'}}>小撩宝宝</Text>
                    <Image
                        source={{uri: 'http://www.itlike.com/template/simple/res/404/img/xiaoliao.png'}}
                        style={{width: 90, height: 90}}
                    />
                </ImageBackground>*/}

                {/*图片的显示模式*/}
                <View>
                    <Image
                        source={{uri: 'http://www.itlike.com/template/simple/res/404/img/xiaoliao.png'}}
                        style={{width: 400, height: 400, backgroundColor: 'cyan', resizeMode: 'center'}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
