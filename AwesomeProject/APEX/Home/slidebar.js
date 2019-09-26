/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    ListView,
    TouchableOpacity,
} from 'react-native';
import { colors, Image } from 'react-native-elements';



type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;
var slideJson = require('../Json/slidebar.json').data;

var slideImageArr = [require("../image/slide/home.png"),
                     require('../image/slide/data.png'),
                     require('../image/slide/news.png'),
                    //  require('../image/slide/s-trade.png'),
                     require('../image/slide/products.png'),
                    //  require('../image/slide/regulations.png'),
                    //  require('../image/slide/aboutus.png'),
                    //  require('../image/slide/setting.png'),
                ];

export default class SlideBar extends Component<Props> {

    constructor(props) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        super(props);
        this.state =
            {
                dataSource: ds.cloneWithRows(slideJson),
            };
    }
    render() {
        return (
            <View style={{
                backgroundColor: "#2C2C3B",
                width: SCREENWIDTH * 0.8,
                height: SCREENHEIGHT,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative"
            }}>
                <Text style={{
                    color: "#ffffff",
                    fontSize: 24,
                    position: "absolute",
                    top: IPHONEX ? (32 + 24) : 32,
                    left: 20,
                }
                }>
                    Dashboard
                </Text>

                <ListView
                    style={{
                        top: IPHONEX ? 80 + 24 : 80,
                        position: "absolute",
                        width: width * 0.8,
                        // height:300,
                        bottom: 20,
                        //    backgroundColor:"#456722"
                    }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    scrollEnabled={true}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }
    onPress(rowID){
        if(this.props.cellClick)
        this.props.cellClick(rowID);
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.onPress(rowID);
                }}
            >
                <View style={styles.cellStyle}>
                    <Text style={styles.cellTextStyle}>{rowData.title}</Text>
                    <Image
                        source={slideImageArr[rowID]}
                        style={styles.imgeStyle}
                    ></Image>
                </View>
                <View style={styles.lineStyle}></View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    cellStyle: {
        height: 60,
        width: width * 0.8,
        position: "relative",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        flexDirection: "row"
        // backgroundColor: "#ffff00"
    },
    cellTextStyle: {
        color: "#ffffff",
        position: "absolute",
        left: 59,
        height:59,
        lineHeight:59,
        fontSize: 16,

    },
    lineStyle: {
        position: "absolute",
        bottom: 0,
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#191A22"
    },
    imgeStyle:{
        position: "absolute", 
        left: 20,
        width:24,
        height:24,
        top: 18,
        // bottom:0
    }

})


