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
    Button,
} from 'react-native';



export default class HKCellView extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>
                    Cell详情页!!!
                </Text>

                <Button
            onPress={()=>this.click()}
            title={"返回"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />


            </View>
        );
    }

    click(){
        this.props.navitator.pop();
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
