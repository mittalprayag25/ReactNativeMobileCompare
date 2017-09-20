import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Animated, Button, Easing,TouchableOpacity} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Performance extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: 'Performance',
    headerLeft: null
  });
  render(){
    return(
    <View style={{ flex: 2,flexDirection: 'column',justifyContent: 'center',alignItems : 'flex-end'}}>
        <View style={{height: 50, backgroundColor: 'powderblue', paddingRight : 10, paddingRight : 20, paddingLeft : 30, flex : 2}}>
          <Text style={{backgroundColor : 'powderblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'powderblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'powderblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'powderblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'powderblue'}} >Continue</Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue', flex : 2, flexGrow : 20}}>
          <Text style={{backgroundColor : 'skyblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'skyblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'skyblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'skyblue'}} >Continue</Text>
          <Text style={{backgroundColor : 'skyblue'}} >Coninue</Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}


const styles= StyleSheet.create(
  {
    container : {
      flex : 1,
      backgroundColor : '#1f8274'
    },
    contentContainer : {
      alignItems : 'center',
      justifyContent : 'center',
      flexGrow : 1
    },
    appLogo : {
      fontSize : 26,
      color : "#ffffff"
    }
  }
);
