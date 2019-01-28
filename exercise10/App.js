/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Products from './components/Products'
import DetailProduct from './components/DetailProduct'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Products: {
    screen: Products
  },
  DetailProduct: {
    screen: DetailProduct
  }
}, {
  initialRouteName: "Products"
});
export default createAppContainer(AppNavigator)
/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products>
          
        </Products>
      </View>
    );
  }
}
*/
