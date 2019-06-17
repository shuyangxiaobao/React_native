/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    Image,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.oneViewStyle}>
                <Text style={styles.onetextStyle}>
                    1.加载项目中的图片
                </Text>

                <Image
                source={require('../Common/Source/img/icon3.png')}
                style={styles.oneImageStyle}
                >
                
                </Image>
            </View>

            <View style={styles.twoViewStyle}>
                <Text style={styles.onetextStyle}>
                    2.加载APP中的图片
                </Text>

                <Image
                source={{uri:'icon'}}
                style={styles.twoImageStyle}
                >
                
                </Image>
            </View>

            <View style={styles.threeViewStyle}>
                <Text style={styles.onetextStyle}>
                    3.加载网络上的图片
                </Text>

                <Image
                source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560519181982&di=4858ac7fd156a4f1469e9ce3df419a63&imgtype=0&src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F00e93901213fb80ee3bf98fb7a86e12ab9389408.jpeg%3Ftoken%3D073837e231d0ecac08633c45a8a28160%26s%3DBDB7CF100860B29CB60C0D470300A0E1'}}
                style={styles.threeImageStyle}
                >
                
                </Image>
            </View>
          

        </View>
    );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"flex-start",
        flexDirection:"column",
    },
    oneViewStyle:{
        flexDirection:"row",
        backgroundColor:"yellow",
        position:"relative",
        alignItems:'center',

        top:20,
        // left:0,
        width:ScreenWidth,
        height:100,
    },

    onetextStyle:{
        color:"#ff0000",
        fontSize:25,
        position:"relative",
        left:20,
    }, //绝对定位会使组件脱离文档流
    oneImageStyle:{
        position:"relative",
        left:40, 
    },
    twoViewStyle:{
        flexDirection:"row",
        backgroundColor:"yellow",
        position:"relative",
        alignItems:'center',

        top:40,
        // left:0,
        width:ScreenWidth,
        height:100, 
    },
    twoImageStyle:{
        position:"relative",
        left:40, 
        width:100,
        height:50,
    },

    threeViewStyle:{

        flexDirection:"row",
        backgroundColor:"orange",
        height:100,
        width:ScreenWidth,
        position:"relative",
        top:60,
        alignItems:"center",
    },

    threeImageStyle:{
        width:80,
        height:80,
        position:"relative",
        left:70,
        borderRadius:40,

        borderWidth:1,
        borderColor:"#ff0000",
        backgroundColor:"#000000",
        backfaceVisibility:"hidden",
        overflow:"visible",

    }


})


