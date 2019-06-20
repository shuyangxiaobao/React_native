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
    TouchableOpacity,
} from 'react-native';
// import console = require('console');



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
              title:"我是默认值",
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>this.click("点击")}
                onPressIn={()=>{this.click("按下")}}
                onPressOut={()=>{this.click("抬起")}}
                onLongPress={()=>{this.click("长按")}}

            >
                <View style={styles.viewStyle}
                
                    >
                    <Text style={styles.TextStyle}>
                        {this.state.title}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
    }

    click(value){
        // alert(value);
        // console.log(value);
        console.log(value);

    }



}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'flex-start',
        justifyContent:"flex-start",
        flexDirection:"column",
    },

    TextStyle:{
        position:"relative",
        top:0,
        // width:250,
        height:60,
        backgroundColor:'rgba(0,255,255,0.0)',
        color:"#ffffff",
        lineHeight:60,
        fontSize:30,
        textAlign:"center",
        borderRadius:20,
        fontWeight:"100",//


        
    },
    viewStyle:{
        borderRadius:30,
        backgroundColor:"red",
        position:"absolute",
        top:50,
        left:40,
        width:300,
    }

})


