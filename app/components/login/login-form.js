/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class LoginForm extends Component {
  constructor(){
    super();
    this.state = {isLoggedIn : false, email :"", password : ""};
  }
  render() {
    console.log("Render");
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder = "Username"
          returnKeyType = "next"
          underlineColorAndroid='transparent'
          onChange = {(text) => this.setState({email : text})}
        />
        <TextInput style={styles.input}
          secureTextEntry
          returnKeyType= 'go'
          onChange = {(password) => this.setState({password : password})}
          placeholder = "password"/>

        <TouchableOpacity style={styles.clickContainer} onPress={this.login.bind(this)}>
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  login(){
    this.setState({isLoggedIn : true});
    Actions.home();
  }
}

const styles = StyleSheet.create({
  container: {
    padding : 30
  },
  input :{
    height : 50,
    backgroundColor : 'rgba(255,255,255, 0.7)',
    marginBottom : 20,
    color : '#34495e',
    paddingHorizontal : 10
  },
  clickContainer :{
    backgroundColor : "#1abc9c",
    paddingVertical : 15
  },
  buttonText :{
    textAlign : 'center',
    color : '#ffffff'
  }
});
