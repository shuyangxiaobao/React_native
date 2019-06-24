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
    TabBarIOS
} from "react-native"

export default class HKwTabBar extends Component {

    constructor(pros){
        super(pros);
        this.state={
            //默认被选中的Item
            selectedTabBarItem:'home'
        }
    }

    render() {
        return (
<View style={styles.container}>
    <TabBarIOS>

    <TabBarIOS.Item
        systemIcon="history"  // 系统图标(history)
    >
    </TabBarIOS.Item>

    </TabBarIOS>

</View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // // flex: 1,
        // backgroundColor: '#F5FCFF',
        // width:100,
        // height:200,
    },
    commonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabBarIOSStyle:{
        height:300,
        width:300,
    }
});
