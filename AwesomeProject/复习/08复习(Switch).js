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
    Switch,
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
            <Switch
            //  如果为true则禁用此组件的交互
            disabled={false}
            //   关闭状态时的边框颜色(iOS)或背景颜色(Android)。
                tintColor={'yellow'} 
            //   开启状态时的背景颜色
                onTintColor={'red'} 
            // 关闭状态下背景色
                ios_backgroundColor={"purple"}
            // 表示此开关是否打开。默认为false（关闭状态）
                value={this.state.switchstate}
            //   开关上圆形按钮的背景颜色
                thumbColor={"#888888"}
            //   当值改变的时候调用此回调函数，参数为新的值
              onValueChange={(value)=>this.click(value)}/>
            
        

           


        </View>
    );
    }

click(value){
    // alert(value);
    this.setState({
        switchstate:value
    })
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


