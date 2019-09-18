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
    Image,
    TouchableHighlight,
    Button,
    ListView,
    TouchableOpacity
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
// type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;

var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;
import ScrollAdvert from './ScrollAdvert'
import Market from "./market"
import APEXWebView from "./APEXWebView"

var data = ['轮播', 'market'];
var newsData = require('../Json/news.json')
function getAutoWidth(size) {
    return size * width / 375;
}
export default class Home extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        for (const item in newsData.data) {
            console.log(item);
            data.push(newsData.data[item])
        }

        this.state =
            {
                switchstate: true,
                obj: null,
                dataSource: ds.cloneWithRows(data),

            };
    }
    onPress() {
        if (this.props.callBack) {
            this.props.callBack();
        }
    }
    onNewsClick(rowData) {
        this.props.nav.push({
            component: APEXWebView,
        });
    }



    renderRow(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return (
                <View style={{
                    width: width,
                    height: 150,
                    backgroundColor: "#21212b"
                }}>
                    <ScrollAdvert sryle={{
                        height: 150, top: 0,
                        left: 15,
                        width: width - 30,
                    }}
                    />

                </View>);

        } else if (rowID == 1) {
            return (
                <Market />
            )
        }


        return (
            <TouchableOpacity
                onPress={() => {
                    this.onNewsClick(rowData);
                }}
            // style={{width:width,height:200}}
            >
                <View style={styles.cellStyle}>
                    <Text style={styles.cellTextStyle}>{rowData.title}</Text>
                    <Text style={styles.timeStyle}>{rowData.time}</Text>
                    <Text style={styles.browseStyle}>{rowData.browse}浏览</Text>

                </View>
                <View style={styles.lineStyle}></View>
            </TouchableOpacity >
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topStyle}>
                    <TouchableHighlight style={styles.touchStyle}
                        onPress={() => this.onPress()}
                    >
                        <Image source={{ uri: "menu" }} style={styles.imgeStyle}>
                        </Image>
                    </TouchableHighlight>
                    <Text style={styles.homeStyle}>
                        {this.props.title}
                    </Text>
                    <TouchableHighlight style={styles.touchStyle}
                        onPress={() => this.onPress()}
                    >
                        <Image source={{ uri: "Message" }} style={styles.imgeStyle}>
                        </Image>
                    </TouchableHighlight>
                </View>
                <ListView
                    style={{ marginTop: 88, width: width, height: 300 }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />


            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#21212b",
        width: width,
        height: height - 49 - 34,
        // flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    topStyle: {
        // top:0,
        position: "absolute",
        width: width,
        height: IPHONEX ? 88 : 64,
        backgroundColor: "#21212b",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start"

    },
    imgeStyle: {
        // bottom:8,
        left: 15,
        width: 24,
        height: 24,
    },
    touchStyle: {
        top: IPHONEX ? 58 : 34,
        left: 0,
        width: 54,
        height: 30,
        // backgroundColor: "#ffff00"
    },
    homeStyle: {
        top: IPHONEX ? 58 : 34,
        color: "#ffffff",
        fontSize: 20,

    },
    cellStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        height: getAutoWidth(116),
        width: width,

    },
    cellTextStyle: {
        position: "absolute",
        top: 19,
        left: 15,
        right: 15,
        height: 48,
        // lineHeight: 68,
        color: "#ffffff",
        textAlign: "left",
        lineHeight: 24,
    },
    lineStyle: {
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 20,
        height: 1,
        backgroundColor: "#191A22"
    },
    timeStyle: {
        position: "absolute",
        top: 76,
        left: 15,
        fontSize: 11,
        color: "#7E829D",
        fontSize: 11,
    },
    browseStyle: {
        position: "absolute",
        top: 76,
        left: getAutoWidth(135),
        fontSize: 11,
        color: "#7E829D",
        fontSize: 11,
    },
})




