/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './app/components/login/login'
import Home from './app/components/home/home1' // This has to be home not home1
import FlexUi from './app/components/home/FlexUi'
import Splash from './app/components/splash/splash'

export default class ReactNativeLearn extends Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor:'#fff'}}>
            <Scene key="splash" component={Splash} hideNavBar></Scene>
            <Scene key="login" component={Login} title="Login"></Scene>
            <Scene key="home" component={Home} title="Home"></Scene>
            <Scene key="FlexUi" component={FlexUi} title="FlexUi"></Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('ReactNativeLearn', () => ReactNativeLearn);
