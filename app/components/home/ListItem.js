/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class ListItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.rowData.image}} style={styles.photo}/>
        <Text style={styles.text}>
          {this.props.rowData.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  text : {
    marginLeft : 20
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
