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
import Login from './app/components/login/login'
import Home from './app/components/home/home'
import FlexUi from './app/components/home/FlexUi'
import Splash from './app/components/splash/splash'
import Introductory from './app/components/introductory/intro'
import { StackNavigator } from 'react-navigation';

import SurveyNavigator from './app/components/survey/survey'

// export default class ReactNativeLearn extends Component {
//   render() {
//     return (
//       <Router>
//         <Scene key="splash" component={Splash} title="Splash" hideNavBar></Scene>
//           <Scene key="introductory" component={Introductory} hideNavBar></Scene>
//         <Scene key="login" component={Login} title="Login"></Scene>
//         <Scene key="FlexUi" component={FlexUi} title="FlexUi"></Scene>
//         <Scene key="home" component={Home} title="Home"></Scene>
//       </Router>
//     );
//   }
// }
const ReactNativeLearn = StackNavigator({
  Splash: { screen: Splash },
  Introductory : {screen : Introductory},
  SurveyNavigator : {screen : SurveyNavigator}
});

AppRegistry.registerComponent('ReactNativeLearn', () => ReactNativeLearn);
