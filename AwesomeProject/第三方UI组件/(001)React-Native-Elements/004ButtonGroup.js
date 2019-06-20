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

import { ButtonGroup } from 'react-native-elements';




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
            selectedIndex: 0
        };
        this.updateIndex = this.updateIndex.bind(this)

    }

    updateIndex (selectedIndex) {
        alert(selectedIndex);
        this.setState({selectedIndex})
      }

      render () {
        const buttons = ['Hello', 'World', 'Buttons']
        // const { selectedIndex } = this.state

        const{selectedIndex}=this.state
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            // selectedIndexes={[0,1]}
            buttons={buttons}
            containerStyle={{height: 100,marginTop:20,width:350,overflow:"visible",backgroundColor/*高亮时颜色*/ :"#21212b",}}

            // Text 样式
            textStyle={{backgroundColor:"red",height:50,lineHeight:50,fontSize:20,marginTop:0,color:"white"}}
            // 选中时Text样式
            selectedTextStyle={{backgroundColor:"green",color:"black",fontSize:30,}}

            selectMultiple={false}
            // 未选中
            buttonStyle={{height:50,backgroundColor/*未选中颜色*/:"yellow",borderColor:"red",borderWidth:1,}}
            //  选中时Button样式
            selectedButtonStyle={{backgroundColor:"red"}}

            // innerBorderStyle={{width:40,color:"orange"}}

            disabledSelectedTextStyle={{fontSize:10,}}
            disabledSelectedStyle={{backgroundColor:"#000078"}}
            disabled={true}
          />
        )
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


