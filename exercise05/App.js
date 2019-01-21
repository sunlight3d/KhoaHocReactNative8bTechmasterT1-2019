/**
Icon:
npm install --save react-native-vector-icons
react-native link react-native-vector-icons

 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>Enter your name: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        >
        </TextInput>
        <Text style={styles.normalText}>You typed: </Text>
        <Text style={[styles.boldText,{color: 'red'}]}>{this.state.name}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  normalText:{
    fontSize: 16,
    color:'black'
  },
  textInput: {
    width: 280,
    height: 45
  },
  boldText:{
    fontSize: 16,
    fontWeight:'bold',
    color:'black'
  },
});
