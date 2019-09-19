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
  AppRegistry,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Navigator,
} from "react-native-deprecated-custom-components";

var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var Heros = require('./复习/Json/heros.json');
Heros = ['1', '2', '3'];
import FuxiDemo1 from './复习/01复习(Text)';
import FuxiDemo2 from './复习/02复习(Image)';

import FuxiDemo3 from './复习/03复习(Textinput)';
import FuxiDemo4 from './复习/04复习(TouchableOpacity)';
import FuxiDemo5 from './复习/05复习(生命周期)';
import FuxiDemo6 from './复习/06复习(ScrollView)';
import FuxiDemo7 from './复习/07复习(定时器)';
import FuxiDemo8 from './复习/08复习(Switch)';
import FuxiDemo9 from './复习/09复习(ActivityIndicator)';
import FuxiDemo10 from './复习/10复习(Button)';
import FuxiDemo11 from './复习/11复习(DatePickerIOS日期选择)';
import FuxiDemo12 from './复习/12复习(KeyboardAvoidingView防止键盘遮挡)';
import FuxiDemo13 from './复习/13复习(ListView单组)';
import FuxiDemo14 from './复习/14复习(ListtView多组)';
import FuxiDemo16 from './复习/16复习页面跳转/16复习Navigator';

import XinUI1 from './第三方UI组件/(001)React-Native-Elements/001Avatar';

import XinUI2 from './第三方UI组件/(001)React-Native-Elements/002Badge';

import XinUI3 from './第三方UI组件/(001)React-Native-Elements/003Button';

import XinUI4 from './第三方UI组件/(001)React-Native-Elements/004ButtonGroup';
import XinUI5 from './第三方UI组件/(001)React-Native-Elements/005Card';

import RiLi from './第三方UI组件/(002)日历react-native-calendars /001(日历控件)';

import Text1 from './Common/1.Text1';
import Demo2 from './Common/2.Image2';
import Demo3 from './Common/3.TextInput3';
import TouchableOpacity4 from './Common/4.TouchableOpacity4';
import LifeCycle5 from './Common/5.LifeCycle5';
import ScrollView6 from './Common/6.ScrollView6';
import Demo7 from './Common/7.定时器(无限轮播)';
import Demo8 from './Common/8.Switch';
import Demo9 from './Common/9. ActivityIndicator';
import Demo10 from './Common/10.Button';
import Demo11 from './Common/11 DatePickerIOS';
import Demo12 from './Common/12.KeyboardAvoidingView';
import Demo13 from './Common/13.ListView(单组)';
import Demo14 from './Common/14.ListView(多组)';
import Demo15 from './Common/15.TabBarIOS';
import Demo16 from './Common/16.Navigator';
import Demo17 from './Common/17.自定义tabbar/HKMain';
import Demo18 from './Common/18.FlatList';
import Demo19 from './Common/19.ImageBackground';
import Demo20 from './Common/20.MaskedViewIOS';
import Demo21 from './Common/21.ModalView';
import Demo22 from './Common/22.Picker';
import Demo23 from './Common/23.PickerIOS';
import Demo24 from './Common/24.ProgressViewIOS';
import Demo25 from './Common/25.RefreshControl';
import Demo26 from './Common/26.SafeAreaView';
import Demo27 from './Common/27.SectionList';
import Demo28 from './Common/28.SegmentedControlIOS';
import Demo29 from './Common/29.Slider';
import Demo30 from './Common/30.SnapshotViewIOS';
import Demo31 from './Common/31.StatusBar';
import Demo32 from './Common/32.TouchableHighlight';
import Demo33 from './Common/33.TouchableNativeFeedback';
import Demo34 from './Common/34.View';
import Demo35 from './Common/35.VirtualizedList';
import Demo36 from './Common/36.WebView';
import Demo37 from './Common/37.ActionSheetIOS';
import Demo38 from './Common/38.Alert';
import Demo39 from './Common/39.AlertIOS';
import Demo40 from './Common/40.Animated';
import Demo41 from './Common/41.AppState';
import Demo42 from './Common/42.AsyncStorage';
import Demo43 from './Common/43.BackHandler';
import Demo44 from './Common/44.CameraRoll';
import Demo45 from './Common/45.Clipboard';
import Demo46 from './Common/46.Dimensions';
import Demo47 from './Common/47.Geolocation';
import Demo48 from './Common/48.ImagePickerIOS';
import Demo49 from './Common/49.ImageStore';
import Demo50 from './Common/50.InteractionManager';
import Demo51 from './Common/51.Keyboard';
import Demo52 from './Common/52.LayoutAnimation';
import Demo53 from './Common/53.Linking';
import Demo54 from './Common/54.NetInfo';
import Demo55 from './Common/55.PanResponder';
import Demo56 from './Common/56.PixelRatio';
import Demo57 from './Common/57.PushNotificationIOS';
import Demo58 from './Common/58.Settings';
import Demo59 from './Common/59.阴影样式属性';
import Demo60 from './Common/60.Share';
import Demo61 from './Common/61.Vibration(震动)';
import Demo62 from './Common/62.rnJumpToIOS';
import Entrance from './Entrance';
import CHOUTI from './APEX/chouti'
// import Demo63 from "./Common"
// import Demo64 from "./Common"
// import Demo65 from "./Common"
// import Demo66 from "./Common"
// import Demo67 from "./Common"
// import Demo68 from "./Common"

