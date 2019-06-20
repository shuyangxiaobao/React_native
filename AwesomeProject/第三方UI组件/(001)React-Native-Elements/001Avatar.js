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
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

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
        return (
        <View style={styles.container}>

          <View style={styles.oneViewStyle}>
              <Text style={{height:50,lineHeight:50}}> 
              第1组
              </Text>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                  style={styles.AvatarStyle}
                />

                <Avatar rounded title="MD" />

                <Avatar rounded icon={{ name: 'home' }} />

                <Avatar
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  showEditButton={true}
                />

          </View>



          <View style={styles.oneViewStyle}>
              <Text style={{height:50,lineHeight:50,}}> 
              第2组
              </Text>
              <Avatar
                size="small"
                rounded
                title="MT"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Avatar
                size="medium"
                title="BP"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Avatar
                size="large"
                title="LW"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Avatar
                size="xlarge"
                rounded
                title="CR"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />

          </View>


          <View style={styles.oneViewStyle}>
              <Text style={{height:50,lineHeight:50,}}> 
              第3组
              </Text>
              <Avatar
                size="small"
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{ marginLeft: 0, marginTop: 0}}
              />
              <Avatar
                size="medium"
                overlayContainerStyle={{backgroundColor: 'blue'}}
                icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{ marginTop: 0}}
              />
              <Avatar
                size="large"
                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'white'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginLeft:10, marginTop: 0}}
              />
              <Avatar
                size="xlarge"
                rounded
                icon={{name: 'home', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginLeft:10, marginRight: 0}}
                onLongPress={()=>{alert("home 长按")}}

              />
              <Avatar
                size={100} //small, medium, large, xlarge
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginLeft: 10, marginTop: 0}}
              />

          </View>
            
             
        </View>
    );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        // flex:2,
        alignItems:'center',
        justifyContent:"flex-start",
        flexDirection:"column",
        height:SCREENHEIGHT*2
    },
    oneViewStyle:{
      alignItems:'flex-start',
      justifyContent:"space-around",
      flexDirection:"row",
      width:SCREENWIDTH-40,
      // height:50,
      margin:20,

    },
    AvatarStyle:{
      margin:10,
      width:30,
      height:30,
      borderRadius:60,
    }


})







// npm install --save react-native-elements
// npm install --save react-native-vector-icons
// react-native link react-native-vector-icons


