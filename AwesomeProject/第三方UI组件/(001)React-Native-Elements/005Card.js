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
    Image
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'


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
              switchstate:true,
              users:[
                {
                   name: '000',
                   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                },
                {
                    name: '111',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                 },{
                    name: '222',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                 },{
                    name: '333',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                 },{
                    name: '444',
                    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560921539403&di=60b14ed5228612c609b7704b9939d924&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F006hikKrzy7pzDEQbFe68%26690'
                 },
               ],
        };
        
    }

    render() {
        return (
        <View style={styles.container}>

 <Card
  title='HELLO WORLD'
  image={require('../../Common/Source/heros/2.png')}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='home' color='#ffffff' />}
    backgroundColor='#000000'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card> 

<Card title="CARD WITH DIVIDER">
  {
    this.state.users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card> 


 <Card containerStyle={{padding: 0,width:SCREENHEIGHT,height:SCREENWIDTH}} >
  {
    this.state.users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}}
        />
      );
    })
  }
</Card> 

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
    user:{
        alignItems:'center',
        justifyContent:"flex-start",
        flexDirection:"row",
    },
    name:{
        color:"red",
        fontSize:30,
    },
    image:{
        width:30,
        height:30,
        // marginRight:20,
        borderRadius:15,
    }

})


