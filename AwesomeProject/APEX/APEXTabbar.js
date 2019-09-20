/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

export default class APEXTabbar extends Component {
    render() {
        return (
            <View style={styles.tabsStyle}>
                {/*返回一个一个的Item*/}
                {this.props.tabs.map((tab, i) => this.renderItem(tab, i))}
            </View>
        );
    }

    renderItem(tab, i) {
        //判断i是否是当前选中的tab!!
        const color = this.props.activeTab == i ? "#387CFE" : "#CDD5DF";
        const CurrentImags = this.props.activeTab == i ? this.props.tabIconSelectedNames : this.props.tabIconNames;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.goToPage(i)}
                key={i}
                style={styles.tab}
            >

                <View style={styles.tabItem}>
                    <Image //图标
                        //拿到当前设备的缩放标准
                        source={{ uri: CurrentImags[i], scale: PixelRatio.get() }}
                        style={[{ width: 20, height: 20 }, styles.imageStyle]}

                    />
                    {/*文字*/}
                    <Text style={{ color: color, top: 4, fontSize: 11, }}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabsStyle: {
        flexDirection: 'row',
        height: 49 + (IPHONEX ? 34 : 0),
        backgroundColor: "#282834"
    },
    tabItem: {
        alignItems: 'center',
        top: 8
    },
    tab: {
        flex: 1
    },
    imageStyle: {
        // backgroundColor:"red",
    }
});

