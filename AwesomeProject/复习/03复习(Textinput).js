


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
            TextInputContent:"我是默认文字",
        };
    }

    render() {
        return (
        <View style={styles.container}>

            <TextInput
            style={styles.onePutStyle}
            placeholder={"124"}
            autoComplete={"charers"}
            caretHidden={false}
            password={true}
            clearButtonMode={"unless-editing"}

            clearTextOnFocus={false}

            multiline={false}
            editable={true}
            dataDetectorTypes={"address"}
            enablesReturnKeyAutomatically={true}
            keyboardAppearance={"dark"}
            keyboardType={"twitter"} //  
            maxLength={50}
            onChangeText={(value)=>this.changeText(value)}
            textContentType={"location"}
            // secureTextEntry={true}
            // selection={{start: 10,end: 10}}
            selectionColor={"orange"}
            // selectTextOnFocus={true}
            spellCheck = {true}

            // textContentType={"password"}

            defaultValue={this.state.TextInputContent}




            








            />
            <Text
            style={styles.TextStyle}
            onPress={()=>{this.click()}}
            >
                56789
            </Text>


        </View>
    );
    }

    click(value){
        // alert(this.state.TextInputContent);
        // this.setState({
        //     TextInputContent:"value"+
        // }) 
        alert(this.state.TextInputContent);
    }

    changeText(value){
       this.setState({
           TextInputContent:value
       }) 
    }


}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        flexDirection:"row",
    },
    onePutStyle:{
        backgroundColor:"#eeeeee",
        position:"relative",
        top:20,
        left:20,
        width:SCREENWIDTH-40,
        height:60,
        borderRadius:6,
    },
    TextStyle:{
        position:"absolute",
        top:100,
        left:100,
        backgroundColor:"#456789",
        width:90,
        height:30,
        lineHeight:30,
        textAlign:"center",
    }

})


/** 
 * keyboardType:"ascii-capable",
                "decimal-pad",
                default,
                "email-address",
                "name-phone-pad",
                "number-pad",
                "numbers-and-punctuation",
                numeric,
                "phone-pad",
                twitter,
                url,
                "web-search"

*/


