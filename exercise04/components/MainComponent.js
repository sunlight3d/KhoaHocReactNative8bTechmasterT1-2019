/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default class MainComponent extends Component {
  render() {
    return (
      <View style={styles.container}>        
          <ComponentA name='Hoang' />
          <ComponentB name='Jonny' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  }
});
