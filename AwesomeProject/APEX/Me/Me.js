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
    Switch,
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'


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
var _data = ['1', '2'];
function getAutoWidth(size) {
    return size * width / 375;
}

export default class Me extends Component<Props> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state =
            {
                dataSource: ds.cloneWithRows(_data),
                switchState: false,
            };
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
                    style={{
                        marginTop: IPHONEX ? 88 : 64,
                        width: width,
                        height: IPHONEX ? (height - 88 - 34 - 49) : (height - 64 - 49)
                    }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }

    click(value) {
        // console.log("switchState = " + this.state.switchState);
        var a = Math.ceil(Math.random() * 100);
        var b = Math.ceil(Math.random() * 100);
        _data = [a, b];
        this.setState({
            // switchState: !this.state.switchState,
            switchState: value,

            dataSource: this.state.dataSource.cloneWithRows(_data),
        })
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return (
                <View style={styles.oneViewStyle}>
                    <Text style={styles.usernameStyle}>
                        Username
                    </Text>

                    <Text style={styles.userIDStyle}>UserID12340001 </Text>
                    <Text style={styles.accountTextStyle}>Account </Text>
                    <Text style={styles.favoritesTextStyle}>Favorites </Text>
                    <Text style={styles.inviteTextStyle}>Invite Friends </Text>
                    <Text style={styles.userIDStyle}>UserID12340001 </Text>
                    <Text style={styles.favoritesDetailTextStyle} numberOfLines={2}>Favorites&readinghistory </Text>
                    <Text style={styles.InviteDetailTextStyle} numberOfLines={2}>Invite friends to share</Text>


                    <Image style={styles.headImageStyle} source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569251063530&di=2252a0628a041f7f964062fad0afdccf&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201404%2F22%2F20140422142715_8GtUk.thumb.600_0.jpeg" }}></Image>
                    <Image source={require("../image/Me/me-account.png")} style={styles.accountStyle}></Image>
                    <Image source={require("../image/Me/Favorites.png")} style={styles.favoritesstyle}></Image>
                    <Image source={require("../image/Me/Invite.png")} style={styles.inviteStyle}></Image>

                    <Image source={require("../image/Me/横幅.png")} style={styles.hengImageStyle}></Image>

                </View>);
        } else if (rowID == 1) {
            return (
                <View style={styles.twoViewStyle}>
                    <Text style={styles.nightStyle}>Night mode</Text>
                    <Text style={styles.settingStyle}>Setting</Text>
                    <Text style={styles.feedbackStyle}>Feedback</Text>


                    <Switch
                        //  如果为true则禁用此组件的交互
                        // disabled={false}
                        // //   关闭状态时的边框颜色(iOS)或背景颜色(Android)。
                        // tintColor={'yellow'}
                        // //   开启状态时的背景颜色
                        // onTintColor={'blue'}
                        // // 背景色
                        // ios_backgroundColor={"purple"}
                        // // 表示此开关是否打开。默认为false（关闭状态）
                        value={this.state.switchState}
                        // //   开关上圆形按钮的背景颜色
                        // thumbColor={"red"}

                        onValueChange={(value) => this.click(value)}

                        style={styles.switchStyle}
                    />
                    <Image source={require("../image/Me/DetailsCopy.png")} style={styles.settingImageStyle}></Image>
                    <Image source={require("../image/Me/DetailsCopy.png")} style={styles.feedImageStyle}></Image>

                </View>);
        }

    }


    onPress() {
        if (this.props.callBack) {
            this.props.callBack();
        }
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
        backgroundColor: "#282834",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start"

    },
    touchStyle: {
        top: IPHONEX ? 58 : 34,
        left: 0,
        width: 54,
        height: 30,
        // backgroundColor: "#ffff00"
    },
    imgeStyle: {
        // bottom:8,
        left: 15,
        width: 24,
        height: 24,
    },
    homeStyle: {
        top: IPHONEX ? 58 : 34,
        color: "#ffffff",
        fontSize: 20,

    },
    oneViewStyle: {
        width: width,
        height: 315,
        backgroundColor: "#21212b",
        // backgroundColor: "#ffff98",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
    },
    usernameStyle: {
        color: "#ffffff",
        fontSize: 18,
        position: "absolute",
        top: 25,
        left: 15
    },
    userIDStyle: {
        color: "#7E829D",
        fontSize: 12,
        position: "absolute",
        top: 52,
        left: 15
    },
    headImageStyle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        position: "absolute",
        top: 15,
        right: 15

    },
    accountStyle: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 114,
        left: 16
    },
    favoritesstyle: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 169,
        left: 16
    },
    inviteStyle: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 169,
        left: getAutoWidth(214)
    },
    accountTextStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        top: 116,
        left: getAutoWidth(51),
    },
    favoritesTextStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        top: 169,
        left: getAutoWidth(51),
    },
    inviteTextStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        top: 169,
        left: getAutoWidth(249),
    },
    favoritesDetailTextStyle: {
        color: "#7E829D",
        fontSize: 12,
        position: "absolute",
        top: 194,
        left: getAutoWidth(51),
        width: 104,
        height: 24,
        lineHeight: 11,
    },
    InviteDetailTextStyle: {
        color: "#7E829D",
        fontSize: 12,
        position: "absolute",
        top: 194,
        left: getAutoWidth(249),
        width: 90,
        height: 24,
        lineHeight: 11,
    },
    hengImageStyle: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 243,
        height: 72,
        resizeMode: "cover",
    },
    twoViewStyle: {
        width: width,
        height: 315,
        backgroundColor: "#21212b",
        // backgroundColor: "#ffff98",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
    },

    nightStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        fontWeight: "bold",
        top: 25,
        left: 15,
    },
    settingStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        fontWeight: "bold",
        top: 77,
        left: 15,
    },
    feedbackStyle: {
        color: "#ffffff",
        fontSize: 14,
        position: "absolute",
        fontWeight: "bold",
        top: 131,
        left: 15,
    },
    switchStyle: {
        position: "absolute",
        top: 15,
        right: 15,

    },
    settingImageStyle: {
        position: "absolute",
        top: 81,
        right: 15,
        width: 12,
        height: 12
    },
    feedImageStyle: {
        position: "absolute",
        top: 135,
        right: 15,
        width: 12,
        height: 12
    }

})



