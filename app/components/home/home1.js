/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Tabs from 'react-native-tabs';
import FirstFragment from './FirstFragment';
import SecondFragment from './SecondFragment'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})} style = {styles.tabContainer}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
        </Tabs>
        <View style={styles.contentContainer}>
          {this.showFragment()}
        </View>
      </View>
    );
  }

  showFragment(){
    if(this.state.page == 'first'){
      return (
        <FirstFragment data={this.state.page}/>
      );
    }
    else if (this.state.page == 'second') {
      return(
        <SecondFragment />
      );
    }
    else{
      return(
        <Text>
            Welcome to React Native
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex : 1,
  }

});
