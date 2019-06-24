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
    Button
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
              buttonTitle:"xiaoming"
        };
    }

    render() {
        return (
        <View style={styles.container}>

            <Button
            title={this.state.buttonTitle.toString()}
            color="red"
            // 用于给残障人士显示的文本（比如读屏应用可能会读取这一内容）
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonStyle}
            onPress={()=>{this.click()}}
            disabled={false}


            >
                
            </Button>

        </View>
    );
    }

    click(){
        alert("123");
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
    buttonStyle:{
        backgroundColor:"#ffff00",
        width:100,
        height:50,
        borderWidth:2,
        borderColor:"#000000"
    }

})


