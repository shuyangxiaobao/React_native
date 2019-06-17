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
// import { wrap } from 'module';



type Props = {};
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

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


<View style={styles.backViewStyle}>

        <Text style={styles.leftStyle}
        // onPress={()=>{this.textClick("左边")}}

        accessibilityHint={"235"}

        accessibilityLabel={"hahha"}

        accessible={true}
        
        >
        左边
        </Text>


        <Text style={styles.HomeTextStyle}
            onPress={()=>{this.textClick("Home")}}
            // onLongPress={()=>{this.textClick("Home 长按")}}
            selectable={false} // true:可以长按复制  false 无法复制
            onLayout={()=>{this.onLayout()}}

        >
            Home
        </Text>

        <Text style={styles.rightStyle}
        onPress={()=>{this.textClick("右边")}}
        >
        右边
        </Text>


</View>

<Text style={styles.oneText}
            onPress = {()=>{this.textClick("😄")}}
            hidden={true}
            >
                消息1
            </Text>



  
        </View>
    );
    }
    textClick(str){
        alert(str.toString());
    }

    onLayout(){
        alert("onLayout");
    }



}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        width:"100%",
        height:"100%",
        
        // flex:1,
        // justifyContent:"center",
        flexDirection:"row",
        // flexWrap:"wrap",
        // alignItems:'flex-start',

    },
    // Home
    HomeTextStyle:{
        // paddingTop:10,
        // paddingLeft:35,
        fontSize:25,
        color:"#ffffff",
        position:"absolute",
        top:20,
        height:44,
        lineHeight:44,
        // fontFamily:'sans-serif'
    },
    // 导航栏背景图
    backViewStyle:{
        position:"relative",
        left:0,
        top:0,
        right:0,
        height:64,
        width:screenWidth,
        backgroundColor:"#21212B",
               // flex:1,
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:'flex-start',
    },
    // 左边文字
    leftStyle:{
      color:"#ffffff",  
      fontSize:20,
      position:"absolute",
      top:20,
      left:0,
      width:60,
      height:44,
      lineHeight:44,
    //   backgroundColor:'yellow',
      textAlign:"center",

    },
    // 右边文字
    rightStyle:{
        color:"#ffffff",  
        fontSize:20,
        position:"absolute",
        top:20,
        right:0,
        width:60,
        height:44,
        lineHeight:44,
        // backgroundColor:'orange',
        textAlign:"center",
    }

})


