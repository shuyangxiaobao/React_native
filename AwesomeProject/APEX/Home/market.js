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
    Image,
    TouchableOpacity
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;
var marketData = require("../Json/market.json");
function getAutoWidth(size) {
    return size * width / 375;
}
function sourceImage(str) {
    return '../image/Collection-Click.png';
    // return require(({str} == '1') ? '../image/Collection-Click.png' : '../image/Collection.png');
    // return '../image/Collection-Click.png';
}



export default class Text1 extends Component<Props> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state =
            {
                switchstate: true,
                dataSource: ds.cloneWithRows(marketData.data),
                image: "../image/2.jpeg"
            };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: width, height: 50, backgroundColor: "#21212b" }}>
                    <Text style={{ color: "#ffffff", fontSize: 16, top: 20, left: 15, fontWeight: 800 }}>
                        Market Data
                </Text>


                </View>

                <ListView
                    // style={{ marginTop: 88, width: width, height: height - 88 }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    scrollEnabled={false}
                />

            </View>
        );
    }

    cellClick(sectionID, rowID) {
        alert(rowID);
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        var str2 = "../image/Collection.png";

        // // str2 = (rowData.collectStatus === "1") ? "../image/Collection-Click.png" : "../image/Collection.png";
        // var str = str2;
        // // alert(str2);
        // // rowData.collectStatus ? "../image/Collection-Click.png" : "../image/Collection-Click.png
        // if(rowData.collectStatus == '1'){
        //     rowData.collectStatus = "../image/Collection-Click.png"
        //     // str2 =  "../image/Collection-Click.png"
        // } else {
        //     rowData.collectStatus = "../image/Collection.png"

        // }
        // str2 =  "../image/Collection.png";
        let arr = [require("../image/Collection-Click.png"), require("../image/Collection.png")];
        var tt = require("../image/Collection-Click.png");
        var index = 0;
        if (rowData.collectStatus === '1') {
            index = 0;
            tt = require("../image/Collection-Click.png");
            var index = 0;
        } else {
            index = 1;
            tt = require("../image/Collection.png");
        }
        return (
            <TouchableOpacity
                onPress={() => this.cellClick(sectionID, rowID)}
            >
                <View style={styles.cellStyle}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.instrumentIdStyle}>
                            {rowData.instrumentId}
                        </Text>
                        <Text style={styles.volumeStyle}>
                            Vol:{rowData.volume}
                        </Text>
                        <Text style={styles.openInterestStyle}>
                            OI:{rowData.openInterest}
                        </Text>
                        <Text style={styles.lastPriceStyle}>
                            {rowData.lastPrice}
                        </Text>
                        <View style={styles.upperLowerViewStyle}>
                            <Text style={styles.upperLowerPercentStyle}>
                                {rowData.upperLowerPercent}
                            </Text>
                        </View>
                        <Image
                            // ""===1
                            source={tt}
                            style={styles.imgeStyle}
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 354,
        backgroundColor: "#444444",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    cellStyle: {
        width: width,
        height: 76,
        backgroundColor: "#21212b"
    },
    viewStyle: {
        width: width - 30,
        height: 68,
        top: 4,
        left: 15,
        right: 15,
        backgroundColor: "#282834",
        borderRadius: 8,
        position: "relative"
    },
    instrumentIdStyle: {
        left: 20,
        top: 9,
        color: "#ffffff",
        fontSize: 14
    },
    volumeStyle: {
        left: 20,
        bottom: 9,
        color: "#7E829D",
        fontSize: 12,
        height: 20,
        lineHeight: 20,
        position: "absolute"
    },
    openInterestStyle: {
        left: getAutoWidth(91),
        bottom: 9,
        color: "#7E829D",
        fontSize: 12,
        height: 20,
        lineHeight: 20,
        position: "absolute"
    },
    lastPriceStyle: {
        right: getAutoWidth(68),
        top: 9,
        color: "#ffffff",
        fontSize: 14,
        height: 22,
        lineHeight: 22,
        position: "absolute"
    },


    upperLowerViewStyle: {
        right: getAutoWidth(71),
        top: 33,
        backgroundColor: "#25CC4D",
        height: 26,
        width: 60,
        position: "absolute",
        borderRadius: 4,
    },
    upperLowerPercentStyle: {
        color: "#ffffff",
        fontSize: 14,
        height: 26,
        width: 60,
        lineHeight: 26,
        position: "absolute",
        textAlign: "center",
    },
    imgeStyle: {
        width: 28,
        height: 28,
        top: 20,
        right: 20,
        position: "absolute"
    }
})


