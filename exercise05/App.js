/**
Icon:
npm install --save react-native-vector-icons
react-native link react-native-vector-icons

 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Dimensions } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>Enter your name: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={
            (typedText) => this.setState({name:typedText})
          }
          autoCorrect={false}
          // value={this.state.name}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          onChangeText={
            (typedText) => this.setState({email:typedText})
          }
          autoCorrect={false}
          // value={this.state.name}
        >
        </TextInput>
        <Text style={styles.normalText}>You typed: </Text>
        <Text style={[styles.boldText,{color: 'red'}]}>{this.state.name}</Text>
        <Text style={[styles.boldText,{color: 'red'}]}>
          {`Email: ${this.state.email}`}
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  normalText:{
    fontSize: 16,
    color:'black'
  },
  textInput: {
    width: 280,
    height: 45,
    fontSize: 20,
  },
  boldText:{
    fontSize: 16,
    fontWeight:'bold',
    color:'black'
  },
});
