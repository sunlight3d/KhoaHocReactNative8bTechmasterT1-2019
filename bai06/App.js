/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Dimensions, Text, View,SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
        <Image
            source={require('./images/autumn_sweden.jpg')}
            style={styles.topImage}
            resizeMode='cover'
            />
        </View>
        <View style={styles.view2}>
          <View style={styles.placeView}>
            <Text style={styles.boldText}>Autumn in Sweden</Text>
            <Text style={styles.normalText}>Copenhagen, Sweden</Text>
          </View>
          <View style={styles.rateView}>
            <Icon name={'star'} size={20} color={'red'} />
            <Text style={[styles.normalText, { color: 'red' }]}>10</Text>
          </View>
        </View>
        <View style={styles.view3}>

        </View>
        <View style={styles.view4}>
          <Text style={[styles.normalText]} ellipsizeMode={"tail"}>
            This guide then takes a step back to explain Flutter’s approach to layout, and shows how to place a single widget on the screen. After a discussion of how to lay widgets out horizontally and vertically,
            some of the most common layout widgets are covered.If you want a “big picture” understanding of the layout mechanism,
            This guide then takes a step back to explain Flutter’s approach to layout, and shows how to place a single widget on the screen. After a discussion of how to lay widgets out horizontally and vertically,
            some of the most common layout widgets are covered.If you want a “big picture” understanding of the layout mechanism,
            </Text>

        </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  view1: {
    flex: 35,
    flexDirection: 'row',
    backgroundColor:'red'
  },
  topImage: {
    flex:1, 
    height: undefined,
    backgroundColor:'red'
  },
  view2: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'green'
  },
  placeView: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    //backgroundColor: 'red'
  },
  rateView: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
  },
  view3: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'blue'
  },
  view4: {
    flex: 35,
    flexDirection: 'row',
    // backgroundColor:'yellow',
    padding: 10,
    paddingBottom: 20,
  }
});
