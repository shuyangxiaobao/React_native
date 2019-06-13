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
// import { wrap } from 'module';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
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
            <Text style={styles.oneText}>

                1111
            </Text>

            <Text style={styles.twoText}>
                2222
            </Text>

            <Text style={styles.oneText}>

33333333333333333333333333333333
</Text>
<Text style={styles.twoText}>

44444444444444444444444444444444
</Text>

<Text style={styles.oneText}>

555555
</Text>

<Text style={styles.twoText } numberOfLines={2}>

66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
</Text>
  
        </View>
    );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'flex-end',
        justifyContent:"flex-start",
        flexDirection:"row",
        // flexWrap:"wrap-reverse"
    },
    oneText:{
        color:"#ffffff",
        paddingTop:30,
        backgroundColor:"#ff0000"
        
    },
    twoText:{
        color:"#ffffff",
        paddingTop:30,
        paddingLeft:0,
        backgroundColor:"#00ff00"

        
    }

})


