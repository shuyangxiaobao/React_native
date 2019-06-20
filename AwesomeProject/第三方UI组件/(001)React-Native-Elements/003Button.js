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
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'


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
                <Button
                title="Solid Button"
                buttonStyle={{height:100,width:100,borderRadius:0,}} //
                containerStyle={{backgroundColor:"#000000",width:120,height:150,}}
                disabled={false}
                />

                <Button
                title="Outline button"
                type="outline"
                />

                <Button
                title="Clear button"
                type="clear"
                />

                <Button
                icon={
                    <Icon
                    name="home"
                    size={15}
                    color="red"
                    />
                }
                title="Button with icon component"
                />

                <Button
                icon={{
                    name: "arrow-right",
                    size: 15,
                    color: "white"
                }}
                title="Button with icon object"
                />

                <Button
                icon={
                    <Icon
                    name="home"
                    size={30}
                    color="purple"
                    iconStyle={{color:"green",width:30,height:50,marginLeft:30,marginTop:20,}}

                    />
                }
                iconRight
                title="Button with right icon"

                // 外框样式
                containerStyle={{backgroundColor:"#ffffff",width:300,height:100,}}
                // 内部样式
                buttonStyle={{backgroundColor:"red",width:250,height:50,}}

                titleStyle={{color:"#000000",fontSize:10,}}



                />

                <Button
                title="Loading button"
                loading
                loadingStyle={{width:60,height:60,}}
                buttonStyle={{backgroundColor:"rgba(0,0,0,0.3)"}}
                disabled={false} // true 不可点击  false 可以点击
                // 按钮禁用状态下样式
                disabledStyle={{backgroundColor:"rgba(67,89,156,0.5)"}}

                onPress={()=>{this.onPress()}}

                />

                <Icon
                name='rowing' />

                <Icon
                name='g-translate'
                color='#00aced' />

                <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
                />

                <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
                />
        </View>
    );
    }

    onPress(){
        alert("loading");
    }


}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"space-around",
        flexDirection:"column",
        marginTop:0,
        marginBottom:0,
    },

})


