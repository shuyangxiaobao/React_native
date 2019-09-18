import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    AlertIOS,
} from 'react-native';

//引入json数据
var ImageData = require('./Json/data2.json');
//引入定时器
var TimerMixin = require('react-timer-mixin');

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class Test extends Component {
    //注册定时器
    mixins: [TimerMixin];

    state = {
        //当前页面
        currentPage: 0,
    }
    //初始化固定值
    static defaultProps = {
        //间隔时间  单位是毫秒!!
        duration: 1000
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    //一帧动画结束之后!!
                    onMomentumScrollEnd={(e) => this.onScrollAnimationEnd(e)}
                    // 开始拖拽时
                    onScrollBeginDrag={() => this.ScrollBeginDrag()}
                    // 结束拖拽时
                    onScrollEndDrag={() => this.startTimer()}
                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*指示器*/}
                <View style={styles.pageViewStyle}>
                    {/*5个小点*/}
                    {this.renderPage()}
                </View>
            </View>
        );
    }

    // 开始拖拽时
    ScrollBeginDrag() {
        clearInterval(this.timer);
    }

    //UI加载完毕
    componentDidMount() {
        //开启定时器
        this.startTimer();
    }



    //开启定时器
    startTimer() {
        //写逻辑代码
        //1.拿到ScrollView
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;
        var obj = this;

        //2.设置定时器
        this.timer = setInterval(function () {
            //2.1 设置当前页
            var currentPage = 0;
            //2.2 判断

            currentPage = obj.state.currentPage;
            console.log("---" + currentPage + "-----")
            if (currentPage == 0) {
                scrollView.scrollTo({ x: (currentPage + 1) * width, y: 0, animated: true });
            } else if (currentPage == 1) {
                scrollView.scrollTo({ x: (currentPage + 1) * width, y: 0, animated: true });

            } else if (currentPage == 2) {
                scrollView.scrollTo({ x: (currentPage + 1) * width, y: 0, animated: true });

            } else if (currentPage == 3) {
                scrollView.scrollTo({ x: (currentPage + 1) * width, y: 0, animated: true });

            } else if (currentPage == 4) {
                scrollView.scrollTo({ x: (currentPage + 1) * width, y: 0, animated: true });
            } else if (currentPage == 5) {
                scrollView.scrollTo({ x: 0 * width, y: 0, animated: false });
                scrollView.scrollTo({ x: 1 * width, y: 0, animated: true });
            }
        }, this.props.duration);
    }


    //滚动完毕
    onScrollAnimationEnd(e) {
        //1.拿到偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        //2.求出当前第几页
        var currentPage = Math.floor(offsetX / width);
        // if(currentPage == 5){
        //     currentPage = 0;
        // }
        // console.log(currentPage);
        //3.更新状态机
        this.setState({
            currentPage: currentPage
        });

    }

    //返回小点点
    renderPage() {
        var style;
        //点一个装点点的数组
        var pageArr = [];
        //拿到图片数组
        var imgsArr = ImageData.data;
        console.log(this.state.currentPage);
        var currentPage = this.state.currentPage;
        if (currentPage == imgsArr.length - 1){
            currentPage = 0;
        }
        
        //遍历
        for (var i = 0; i < imgsArr.length - 1; i++) {

            //判断
            style = (i == currentPage) ? { color: 'orange' } : { color: '#ffffff' };
            //给page加小先对象
            pageArr.push(
                <Text
                    key={i}
                    style={[{ fontSize: 25 }, style]}
                >&bull;  </Text>
            )
        }
        //返回
        return pageArr;
    }

    //加载所有的图片
    renderAllImage() {
        //数组
        var allImage = [];
        //拿到图片数据
        var imgsArr = ImageData.data;
        //遍历
        for (var i = 0; i < imgsArr.length; i++) {
            //取出单个图片的数据!
            var imgItem = imgsArr[i];
            //创建图片组件到数组里面
            allImage.push(
                <Image
                    key={i}
                    source={{ uri: imgItem.img }}
                    style={{ width: width, height: 150 }}
                />
            )
        }
        //返回所有的图片
        return allImage;
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }


}

const styles = StyleSheet.create({
    container: {

    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        //定位
        position: 'absolute',
        bottom: 0,

        //主轴方向
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

});
//输出一个类
module.exports = Test;