// type
Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    // var ds = new ListView.dataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(Heros),
    };
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity>
        <View style={styles.style1}>
          <Text style={styles.cellTextStyle}>111</Text>
        </View>
      </TouchableOpacity>
    );
  }

  //   render() {
  //     return (
  //       <ListView
  //         style={{marginTop: 64}}
  //         dataSource={this.state.dataSource}
  //         renderRow={this.renderRow.bind(this)}
  //       />
  //     );
  //   }



  render() {
    const NoBackSwipe = {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {
        pop: {},
      }
    };

    // configureScene(route, routeStack){
    //   let configure = Navigator.SceneConfigs.PushFromRight;
    //   switch (route.configure) {
    //     case Consts.FloatFromLeft:
    //       configure = Navigator.SceneConfigs.FloatFromLeft;
    //       break;
    //     case Consts.FloatFromBottom:
    //       configure = Navigator.SceneConfigs.FloatFromBottom;
    //       break;
    //   }
    //   // return {
    //   //   ...configure,
    //   //   gestures: {}//或者改成null 
    //   // };
    // };
    return (
      <Navigator
        initialRoute={{
          component: Entrance,
          // component:Demo17,
          // component:CHOUTI,
          name: "第一个name",
          // configure: NoBackSwipe,
          params: {
            title: '第一个视图',
            haha: '哈哈',
            hehe: '呵呵',
            heihei: '嘿嘿',
            name: "多参传值name"
          }
        }}
        //渲染场景
        // route 就是上面的路由
        renderScene={(route, navigator) =>
          <route.component {...route.params} nav={navigator} name={route.name} />
        }
        // name={route.name}
        // 顺传赋值时用name，取值时用namegqb

        // 配置场景
        configureScene={()=>
            Navigator.SceneConfigs.PushFromRight
        }

        // configureScene={(route, routeStack) => {
        //   return NoBackSwipe
        // }} //禁用手势返回

        // configureScene={(route, routeStack) => {
        //   let configure = Navigator.SceneConfigs.PushFromRight;
        //   // console.log(route.configure + "23423");
        //   // switch (route.configure) {
        //   //   case Consts.FloatFromLeft:
        //   //     configure = Navigator.SceneConfigs.FloatFromLeft;
        //   //     break;
        //   //   case Consts.FloatFromBottom:
        //   //     configure = Navigator.SceneConfigs.FloatFromBottom;
        //   //     break;
        //   // }
        //   return {
        //     ...configure,
        //     gestures: {}//或者改成null 
        //   };
        // }}





      // Navigator.SceneConfigs.PushFromRight (默认)
      // Navigator.SceneConfigs.FloatFromRight
      // Navigator.SceneConfigs.FloatFromLeft
      // Navigator.SceneConfigs.FloatFromBottom
      // Navigator.SceneConfigs.FloatFromBottomAndroid
      // Navigator.SceneConfigs.FadeAndroid
      // Navigator.SceneConfigs.HorizontalSwipeJump
      // Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
      // Navigator.SceneConfigs.VerticalUpSwipeJump
      // Navigator.SceneConfigs.VerticalDownSwipeJump
      />
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
  style1: {
    height: 100,
    width: SCREENWIDTH,
    backgroundColor: '#eeeeee',
  },
  cellStyle: {
    width: SCREENWIDTH,
    // height:90,
    // flexDirection:"column",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: '#000000',
    borderBottomWidth: 0.3,
  },
});

// cnpm install --save react react-dom

// npm i react-timer-mixin --save      安装定时器

// npm install react-native-deprecated-custom-components --save

// sudo npm install react-native-scrollable-tab-view --save    第三方tabbar

// sudo npm install react-native-image-crop-picker --save   访问相册

//  sudo npm install react-native-video --save

// react-native link

//40.Animated 比较难，还有很未学习

// npm install react-native-drawer --save     抽屉




// <FuxiDemo1/>
//    <FuxiDemo2/>
// <FuxiDemo3/>
// <FuxiDemo4/>

// <FuxiDemo5/>
// <FuxiDemo6/>
// <FuxiDemo7/>
// <FuxiDemo8/>
// <FuxiDemo9/>
// <FuxiDemo10/>
// <FuxiDemo11/>
// <FuxiDemo12/>
// <FuxiDemo13/>
// <FuxiDemo14/>
// <FuxiDemo16/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>
// <FuxiDemo12/>

// <XinUI1/>

// <XinUI2/>
// <XinUI3/>
// <XinUI4/>
// <XinUI5/>
// <RiLi/>

// <Text1/>
// <Image2/>

// <TouchableOpacity4/>
// <LifeCycle5/>
// <ScrollView6/>
// <Demo2/>
// <Demo3/>
// <Demo4/>
// <Demo5/>
// <Demo6/>
// <Demo7/>
// <Demo8/>
// <Demo9/>
// <Demo10/>
// <Demo11/>
// <Demo12/>
// <Demo13/>
// <Demo14/>
// <Demo15/>
// <Demo16/>
// <Demo17/>
// <Demo18/>
// <Demo19/>
// <Demo20/>
// <Demo21/>
// <Demo22/>
// <Demo23/>
// <Demo24/>
// <Demo25/>
// <Demo26/>
// <Demo27/>
// <Demo28/>
// <Demo29/>
// <Demo30/>
// <Demo31/>
// <Demo32/>
// <Demo33/>
// <Demo34/>
// <Demo35/>
// <Demo36/>
// <Demo37/>
// <Demo38/>
// <Demo39/>
// <Demo40/>
// <Demo41/>
// <Demo42/>
// <Demo43/>
// <Demo44/>
// <Demo45/>
// <Demo46/>
// <Demo47/>
// <Demo48/>
// <Demo49/>
// <Demo50/>
// <Demo51/>
// <Demo52/>
// <Demo53/>
// <Demo54/>
// <Demo55/>
// <Demo56/>
// <Demo57/>
// <Demo58/>
// <Demo59/>
// <Demo60/>
// <Demo61/>
// <Demo62/>
// <Demo63/>
// <Demo64/>
