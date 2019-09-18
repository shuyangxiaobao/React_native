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
            renderRow = {this.renderRow.bind(this)}
            />
    );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        var obj = this;
        return(
            <TouchableOpacity
            // onPress={(rowData)=>{AlertIOS.alert('成功!','成功解锁'+rowData.name+'英雄!'+ this.dataSource.toString())}}
            // onPress={()=>obj.onPress(sectionID,rowID)}
            onPress={()=>this.click(sectionID,rowID,rowData)}


            // onChange={(value)=>this.change(value)}

            >
            {/* <TouchableOpacity activeOpacity={0.5}
            onPress={()=>{AlertIOS.alert('购买成功!','成功解锁'+rowData.name+'英雄!')}}
> */}

            <View style={styles.cellStyle}>
                 <Text style={styles.cellTextStyle}>
                    {rowData.name}
                 </Text>
                 <View style={styles.bottomViewStyle}>
                    <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>


                    <Text style={styles.destriptionStyle}
                    numberOfLines={100}
                    >{"        " + rowData.title}</Text>


                 </View>


            </View>
            </TouchableOpacity>
        )
    }

    click(sectionID,rowID,rowData){
        // alert("234");
        AlertIOS.alert("ok",rowData.name,);

        
        // alert(rowData.name)
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
        // height:90,
       // flexDirection:"column",
       flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:'flex-start',
        borderColor:"#000000",
        borderBottomWidth:0.3,
    

    },
    cellTextStyle:{

        marginTop:10,
        width:SCREENWIDTH,
        textAlign:"center",


    },
    leftImageStyle:{
        width:100,
        height:100,
        marginTop:10,
        marginBottom:40,
        marginLeft:20,

    },
    bottomViewStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:'flex-start',
        width:SCREENWIDTH,
    },
    destriptionStyle:{

       marginTop:10, 
       marginLeft:10,
       marginRight:140,
    }

})

