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
  ScrollView,
  TextInput,
} from 'react-native';
import {validate} from '@babel/types';
import TextInput3 from '../Common/21.ModalView';

type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;

export default class Text1 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      switchstate: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewStyle}
          horizontal={false} // true 水平， false 竖直
          showsVerticalScrollIndicator={false} //显示垂直滚动条
          showsHorizontalScrollIndicator={false} //显示水平滚动条
          pagingEnabled={false} //分页
          // 用户拖拽滚动视图的时候，是否要隐藏软键盘。
          // none（默认值），拖拽时不隐藏软键盘。
          // on-drag 当拖拽开始的时候隐藏软键盘。
          // interactive 软键盘伴随拖拽操作同步地消失,并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。
          keyboardDismissMode={'interactive'}
          // 如果当前界面有软键盘，那么点击scrollview后是否收起键盘，取决于本属性的设置。（译注：很多人反应TextInput无法自动失去焦点/需要点击多次切换到其他组件等等问题，其关键都是需要将TextInput放到ScrollView中再设置本属性）
          //     'never'（默认值），点击TextInput以外的子组件会使当前的软键盘收起。          此时子元素不会收到点击事件。
          //     'always'，键盘不会自动收起，ScrollView也不会捕捉点击事件，
          //                 但子组件可以捕获。
          //     'handled'，当点击事件被子组件捕获时，键盘不会自动收起。这样切换
          //             TextInput时键盘可以保持状态。多数带有TextInput的情况
          //              下你应该选择此项。

          keyboardShouldPersistTaps={'handled'}
          // ScrollView内部可滚动内容的视图发生变化时调用
          onContentSizeChange={() => {
            this.onContentSizeChange();
          }}
          // 滚动动画开始时调用此函数
          onMomentumScrollStar={() => {
            this.onMomentumScrollStar();
          }}
          // 滚动动画结束时调用此函数。
          onMomentumScrollEnd={() => {
            this.onMomentumScrollEnd();
          }}
          // 在滚动的过程中，每帧最多调用一次此回调函数
          // 调用的频率可以用scrollEventThrottle属性来控制。
          onScroll={() => {
            this.onScroll();
          }}
          scrollEventThrottle={0.1}
          // 当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。
          removeClippedSubviews={true}
        >
          {this.renderChildView()}
        </ScrollView>
      </View>
    );
  }
  // 此函数会在ScrollView内部可滚动内容的视图发生变化时调用
  //    调用参数为内容视图的宽和高: (contentWidth, contentHeight)
  //    此方法是通过绑定在内容容器上的onLayout来实现的。
  onContentSizeChange(contentWidth, contentHeight) {
    // alert(contentWidth + contentHeight);
  }
  // 滚动动画开始时调用此函数。
  onMomentumScrollStar() {
    console.log('开始滚动'); // ios 不执行
    // alert("开始滚动");
  }

  onMomentumScrollEnd() {
    // alert("滚动结束");
    console.log('滚动结束');
  }

  onScroll() {
    console.log('滚动');
  }

  //返回子组件
  renderChildView() {
    //数组
    var allChild = [];
    var colors = [
      'red',
      'green',
      'blue',
      'yellow',
      'orange',
      'purple',
      'red',
      'green',
      'blue',
      'yellow',
      'orange',
      'purple',
      '#000000',
    ];
    //遍历
    for (var i = 0; i < colors.length; i++) {
      allChild.push(
        <View
          key={i}
          style={{
            backgroundColor: '#21212B',
            width: SCREENWIDTH,
            height: 116,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            // padding:20,
          }}
          // style={styles.cellStyle}
        >
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              backgroundColor: '#21212B',
              width: SCREENWIDTH,
              height: 115,
            }}
          >
            <View
              style={{
                width: SCREENWIDTH,
                height: 67,
              }}
            >
              <Text style={styles.titleStyle} numberOfLines={2}>
                Introduction to Delivery Process of APEX fo And SHFE FU
                [CHINESE]
              </Text>
            </View>

            <View style={styles.BottomStyle}>
              <Text style={styles.timeStyle}>2019-05-23 09:36</Text>

              <Text style={styles.readAmountStyle}>4859浏览</Text>
              <TextInput style={styles.inputStyle} placeholder={'我是占位的'} />
            </View>
          </View>

          <View
            style={{
              width: SCREENWIDTH,
              height: 1,
              backgroundColor: '#191A22', //191A22
              paddingRight: 20,
              paddingLeft: 20,
            }}
          ></View>
        </View>
      );
    }
    //返回
    return allChild;
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

  titleStyle: {
    // position:"absolute",
    // left:20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 19,
    height: 48,
    lineHeight: 24,
    color: '#ffffff',
    fontSize: 16,

    // backgroundColor:"#555555"
  },
  scrollViewStyle: {
    // position:"relative"
    marginTop: 20,
    // marginLeft:50,
    borderWidth: 10,
    width: SCREENWIDTH,
    marginRight: 0,
    borderColor: '#00ffff',
    marginBottom: 49,
    borderRadius: 10,
    opacity: 1.1,
    overflow: 'scroll',
  },

  BottomStyle: {
    height: 48,
    width: SCREENWIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  timeStyle: {
    color: '#7E829D',
    fontSize: 13,
    marginTop: 10,
    marginLeft: 20,
  },
  readAmountStyle: {
    color: '#7E829D',
    fontSize: 13,
    marginTop: 10,
    marginLeft: 20,
  },
  inputStyle: {
    width: 100,
    height: 40,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,

    backgroundColor: '#ff0021',
  },

  // cellStyle:{
  //     // flexDirection:"row",
  // }
});
