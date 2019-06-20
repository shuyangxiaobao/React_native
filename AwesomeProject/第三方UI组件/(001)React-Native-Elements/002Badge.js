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

import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'




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
            <View style={styles.oneViewStyle}> 
                <Text style={{fontSize:20,}}>第1组</Text>
                <Badge value="99+" status="error" />
                <Badge value={<Text> My Custom Badge </Text>}></Badge>
                <Badge status="success"/>
                <Badge status="error" />
                <Badge status="primary" />
                <Badge status="warning" />
            </View>

            <View style={styles.twoViewStyle}> 
                <Text style={{fontSize:20, marginRight:70,}}>第2组</Text>
                <Avatar
                    rounded
                    source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                />
                <Badge
                    status="success"
                    containerStyle={{ position: 'relative', top: -20, left: -10 }}
                />


                <Avatar
                    rounded
                    source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                    containerStyle={{width:50,height:50,borderRadius:25,}}
                />
                <Badge value="99+" status="error" 
                containerStyle={{ position: 'relative', top: -20, left: -10 }}
                />

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
        justifyContent:"space-around",
        flexDirection:"column",
    },
    oneViewStyle:{
        alignItems:'center',
        justifyContent:"space-around",
        flexDirection:"row",
        width:SCREENWIDTH-40,
        marginRight:20,
        height:50,

    },
    twoViewStyle:{
        alignItems:'center',
        justifyContent:"flex-start",
        flexDirection:"row",
        width:SCREENWIDTH-40,
        marginRight:20,
        height:50,
    },


})


