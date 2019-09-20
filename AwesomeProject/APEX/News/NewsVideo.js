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
    TouchableHighlight,
    Button,
    TouchableOpacity,
    StatusBar,
} from 'react-native';



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
var _data = [];
import { Tool } from "../Tool/tool"
import APEXWebView from "../Home/APEXWebView"


function getAutoWidth(size) {
    return size * width / 375;
}

export default class NewsVideo extends Component<Props> {

    constructor(props) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        super(props);
        _data.push
        this.state =
            {
                switchstate: true,
                dataSource: ds.cloneWithRows(_data),
                // base_url: "http://mapp.asiapacificex.com/mobile/videos/query?pageNum=1&pageSize=5",
                "baseIP": "http://mapp.asiapacificex.com",
                base_url: "http://129.226.152.177:8060/mobile/videos/query?pageNum=1&pageSize=5",



            };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={{
                        flex: 1,
                    }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />

            </View>
        );
    }

    componentWillMount() {
        this.loadData();
        // AlertIOS.alert("componentWillMount 来了1")
    }

    onNewsClick(rowData) {
        if (this.props.newsClickCallBack) {
            this.props.newsClickCallBack(this.state.baseIP + rowData.url);
        }
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {

        console.log(rowData);
        return (
            <TouchableOpacity
                onPress={() => {
                    this.onNewsClick(rowData);
                }}
            // style={{width:width,height:200}}
            >
                <View style={styles.cellStyle}>
                    <Image source={{ uri: this.state.baseIP + rowData.photo }} style={styles.videoStyle}></Image>
                    {/* <Text style={styles.cellTextStyle} numberOfLines={2}>{"        "+rowData.title}</Text>
                    <Text style={styles.timeStyle}>{this.functiontimetrans(rowData.createDate)}</Text>
                    <Text style={styles.browseStyle}>{rowData.browseNum}浏览</Text> */}
                </View>
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
                // for (const index in staticData) {
                //     jsonData.push(staticData[index])
                // }
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
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#21212B",
        width: width,
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    cellStyle: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        height: getAutoWidth(160),
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
    timeStyle: {
        position: "absolute",
        top: 76,
        left: 15,
        fontSize: 11,
        color: "#7E829D",
        fontSize: 11,
        overflow: "scroll"
    },
    browseStyle: {
        position: "absolute",
        top: 76,
        left: getAutoWidth(135),
        fontSize: 11,
        color: "#7E829D",
        fontSize: 11,
    },
    imge1Stye: {
        width: width - 30,
        height: 150,
        left: 15,
        right: 15,
        top: 10,
        borderRadius: 8,
    },
    videoStyle: {
        position:"absolute",
        top: 7,
        bottom:7,
        left: 15,
        right: 15,
        borderRadius:8,
    }

})


