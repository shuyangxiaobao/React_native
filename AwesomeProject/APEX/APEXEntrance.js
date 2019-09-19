
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
  Image,
  TouchableHighlight
} from 'react-native';
import {
  Navigator,
} from "react-native-deprecated-custom-components";
import Drawer from 'react-native-drawer';
//引入三方框架
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
//自定义TabBar
import APEXTabbar from './APEXTabbar'
import Home from "./Home/Home";
import News from "./News/News"
import { APEXWebView } from "./Home/APEXWebView";
import SlideBar from "./Home/slidebar";

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
var obj = this;

export default class MyAnimated extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openType: false,
      page: 0
    };
  }
  //接收子组件传来的数据改变openType状态，刷新UI
  LeftClicked(openType) {
    this.setState({
      openType: openType
    });
  }
  // slideClick(index) {
  //   alert(index + '000');

  //   this.setState({
  //     openType: false,
  //     page:2,
  //   });
  //   // alert(index);
  // }

  slideClick = (index) => {
    this.setState({
      openType: false,
      page: index,
    });
  }

  //侧拉的实现方式
  render() {
    return (
      <View style={styles.container}>
        <Drawer type='overlay'
          side='left'
          content={<SlideBar
            // 函数回调的三种方式
            // 1.
            // cellClick={() => {
            //   this.setState({
            //     openType: false
            //   });
            // }} />} //左侧拉的页面  //闭包 回掉 传递函数 block

            // 2.
            // cellClick={this.slideClick} />}
            // 3.
            cellClick={this.slideClick.bind(this)} />}

          tapToClose={true}
          acceptTap={true}
          panOpenMask={0.2}
          panDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={0}
          open={this.state.openType}
          style={drawerStyles}
          tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}>
          <Main LeftClicked={this.LeftClicked.bind(this)}
            page={this.state.page}
            selectBack={(index) => {
              this.setState({
                page: index,
                openType: false,
              })
            }}
          />
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
        <View style={
          {
            width: width - 100,
            height: 64,
            backgroundColor: '#3893C9',
            alignItems: 'center'
          }}></View>
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

  //侧拉方法传入首页侧拉刷新UI
  LeftClicked() {
    this.props.LeftClicked(true);
  }
  constructor(props) {
    super(props);
    this.state = {
      tabNames: ['Home', "Data", "News", "Products"],
      normalIcons: ["home", "data", "news", "products"],
      selectIcons: ["home-Click", "data-Click", "news-Click", "products-Click"],
    }
  }
  onPress() {
    // this.props.nav.pop();
    alert('pop');
  }

  render() {
    let tabNames = this.state.tabNames;
    let normalIcons = this.state.normalIcons;
    let selectIcons = this.state.selectIcons;
    var obj = this;
    return (
      <View style={{ width: width, height: height }}>
        <ScrollableTabView
          style={{ width: width, height: height }}
          renderTabBar={() => <APEXTabbar
            // ScrollableTabBar   DefaultTabBar  APEXTabbar

            // DefaultTabBar表示Tab.item会平分水平方向上的空间，而ScrollableTabBar表示所有的tabBar.item的长度将会超过屏幕宽度，但是当滚动屏幕之时可以显示出来。
            tabNames={tabNames}
            tabIconNames={normalIcons}
            tabIconSelectedNames={selectIcons}
          />}
          // tabbar 位置  bottom  top
          // top(放在界面上方)、bottom(放在界面底部)、overlayTop(有悬浮效果在上方)、overlayBottom(有悬浮效果在下方)
          tabBarPosition="bottom"
          //切换动画效果
          scrollWithoutAnimation={true}
          //常用属性

          // :切换界面的时候会调用该方法，
          onChangeTab={
            (obj) => {
              console.log('切换到了' + obj.i + '个');
              // alert(obj.i.toString());
              if(this.props.selectBack){
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
          // tabBarBackgroundColor={"red"}

          // tabBarActiveTextColor/tabBarInactiveTextColor: 选中/未选中的tabBar的文字颜色
          tabBarActiveTextColor={"387CFE"}  //选中tabBar的文字颜色
          tabBarInactiveTextColor={"white"}  //未选中tabBar的文字颜色
          // tabBarPosition={"top"}
          // 提供一个object对象的参数，用于设置文字的样式，如字体字号
          tabBarTextStyle={
            {
              fontSize: 15,
              height: 19,
              overflow: "hidden"
              // display: "none"
            }
          }
          tabBarStyle={{ height: this.state.tabBarHeight, overflow: 'hidden' }}
          sceneStyle={{ paddingBottom: this.state.tabBarHeight }}
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
              component: News,
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