
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ComponentA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight:'bold', marginBottom: 10}}>Hello {this.props.name}</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'       
  }
});
