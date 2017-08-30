import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, Animated, Button, Easing,TouchableOpacity} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Performance from './../survey/performance'
import Resources from './../survey/resources'

export default class SurveyNavigator extends Component{
  render(){
    return(
      <TabNavigation />
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: null
  });

}

export const TabNavigation = TabNavigator({
  Performance: {
    screen: Performance
  },
  Resources: {
    screen: Resources
  },
  Market: {
    screen: Resources
  },
  Preference: {
    screen: Resources
  },
  TimeFrame: {
    screen: Resources
  },
  Cost: {
      screen: Resources
    },
  DevelopmentModel: {
      screen: Resources
    },
  AppType: {
    screen: Resources
  },
  Users: {
    screen: Resources
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  swipeEnabled : true,

});
