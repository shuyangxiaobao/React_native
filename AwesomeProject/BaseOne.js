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
import { Navigator } from 'react-native-deprecated-custom-components';
// import FuxiDemo1 from './复习/01复习(Text)';
// import FuxiDemo2 from './复习/02复习(Image)';

// import FuxiDemo3 from './复习/03复习(Textinput)';
// import FuxiDemo4 from './复习/04复习(TouchableOpacity)';
// import FuxiDemo5 from './复习/05复习(生命周期)';
// import FuxiDemo6 from './复习/06复习(ScrollView)';
// import FuxiDemo7 from './复习/07复习(定时器)';
// import FuxiDemo8 from './复习/08复习(Switch)';
// import FuxiDemo9 from './复习/09复习(ActivityIndicator)';
// import FuxiDemo10 from './复习/10复习(Button)';
// import FuxiDemo11 from './复习/11复习(DatePickerIOS日期选择)';
// import FuxiDemo12 from './复习/12复习(KeyboardAvoidingView防止键盘遮挡)';
// import FuxiDemo13 from './复习/13复习(ListView单组)';
// import FuxiDemo14 from './复习/14复习(ListtView多组)';
// import FuxiDemo16 from './复习/16复习页面跳转/16复习Navigator';

// import XinUI1 from './第三方UI组件/(001)React-Native-Elements/001Avatar';

// import XinUI2 from './第三方UI组件/(001)React-Native-Elements/002Badge';

// import XinUI3 from './第三方UI组件/(001)React-Native-Elements/003Button';

// import XinUI4 from './第三方UI组件/(001)React-Native-Elements/004ButtonGroup';
// import XinUI5 from './第三方UI组件/(001)React-Native-Elements/005Card';

// import RiLi from './第三方UI组件/(002)日历react-native-calendars /001(日历控件)';

import TextOne from './Common/1.Text1';
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

