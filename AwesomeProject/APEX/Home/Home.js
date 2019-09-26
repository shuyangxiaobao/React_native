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
    TouchableOpacity,
    StatusBar,
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

var _data = ['轮播', 'market'];
var staticData = ['轮播', 'market'];
// var newsData = require('../Json/news.json')
function getAutoWidth(size) {
    return size * width / 375;
}
export default class Home extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state =
            {
                switchstate: true,
                obj: null,
                dataSource: ds.cloneWithRows(_data),
                base_url: "http://mapp.asiapacificex.com/mobile/data/query?businessType=2&pageNum=1&pageSize=10",
                "baseIP": "http://mapp.asiapacificex.com"
            };
    }
    onPress() {
        if (this.props.callBack) {
            this.props.callBack();
        }
    }
    onNewsClick(rowData) {
        // if (this.props.newsClickCallBack) {
        //     this.props.newsClickCallBack();
        // }
        this.props.nav.push({
            component: APEXWebView,
            params: {
                url: this.state.baseIP + rowData.htmlFive + "?id=" + rowData.id,
            }
        });
    }
    componentWillMount() {
        this.loadData();
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
                    <Text style={styles.cellTextStyle} numberOfLines={2}>{rowData.title}</Text>
                    <Text style={styles.timeStyle}>{this.functiontimetrans(rowData.createDate)}</Text>
                    <Text style={styles.browseStyle}>{rowData.browseNum}浏览</Text>
                </View>
                <View style={styles.lineStyle}></View>
            </TouchableOpacity >
        );
    }

    // 时间戳转化为时间
    functiontimetrans(date) {
        var date = new Date(date);//如果date为13位不需要乘1000

        var Y = date.getFullYear() + '-';

        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';

        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';

        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';

        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

        return Y + M + D + h + m + s;

    }

    //网络请求发送
    loadData() {
        fetch(this.state.base_url).then
            ((response) => response.json())
            .then((responseJson) => {
                //拿到数据
                console.log('😄😄😄😄😄');
                var jsonData = [];
                for (const index in staticData) {
                    jsonData.push(staticData[index])
                }
                for (const index in responseJson.result.result) {
                    jsonData.push(responseJson.result.result[index])
                }

                // jsonData.push(staticData);
                // jsonData.push(responseJson.result.result);
                //更新数据                
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(jsonData)
                })
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"/*状态栏字体颜色*/
                />
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
                    style={{ marginTop: IPHONEX ? 88 : 64, width: width, height: 300 }}
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
        height: height - (IPHONEX ? (49 + 34) : (49)),
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
        height: 50,
        color: "#ffffff",
        textAlign: "left",
        lineHeight: 24,
        overflow:"scroll",
        alignContent:"flex-start"

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




