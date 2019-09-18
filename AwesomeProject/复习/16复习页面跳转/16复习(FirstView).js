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
// import TouchanbleOpacity4 from '../../Common/4.TouchableOpacity4';


type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;

export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state={
            userName:null
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Text style={styles.TextStyle}>
                {this.props.name}
            </Text>
            </TouchableOpacity>
            <Text style={styles.TextStyle}>
                {this.state.userName}
            </Text>
            <Text style={styles.TextStyle}>
                {this.props.title}
            </Text>
            <Text style={styles.TextStyle}>
                {this.props.datas[1] + "   " + this.props.datas[2]}
            </Text>





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
    TextStyle:{
        marginTop:5,
        backgroundColor:"#007acc",
        color:"#ffffff",
        height:64,
        width:SCREENWIDTH,
        lineHeight:84,
        textAlign:"center",
    }

})


