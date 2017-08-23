import React , {Component}  from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import LoginForm from './login-form';

export default class Login extends Component{
render(){
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require('./../../assets/img/prayag.jpg')}/>

        <Text style={styles.contentText}>Prayag Mittal</Text>
      </View>
      <View>
        <LoginForm />
      </View>

    </View>
  );
}
}


const styles = StyleSheet.create(
  {
    container : {
      flex : 1,
      backgroundColor : '#3498db'
    },

    logoContainer : {
      alignItems : 'center',
      justifyContent : 'center',
      flexGrow : 1
    },

    logo :{
      width : 100,
      height : 100
    },
    contentText : {
      fontSize : 16,
      color : '#2c3e50'
    }
  }
);
