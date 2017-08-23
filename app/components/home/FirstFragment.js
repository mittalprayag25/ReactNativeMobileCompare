/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FirstFragment extends Component {
constructor(props){
  super(props)
  console.log(props.data);
}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
