import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native'


export default class LKText extends Component{
    constructor(){
        super();

        this.state = {
            name: '撩课学院',
            intro: '喜欢IT, 就来撩课！',
            bodyText: '对酒当歌，人生几何！对酒当歌，人生几何！对酒当歌，人生几何！'
        }
    }

    render(){
        const {name, intro, bodyText} = this.state;
        return (
           <View>
               <Text style={[styles.mainTitleStyle, styles.commonStyle]}>{name}</Text>
               <Text style={[styles.subTitleStyle, styles.commonStyle]}>{intro}</Text>

               {
                   /*<Text style={{fontSize: 50, color: 'green'}}>
                   <Text>{name + '\n'}</Text>
                   <Text>{intro}</Text>
               </Text>*/
               }
               <View style={{backgroundColor:'cyan', width: 200, height: 150}}>
                  <Text
                      style={{fontSize: 25, lineHeight: 40}}
                      numberOfLines={2}
                      ellipsizeMode='middle'
                  >
                      {bodyText}
                  </Text>
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    mainTitleStyle:{
        fontSize: 30,
        color: 'cyan'
    },
    subTitleStyle:{
        fontSize: 20,
        color: '#fff'
    },
    commonStyle: {
        fontWeight: 'bold'
    }
});
