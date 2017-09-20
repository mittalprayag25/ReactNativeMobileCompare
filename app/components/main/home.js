import React , {Component} from 'react';
import {AppRegistry, Text, Image, View, StyleSheet, Platform} from 'react-native';
import { NativeModules } from 'react-native';



export default class Main extends Component{
  constructor(){
    super();
    if(Platform.OS === 'ios'){
        NativeModules.CalenderManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    }
    else{
      NativeModules.ToastModule.show("ds", 21); // this can be uses in any method to use native modules
    }
  }

  render(){
    return(
      <View>
        <Text>sdkjhf</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create(
  {
    page : {
    },
    firstHalf : {

    },
    secondHalf : {

    }
  }
);
