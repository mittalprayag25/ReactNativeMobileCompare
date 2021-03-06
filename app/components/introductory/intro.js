import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Animated, Button, Easing,TouchableOpacity} from 'react-native';

export default class Introductory extends Component{
  constructor(){
    super();
    this.clickCount = 0;
    this.navigate = "";

    this.state = {selectedURI : require('./../../assets/img/xamarin.png'),
      uri : [
      require('./../../assets/img/xamarin.png'),
      require('./../../assets/img/android.jpg'),
      require('./../../assets/img/ios.jpeg'),
      require('./../../assets/img/react.jpeg'),
      require('./../../assets/img/prayag.jpg')
    ],introductoryButtonText: "Next"};

  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Show Off',
    headerRight: <Button title="continue"/>,
  });


  skip(){
    console.log("skip");
    this.clickCount = this.clickCount + 1;

    switch (this.clickCount) {
      case 1:
        this.setState({selectedURI : this.state.uri[1]});
      break;
      case 2:
        this.setState({selectedURI : this.state.uri[2]});
      break;
      case 3:
        this.setState({selectedURI : this.state.uri[3]});
      break;
      case 4:
        this.setState({selectedURI : this.state.uri[4], introductoryButtonText : "Finish"});
      break;
      default:
        this.navigate('Home');
      break;

    }
  }

  continue(){
    this.navigate('SurveyNavigator');
  }
  render(){
    let re = require('./../../assets/img/xamarin.png');
    const { navigate } = this.props.navigation;
    this.navigate = navigate; // to make navigate global to use
    return(
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
          style={styles.intro}
          source={this.state.selectedURI} />
          <TouchableOpacity onPress={this.continue.bind(this)}>
            <Text style={styles.buttonText} >Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.skip.bind(this)}>
            <Text style={styles.buttonText} >{this.state.introductoryButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create(
  {
    container : {
      flex : 1,
    },
    contentContainer : {
      alignItems : 'center',
      justifyContent : 'center',
      flexGrow : 1
    },
    appLogo : {
      fontSize : 26,
      color : "#ffffff"
    },
    intro : {
      flex : 1
    }
  }
);
