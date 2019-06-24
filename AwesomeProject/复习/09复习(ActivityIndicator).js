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
    ActivityIndicator,
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
              switchstate:true,
              animating:true,
              Color:"rgba(0,0,0,0.4)"
        };
    }

    render() {
        return (
        <View style={styles.container}>
             <ActivityIndicator
          // 是否要显示指示器
          animating={this.state.animating}
          // 滚轮的前景颜色
          color="white"
          // 在没有动画的时候，是否要隐藏指示器
          ioshidesWhenStopped={true}
          // 指示器的大小
          size="small"

          style={[styles.activityStyle, {height: 80,width:80,backgroundColor:this.state.Color}]}
          />

          <ActivityIndicator
          animating={this.state.animating}
          color="#000000"

          style={[styles.activityStyle, {height: 80,width:80,backgroundColor:this.state.Color}]}
          size="large"
          
          />

          <Switch tintColor={'yellow'} onTintColor={'blue'} value={this.state.switchstate}onValueChange={(value)=>this.click(value)}
          style={styles.switchStyle}
          />
        </View>
    );
    }

click(a){
    this.setState({
        switchstate:a,
        animating:!this.state.animating,
        Color:this.state.animating ? "rgba(0,0,0,0.0)" : "rgba(0,0,0,0.4)"
    })
}


}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        flex:1,
        alignItems:'center',
        justifyContent:"space-around",
        flexDirection:"column",
    },

    activityStyle:{
        // backgroundColor:this.state.Color,
    },
    switchStyle:{
        marginBottom:200,
    }

})


