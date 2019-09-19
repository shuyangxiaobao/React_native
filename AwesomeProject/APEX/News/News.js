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
    StatusBar,
    TouchableHighlight,
    Image,

} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';


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

import Home from "../Home/Home"
import NewsTabbar from "./newsTabbar"

export default class NewsPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state =
            {
                tabNames: ['News', "Announcement", "Videos", "Research"],
                normalIcons: ["home", "data", "news", "products"],
                selectIcons: ["home-Click", "data-Click", "news-Click", "products-Click"],
            };
    }

    //侧拉方法传入首页侧拉刷新UI
    LeftClicked() {
        this.props.LeftClicked(true);
    }


    render() {
        let tabNames = this.state.tabNames;
        let normalIcons = this.state.normalIcons;
        let selectIcons = this.state.selectIcons;
        var obj = this;
        return (
            <View style={styles.container}>


                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"/*状态栏字体颜色*/
                />
                <View style={styles.topStyle}>
                    <TouchableHighlight style={styles.touchStyle}
                        onPress={() => {
                            if (this.props.callBack) {
                                this.props.callBack();
                            }
                        }}
                    >
                        <Image source={{ uri: "menu" }} style={styles.imgeStyle}>
                        </Image>
                    </TouchableHighlight>
                    <Text style={styles.homeStyle}>
                        {this.props.title}
                    </Text>
                    <TouchableHighlight style={styles.touchStyle}
                        onPress={() => {
                            if (this.props.callBack) {
                                this.props.callBack();
                            }
                        }}
                    >
                        <Image source={{ uri: "Message" }} style={styles.imgeStyle}>
                        </Image>
                    </TouchableHighlight>
                </View>
                <ScrollableTabView
                    style={styles.ScrollableTabViewStyle}
                    renderTabBar={() => <NewsTabbar
                        // ScrollableTabBar   DefaultTabBar  APEXTabbar

                        // DefaultTabBar表示Tab.item会平分水平方向上的空间，而ScrollableTabBar表示所有的tabBar.item的长度将会超过屏幕宽度，但是当滚动屏幕之时可以显示出来。
                        tabNames={tabNames}
                        tabIconNames={normalIcons}
                        tabIconSelectedNames={selectIcons}
                    />}
                    // tabbar 位置  bottom  top
                    // top(放在界面上方)、bottom(放在界面底部)、overlayTop(有悬浮效果在上方)、overlayBottom(有悬浮效果在下方)
                    tabBarPosition="top"
                    //切换动画效果
                    scrollWithoutAnimation={true}
                    //常用属性

                    // :切换界面的时候会调用该方法，
                    onChangeTab={
                        (obj) => {
                            console.log('切换到了' + obj.i + '个');
                            // alert(obj.i.toString());
                            if (this.props.selectBack) {
                                this.props.selectBack(obj.i);
                            }
                        }
                    }
                    // 初始化时被选中的下标，默认为0
                    page={this.props.page}
                    initialPage={0}




                    // 视图滑动时调用
                    onScroll={
                        //Float
                        (posit) => {
                            console.log('监听到滚动' + posit);
                        }
                    }
                    //锁住滚动
                    locked={false}
                    scrollWithoutAnimation={true}


                    // tabBarBackgroundColor:整个tabBar的背景颜色。
                    tabBarBackgroundColor={"#21212B"}

                    // tabBarActiveTextColor/tabBarInactiveTextColor: 选中/未选中的tabBar的文字颜色
                    tabBarActiveTextColor={"#FFFFFF"}  //选中tabBar的文字颜色
                    tabBarInactiveTextColor={"#7E829D"}  //未选中tabBar的文字颜色
                    // tabBarPosition={"top"}
                    // 提供一个object对象的参数，用于设置文字的样式，如字体字号
                    tabBarTextStyle={
                        {
                            fontSize: 15,
                            // height: 19,
                            // overflow: "hidden"

                            // display: "none"
                        }
                    }
                    tabBarStyle={{ height: this.state.tabBarHeight, overflow: 'hidden' }}
                    sceneStyle={{ paddingBottom: this.state.tabBarHeight }}
                    tabBarUnderlineStyle={{
                        height:2,
                        backgroundColor:"#387CFE"
                    }}
                    
                >
                    <Navigator
                        tabLabel="Home"
                        initialRoute={{
                            component: Home,
                            gesturesEnabled: false,
                            params: {
                                title: 'Home',
                                callBack: function () {
                                    // obj.props.nav.pop();
                                    obj.LeftClicked();
                                },  //闭包 回掉 传递函数 block
                                newsClickCallBack: function () {
                                    alert(obj.toString());
                                    // obj.props.nav.push({
                                    //   component: APEXEntrance,
                                    // });
                                    // obj.props.nav.push({
                                    //   component: APEXWebView,
                                    //   params: {
                                    //     url: this.state.baseIP + rowData.htmlFive + "?id=" + rowData.id,
                                    //   }
                                    // });
                                }
                            }
                        }}
                        renderScene={(route, navigator) =>
                            <route.component nav={navigator} {...route.params} />
                        }
                    />
                    <Navigator
                        tabLabel="Data"
                        initialRoute={{
                            component: Home,
                            params: {
                                title: 'Home',
                                callBack: function () {
                                    // obj.props.nav.pop();
                                    obj.LeftClicked();
                                },  //闭包 回掉 传递函数 block
                                newsClickCallBack: function () {
                                    alert(obj.toString());
                                    // obj.props.nav.push({
                                    //   component: APEXEntrance,
                                    // });
                                    // obj.props.nav.push({
                                    //   component: APEXWebView,
                                    //   params: {
                                    //     url: this.state.baseIP + rowData.htmlFive + "?id=" + rowData.id,
                                    //   }
                                    // });
                                }
                            }
                        }}
                        renderScene={(route, navigator) =>
                            <route.component nav={navigator} {...route.params} />
                        }
                    />
                    <Navigator
                        tabLabel="News"
                        initialRoute={{
                            component: Home,
                            params: {
                                title: 'News',
                                callBack: function () {
                                    // obj.props.nav.pop();
                                    obj.LeftClicked();
                                },  //闭包 回掉 传递函数 block
                                newsClickCallBack: function () {
                                    alert(obj.toString());
                                    // obj.props.nav.push({
                                    //   component: APEXEntrance,
                                    // });
                                    // obj.props.nav.push({
                                    //   component: APEXWebView,
                                    //   params: {
                                    //     url: this.state.baseIP + rowData.htmlFive + "?id=" + rowData.id,
                                    //   }
                                    // });
                                }
                            }
                        }}
                        renderScene={(route, navigator) =>
                            <route.component nav={navigator} {...route.params} />
                        }
                    />
                    <Navigator
                        tabLabel="Productions"
                        initialRoute={{
                            component: Home,
                            params: {
                                title: 'Home',
                                callBack: function () {
                                    // obj.props.nav.pop();
                                    obj.LeftClicked();
                                },  //闭包 回掉 传递函数 block
                                newsClickCallBack: function () {
                                    alert(obj.toString());
                                    // obj.props.nav.push({
                                    //   component: APEXEntrance,
                                    // });
                                    // obj.props.nav.push({
                                    //   component: APEXWebView,
                                    //   params: {
                                    //     url: this.state.baseIP + rowData.htmlFive + "?id=" + rowData.id,
                                    //   }
                                    // });
                                }
                            }
                        }}
                        renderScene={(route, navigator) =>
                            <route.component nav={navigator} {...route.params} />
                        }
                    />


                </ScrollableTabView>

            </View>



        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        width: width,
        height: SCREENHEIGHT,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "relative",
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
    ScrollableTabViewStyle: {
        position: "absolute",
        top: IPHONEX ? 88 : 64,
        width: width,
        bottom: IPHONEX ? 34 + 49 : 49,
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

})







