import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Animated, Button, Easing,TouchableOpacity} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Resources extends Component{

  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  componentDidMount(){
    Animated.timing(
      this.animatedValue,{
        toValue: .6,
        easing: Easing.bounce, // Like a ball
        duration: 2000
    }).start()
  }
  render(){
    const { navigate } = this.props.navigation;
    setTimeout(function(){
      navigate('Introductory'); // Mention the name here where to navigate
    }, 1000);
    const animatedStyle = {opacity : this.animatedValue}
    return(

      <View style={styles.container}>

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