type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;
var Heros = [
  '1.Text',
  '2.Image',
  '3.TextInput',
  '4.TouchableOpacity',
  '5.LifeCycle5',
  '6.ScrollView',
  '7.定时器(无限轮播)',
  '8.switch',
  '9.ActivityIndicator',
  '10.Button',
  '11.DatePickerIOS',
  '12.KeyboardAvoidingView',
  '13.ListView(单组)',
  '14.ListView(多组)',
  '15.TabBarIOS',
  '16.Navigator',
  '17.自定义tabbar/HKMain',
  '18.FlatList',
  '19.ImageBackground',
  '20.MaskedViewIOS',
  '21.ModalView',
  '22.Picker',
  '23.PickerIOS',
  '24.ProgressViewIOS',
  '25.RefreshControl',
  '26.SafeAreaView',
  '27.SectionList',
  '28.SegmentedControlIOS',
  '29.Slider',
  '30.SnapshotViewIOS',
  '31.StatusBar',
  '32.TouchableHighlight',
  '33.TouchableNativeFeedback',
  '34.View',
  '35.VirtualizedList',
  '36.WebView',
  '37.ActionSheetIOS',
  '38.Alert',
  '39.AlertIOS',
  '40.Animated',
  '41.AppState',
  '42.AsyncStorage',
  '43.BackHandler',
  '44.CameraRoll',
  '45.Clipboard',
  '46.Dimensions',
  '47.Geolocation',
  '48.ImagePickerIOS',
  '49.ImageStore',
  '50.InteractionManager',
  '51.Keyboard',
  '52.LayoutAnimation',
  '53.Linking',
  '54.NetInfo',
  '55.PanResponder',
  '56.PixelRatio',
  '57.PushNotificationIOS',
  '58.Settings',
  '59.阴影样式属性',
  '60.Share',
  '61.Vibration(震动)',
  '62.rnJumpToIOS',
];
export default class Text1 extends Component<Props> {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

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
          component: TextOne,
        });
        break;
      case Heros[1]:
        this.props.nav.push({
          component: Demo2,
        });
        break;
      case Heros[2]:
        this.props.nav.push({
          component: Demo3,
        });
        break;
      case Heros[3]:
        this.props.nav.push({
          component: TouchableOpacity4,
        });
        break;
      case Heros[4]:
        this.props.nav.push({
          component: LifeCycle5,
        });
        break;
      case Heros[5]:
        this.props.nav.push({
          component: ScrollView6,
        });
        break;
      case Heros[6]:
        // alert('7');
        this.props.nav.push({
          component: Demo7,
        });
        break;
      case Heros[7]:
        // alert('8');
        this.props.nav.push({
          component: Demo8,
        });
        break;
      case Heros[8]:
        // alert('9');
        this.props.nav.push({
          component: Demo9,
        });
        break;
      case Heros[9]:
        this.props.nav.push({
          component: Demo10,
        });
        break;
      case Heros[10]:
        this.props.nav.push({
          component: Demo11,
        });
        break;

      case Heros[11]:
        this.props.nav.push({
          component: Demo12,
        });
        break;

      case Heros[12]:
        this.props.nav.push({
          component: Demo13,
        });
        break;

      case Heros[13]:
        this.props.nav.push({
          component: Demo14,
        });
        break;

      case Heros[14]:
        this.props.nav.push({
          component: Demo15,
        });
        break;

      case Heros[15]:
        this.props.nav.push({
          component: Demo16,
        });
        break;

      case Heros[16]:
        this.props.nav.push({
          component: Demo17,
        });
        break;

      case Heros[17]:
        this.props.nav.push({
          component: Demo18,
        });
        break;

      case Heros[18]:
        this.props.nav.push({
          component: Demo19,
        });
        break;

      case Heros[19]:
        this.props.nav.push({
          component: Demo20,
        });
        break;

      case Heros[20]:
        this.props.nav.push({
          component: Demo21,
        });
        break;

      case Heros[21]:
        this.props.nav.push({
          component: Demo22,
        });
        break;

      case Heros[22]:
        this.props.nav.push({
          component: Demo23,
        });
        break;

      case Heros[23]:
        this.props.nav.push({
          component: Demo24,
        });
        break;

      case Heros[24]:
        this.props.nav.push({
          component: Demo25,
        });
        break;

      case Heros[25]:
        this.props.nav.push({
          component: Demo26,
        });
        break;

      case Heros[26]:
        this.props.nav.push({
          component: Demo27,
        });
        break;

      case Heros[27]:
        this.props.nav.push({
          component: Demo28,
        });
        break;

      case Heros[28]:
        this.props.nav.push({
          component: Demo29,
        });
        break;

      case Heros[29]:
        this.props.nav.push({
          component: Demo30,
        });
        break;

      case Heros[30]:
        this.props.nav.push({
          component: Demo31,
        });
        break;

      case Heros[31]:
        this.props.nav.push({
          component: Demo32,
        });
        break;

      case Heros[32]:
        this.props.nav.push({
          component: Demo33,
        });
        break;

      case Heros[33]:
        this.props.nav.push({
          component: Demo34,
        });
        break;

      case Heros[34]:
        this.props.nav.push({
          component: Demo35,
        });
        break;

      case Heros[35]:
        this.props.nav.push({
          component: Demo36,
        });
        break;

      case Heros[36]:
        this.props.nav.push({
          component: Demo37,
        });
        break;

      case Heros[37]:
        this.props.nav.push({
          component: Demo38,
        });
        break;

      case Heros[38]:
        this.props.nav.push({
          component: Demo39,
        });
        break;

      case Heros[39]:
        this.props.nav.push({
          component: Demo40,
        });
        break;

      case Heros[40]:
        this.props.nav.push({
          component: Demo41,
        });
        break;

      case Heros[41]:
        this.props.nav.push({
          component: Demo42,
        });
        break;

      case Heros[42]:
        this.props.nav.push({
          component: Demo43,
        });
        break;

      case Heros[43]:
        this.props.nav.push({
          component: Demo44,
        });
        break;

      case Heros[44]:
        this.props.nav.push({
          component: Demo45,
        });
        break;

      case Heros[45]:
        this.props.nav.push({
          component: Demo46,
        });
        break;

      case Heros[46]:
        this.props.nav.push({
          component: Demo47,
        });
        break;

      case Heros[47]:
        this.props.nav.push({
          component: Demo48,
        });
        break;

      case Heros[48]:
        this.props.nav.push({
          component: Demo49,
        });
        break;
      case Heros[49]:
        this.props.nav.push({
          component: Demo50,
        });
        break;
      case Heros[50]:
        this.props.nav.push({
          component: Demo51,
        });
        break;
      case Heros[51]:
        this.props.nav.push({
          component: Demo52,
        });
        break;
      case Heros[52]:
        this.props.nav.push({
          component: Demo53,
        });
        break;
      case Heros[53]:
        this.props.nav.push({
          component: Demo54,
        });
        break;
      case Heros[54]:
        this.props.nav.push({
          component: Demo55,
        });
        break;
      case Heros[55]:
        this.props.nav.push({
          component: Demo56,
        });
        break;
      case Heros[56]:
        this.props.nav.push({
          component: Demo57,
        });
        break;
      case Heros[57]:
        this.props.nav.push({
          component: Demo58,
        });
        break;
      case Heros[58]:
        this.props.nav.push({
          component: Demo59,
        });
        break;
      case Heros[59]:
        this.props.nav.push({
          component: Demo60,
        });
        break;
      case Heros[60]:
        this.props.nav.push({
          component: Demo61,
        });
        break;
      case Heros[61]:
        this.props.nav.push({
          component: Demo62,
        });
      default:
        break;
    }
  }

  render() {
    return (
      <View style={{ with: SCREENWIDTH, height: SCREENHEIGHT }}>
        <View style={styles.topViewStyle}>
          <Text style={styles.titleStyle}>基础组件</Text>
        </View>
        <ListView
          style={{ marginTop: 0 }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  lineStyle: {
    width: SCREENWIDTH,
    height: 0.5,
    backgroundColor: '#111111',
  },
  cellTextStyle: {
    top: 0,
    left: 20,
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
    // left:30,
    color: '#ffffff',
    fontSize: 28,
  },
});
