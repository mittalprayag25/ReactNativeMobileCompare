/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class FlexUi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.halfHeight}>
          <Image style={styles.scroller} source={require('./../../assets/img/prayag.jpg')}/>
        </View>
        <View style={styles.quarterHeight} />
        <View style={styles.secondQuarter} />
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
  container: {
       flex: 1,
       flexDirection: 'column'
   },
   halfHeight: {
       flex: .25,
       backgroundColor: '#FF3366'
   },
   quarterHeight: {
       flex: .50,
       backgroundColor: '#FF3366'
   },
   secondQuarter : {
       flex: .25,
       backgroundColor : '#fff'
   },
   scroller : {

   },
});
