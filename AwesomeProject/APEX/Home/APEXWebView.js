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
    WebView,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    StatusBar,
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
export default class APEXWebView extends Component<Props> {

    constructor(props) {
        super(props);
        this.state =
            {
                switchstate: true
            };
    }

    onPressBack() {
        this.props.nav.pop();
    }

    render() {
        return (


            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />

                <View style={styles.topStyle}>
                    <TouchableOpacity style={styles.touchStyle}
                        onPress={() => this.onPressBack()}
                    >
                        <Image source={require('../image/back.png')} style={styles.imgeStyle}>
                        </Image>
                    </TouchableOpacity>
                    {/* <Text style={styles.homeStyle}>
                        {this.props.title}
                    </Text> */}
                    <TouchableHighlight style={styles.touchStyle}
                    // onPress={() => this.onPress()}
                    >
                        <Image source={{ uri: "Message" }} style={styles.imgeStyle}>
                        </Image>
                    </TouchableHighlight>
                </View>
                <WebView
                    style={styles.webviewStyle}
                    originWhitelist={['*']}
                    // source={{ html: '<h1>Hello world</h1>' }}
                    source={{ uri: this.props.url }}
                    onLoadStart={this._onLoadStart}
                    onLoadEnd={this._onLoadEnd}
                    allowsInlineMediaPlayback={true}
                />
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "relative"
    },
    topStyle: {
        top: 0,
        position: "absolute",
        width: width,
        height: IPHONEX ? 88 : 64,
        backgroundColor: "#21212b",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start"

    },
    webviewStyle: {
        width: width,
        height: IPHONEX ? height - 88-34-49 : height-64-49,
        position: "absolute",
        top: IPHONEX ? 88 : 64,
        left:0,
        backgroundColor:"#21212b"
    },
    imgeStyle: {
        position: "absolute",
        backgroundColor:"#ffff90",
        bottom: 6,
        left: 0,
        width: 60,
        height: 30,
        resizeMode: "contain" //contain,cover,repeat,stretch

    }

})


