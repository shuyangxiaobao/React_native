
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
              title:"mo34567890",
        };
    }

    render() {
        console.log("render 2");
        return (
        <View style={styles.container}>
            <Text style={styles.TestStyle}
            onPress={()=>{this.click()}}
            >
                {this.state.title}
            </Text>

        </View>
    );
    }

    click(){
        this.setState({
            title:this.state.title + "u"
        })
    }


    getDefaultProps(){
        console.log("getDefaultProps");

        // AlertIOS.alert("getDefaultProps 来了1")
    }

        // 在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。
    // 在整个生命周期中只被调用一次
    componentWillMount(){
        console.log("componentWillMount 来了1");
        // AlertIOS.alert("componentWillMount 来了1")
    }

    // 在组件第一次绘制之后调用 通知组件已经加载完成
    componentDidMount(){
        console.log("componentDidMount 来了3");
        // AlertIOS.alert("componentDidMount 来了2")
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps 来了4")
        // AlertIOS.alert("componentWillReceiveProps 来了3")
    }

    componentDidUpdate(){
        alert("Didupdate");
        console.log("didupdate");
    }

    shouldComponentUpdate(){
        return true;
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


