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
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var Heros=require("./Json/heros.json");
export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        // var ds = new ListView.dataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});

        this.state = 
        {
              dataSource:ds.cloneWithRows(Heros),
        };
    }

    render() {
        return (
            <ListView
            style = {{marginTop:64,}}
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow}

            />

    );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <View style={styles.cellStyle}>
<Text>65789</Text>
            </View>
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
    cellStyle:{
        width:SCREENWIDTH,
        height:50,
    }

})


