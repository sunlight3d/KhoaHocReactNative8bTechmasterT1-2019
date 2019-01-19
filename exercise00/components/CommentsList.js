import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {fakeComments} from '../data/fakeComments'
//yarn add react-native-vector-icons
//yarn link
import Ionicons  from 'react-native-vector-icons/Ionicons'

export default class CommentsList extends Component{
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={fakeComments}
                  renderItem={({item}) => Commment}>

        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
