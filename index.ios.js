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
import Home from './app/components/home/home'
import FlexUi from './app/components/home/FlexUi'

export default class ReactNativeLearn extends Component {
  render() {
    return (
      <Router>
      <Scene key="login" component={Login} title="Login"></Scene>
            <Scene key="FlexUi" component={FlexUi} title="FlexUi"></Scene>

            <Scene key="home" component={Home} title="Home"></Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('ReactNativeLearn', () => ReactNativeLearn);
