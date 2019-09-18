

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ListView,
  Image
} from 'react-native';
import Drawer from 'react-native-drawer';
var Arr = ['我的账户', '转账汇款', '投资理财', '余额理财', '工商e支付', '手机充值', 'e缴费', '信用卡', '注册账户转账', '贷款', '融e购', '融e联', 'Apple Pay'];
var ImageArr = [require('./image/1.jpeg'), require('./image/2.jpeg'), require('./image/3.jpeg'), require('./image/4.jpeg'), require('./image/5.jpeg')];
const { width, height } = Dimensions.get('window');

var isIPhoneX = (width == 375) && (height == 812);
// iPhone XS Max
var isIPhoneXSMax = (width == 414) && (height == 896);
// iPhone XR
var isIPhoneXR = (width == 414) && (height == 896);
//
var IPHONEX = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

export default class MyAnimated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openType: false
    };
  }
  //接收子组件传来的数据改变openType状态，刷新UI
  LeftClicked(openType) {
    this.setState({
      openType: openType
    });
  }
  //侧拉的实现方式
  render() {
    return (
      <View style={styles.container}>
        <Drawer type='overlay'
          side='left'
          content={<LeftVC />} //左侧拉的页面
          tapToClose={true}
          panOpenMask={0.2}
          panDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={0}
          open={this.state.openType}
          style={drawerStyles}
          tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}>
          <Main LeftClicked={this.LeftClicked.bind(this)} />
        </Drawer>
      </View>
    );
  }
}
// 左边侧拉栏代码实现
class LeftVC extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={{ width: width - 100, height: 64, backgroundColor: '#3893C9', alignItems: 'center' }}></View>
        <View style={{ width: width - 100, backgroundColor: 'white', flex: 1 }}>
          <View style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: 10
          }}><Text>我的钱包</Text></View>
          <View style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: 10
          }}><Text>我的卡卷</Text></View>
        </View>
      </View>
    );
  }
}
// 首页代码列表
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(Arr),
    };
  }
  //cell列表
  cellClicked(data) {
    return (
      <View style={{ height: 50, justifyContent: 'center', borderWidth: 1 }}>
        <Text>{data}</Text>
      </View>
    );
  }
  //滚动视图放在SectionHeader
  renderSectionHeader() {
    return (
      <View style={{ height: 120 }}>
        <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width * 5, height: 120 }}
          horizontal={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={true}
          pagingEnabled={false}
          bounces={true}>

          {this.renderImageView()}
        </ScrollView>
      </View>
    );
  }
  // 点击图片弹出点击的图片个数
  alertClicked(num) {
    alert(num);
  }
  // for循环输出多个图片
  renderImageView() {
    var allChild = [];
    for (var i = 0; i < 5; i++) {
      allChild.push(
        <TouchableOpacity key={i} onPress={this.alertClicked.bind(this, i)}>
          <Image
            key={i}
            style={{ width: Dimensions.get('window').width, height: 120 }}
            source={ImageArr[i]}
          //  resizeMode="cover"
          />
        </TouchableOpacity>
      )
    }
    return allChild;
  }
  //侧拉方法传入首页侧拉刷新UI
  LeftClicked() {
    this.props.LeftClicked(true);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ height: IPHONEX ? 88 : 64, backgroundColor: '#3893C9', flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.LeftClicked() }}>
            <Text style={{ marginTop: IPHONEX ? 54 : 30, fontSize: 20, color: 'white' }}>菜单</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ marginTop: IPHONEX ? 54 : 30, fontSize: 20, color: 'white' }}>首页</Text></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <ListView style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={this.cellClicked.bind(this)}
          renderHeader={this.renderSectionHeader.bind(this)} //表头
        />
      </View>
    );
  }
}
const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 3
  },
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('MyAnimated', () => MyAnimated);


