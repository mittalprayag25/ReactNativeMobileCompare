import React, {Component} from 'react';
import {StyleSheet, View, Image, Text,Slider, Button} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Resources extends Component{

  constructor(props){
    super(props);
    this.state = {selectedResources : 10};
    const { navigate } = this.props.navigation;
    this.navigate = navigate; // to make navigate global to use
  }


  render(){
    return(
    <View>
      <Text style={styles.resourceLabelText}>Please select the number of resources for area {this.state.selectedResources}</Text>
      <View>
          <Slider minimumValue={0} maximumValue={100} step={this.state.selectedResources}
          onSlidingComplete={(value) => this.setState({selectedResources: value})}></Slider>
        </View>

        <Button onPress={this.next.bind(this)} title="Next"/>
      </View>
    )
  }

  next(){
    this.navigate('Performance',{ name: 'Jane' }); //navigating between tabs
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
