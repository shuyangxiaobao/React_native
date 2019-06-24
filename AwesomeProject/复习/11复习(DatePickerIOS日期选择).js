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
    DatePickerIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;

export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true,
              date:new Date()
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>001</Text>
            <DatePickerIOS
        //   当前被选中的日期。
           date={this.state.date}
        //    可选的最小的分钟单位。
           minuteInterval={1}
           style={styles.dataPickStyle}
    // 选择器模式 date:年月日     time：时分    datetime：星期 时 分
           mode="datetime"
           //时区差，单位是分钟
           timeZoneOffsetInMinutes={8*60} 
           onDateChange={(value)=>{this.onDateChange(value)}}

          />

        </View>
    );
    }

    onDateChange(value){
        console.log(value);
        alert(value.toString())
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
    dataPickStyle:{
        width:SCREENWIDTH,
        height:300,
        borderWidth:2,
        borderRadius:20,
        borderColor:"yellow",
    }

})


