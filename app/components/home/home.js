/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';

import Tabs from 'react-native-tabs';
import FirstFragment from './FirstFragment';
import SecondFragment from './SecondFragment'
import ListItem from './ListItem'
import Header from './Header'
import Footer from './Footer'
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "http://storygag.com/wp-content/uploads/2015/01/rahul-dravid-cover.jpg"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
        {'name': 'prayag', 'image': "https://facebook.github.io/react/img/logo_og.png"},
      ])
    };

  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
        renderRow={
          (rowData) =>
          <TouchableOpacity style={styles.clickContainer} onPress={this.clickItem.bind(this, rowData)}>
            <ListItem rowData={rowData}/>
          </TouchableOpacity>
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader = {() => <Header />}
        renderFooter = {() => <Footer />}
        />
      </View>
    );
  }

  clickItem(data){
    console.log(data);
    Actions.FlexUi();
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    marginTop : 60
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

});
