import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Animated, Easing} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component{

  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
  }

  componentDidMount(){
    Animated.timing(
      this.animatedValue,{
        toValue: .6,
        easing: Easing.bounce, // Like a ball
        duration: 2000
    }).start()
  }
  render(){
    setTimeout(function(){
      Actions.login();
    }, 3000);
    const animatedStyle = {opacity : this.animatedValue}
    return(

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Animated.View style={styles.box, animatedStyle}>
            <Text style={styles.appLogo}>App Decide</Text>
            </Animated.View>
          </View>
      </View>
    );
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
