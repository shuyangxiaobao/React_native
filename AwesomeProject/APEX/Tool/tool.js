
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
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;
export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true
        };
    }

    customPressHandler = () => {
        //自定义的方法，请使用属性来定义,这里自定的把this绑定到这个方法上
        alert('你按下了按钮' + this.state.status);
    };

    render() {
        return (
        <View style={styles.container}>

        </View>
    );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },

})




