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
} from 'react-native';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
// import {LocaleConfig} from 'react-native-calendars';

// LocaleConfig.locales['fr'] = {
//     monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
//     monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
//     dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
//     dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
//     today: 'Aujourd\'hui'
//   };
//   LocaleConfig.defaultLocale = 'fr';

type Props = {};
var Dimensions = require('Dimensions');
var SCREENWIDTH = Dimensions.get('window').width;
var SCREENHEIGHT = Dimensions.get('window').height;

export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true
        };
    }

    render() {
        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};
        return (
        <View style={styles.container}>
            {/* <Calendar
                style={{width:SCREENWIDTH,height:300}}
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    '2019-06-16': {selected: true, marked: true, selectedColor: 'blue'},
                    '2019-06-17': {marked: true},
                    '2019-06-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2019-06-19': {disabled: true, disableTouchEvent: false},
                    '2019-06-20': {marked:true,dotColor:"red",},

                }}
                /> */}

            {/* <Calendar
                markedDates={{
                    '2019-06-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                    '2019-06-26': {dots: [massage, workout], disabled: true,disableTouchEvent:false}
                }}
                markingType={'multi-dot'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('onDayPress selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('onDayLongPress selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('onMonthChange month changed', month)}}
                // Hide month navigation arrows. Default = false
                /> */}


            {/* <Calendar
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
                '2019-06-17': {textColor: 'green'},
                '2019-06-18': {startingDay: true, color: 'green'},
                '2019-06-19': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                '2019-06-20': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}
            /> */}

            {/* <Calendar
            style={[styles.calendar, {height: 300}]}
            dayComponent={({date, state}) => {
                return (<View style={{flex: 1}}><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}78</Text></View>);
            }}
            /> */}

{/* 滚动日历 */}
            <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={500}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            />



            <Calendar
                style={styles.CalendarStyle}
                // Initially visible month. Default = Date()
                current={'2002-05-17'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'1970-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'3078-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('onDayPress selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('onDayLongPress selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('onMonthChange month changed', month)}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={false}   //隐藏额外的天
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={false}  //禁用月变化
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}  //第一天从周几开始
                // Hide day names. Default = false
                hideDayNames={false} //显示星期几
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}  //显示第几周
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
            /> 

        </View>
    );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },
    CalendarStyle:{
        width:SCREENWIDTH,
        height:300,
        marginTop:64,
    },
    calendar:{
        width:SCREENWIDTH,
        height:300,
    }

})


// npm install --save react-native-calendars