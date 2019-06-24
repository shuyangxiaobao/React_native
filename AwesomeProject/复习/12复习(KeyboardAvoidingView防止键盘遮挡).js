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
    KeyboardAvoidingView,
    TextInput,
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
              switchstate:true
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>asdfas</Text>
            
              <KeyboardAvoidingView behavior="padding"
            style={styles.KeyboardAvoidingViewStyle}>
                <TextInput
                value={this.state.data}
                style={styles.textInput}
                onChangeText={this.handleChangeData.bind(this)}
                />
            </KeyboardAvoidingView> 

        </View>
    );
    }
    myDateChange(date){
        AlertIOS.alert(date)
    }

    handleChangeData(value){
        // AlertIOS.alert(value.toString());
        // this.setState({
        //     data:value
        // })
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"flex-end",
        flexDirection:"column",
    },
    textInput:{
        marginTop:10,
            width:375,
            height:60,
            backgroundColor:'gray',
            //边框
            borderWidth:1,
            borderColor:'#dddddd',
        },
        textInputContainer:{
            flex:1,
            backgroundColor:"red",
        },
        KeyboardAvoidingViewStyle:{
            // marginBottom:100,
            // backgroundColor:"yellow",
            
        },
        titleStyle:{
            position:"absolute",
            bottom:100,
        }

})


