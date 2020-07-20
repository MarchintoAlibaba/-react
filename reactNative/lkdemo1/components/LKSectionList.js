import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SectionList,
    Image, Dimensions,
} from 'react-native';
import LKSwipers from './../components/Swiper/index'

const screenW = Dimensions.get('window').width;

export default class LKSectionList extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <SectionList
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
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: "bold" }}>{title}</Text>
                )}
                sections={[
                    { title: "第一组", data: ["第一组第一行", "第一组第二行"] },
                    { title: "第二组", data: ["第二组第一行", "第二组第二行",  "第二组第三行",  "第二组第四行"] },
                    { title: "第四组", data: ["第三组第一行", "第三组第二行"] }
                ]}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}

const styles = StyleSheet.create({

});
