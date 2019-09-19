/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  AppRegistry,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import Base from './BaseOne'
import APEXEntrance from "./APEX/APEXEntrance";
import CHOUTI from './APEX/chouti';

type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var Heros = ['APEX1', '基础组件', '抽屉/侧边栏'];


export default class Text1 extends Component<Props> {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(Heros),
    };
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPress(rowData);
        }}
      >
        <View style={styles.cellStyle}>
          <Text style={styles.cellTextStyle}>{rowData}</Text>
        </View>
        <View style={styles.lineStyle}></View>
      </TouchableOpacity>
    );
  }

  onPress(str) {
    switch (str) {
      case Heros[0]:
        this.props.nav.push({
          component: APEXEntrance,
        });
        break;
      case Heros[1]:
          this.props.nav.push({
            component: Base,
          });
        break;
        case Heros[2]:
          this.props.nav.push({
            component:CHOUTI
          })
      default:
        break;
    }
  }

  render() {
    return (
      <View style={{with: SCREENWIDTH, height: SCREENHEIGHT}}>
        <View style={styles.topViewStyle}>
          <Text style={styles.titleStyle}>RN 学习</Text>
        </View>
        <ListView
          style={{marginTop: 0}}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          scrollEnabled={false}
          scrollEnabled = {false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cellStyle: {
    width: SCREENWIDTH,
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    width: SCREENWIDTH,
    height: 1,
    backgroundColor: '#111111',
  },
  cellTextStyle: {
    top: 0,
  },
  topViewStyle: {
    width: SCREENWIDTH,
    height: 88,
    backgroundColor: '#21212b',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    top: 24,
    color: '#ffffff',
    fontSize: 28,
  },
});
