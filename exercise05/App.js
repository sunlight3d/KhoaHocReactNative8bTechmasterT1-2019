/**
Icon:
npm install --save react-native-vector-icons
react-native link react-native-vector-icons

 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Dimensions } from 'react-native'
import Icon  from 'react-native-vector-icons'
// <ion-icon name="people"></ion-icon>

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
              <Icon name={'star'} size={20} color='red'/>
              <Text style={[styles.normalText, {color: 'red'}]}>10</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={styles.buttonCall}>
              <Icon name={'phone-square'} size={20} color='steelblue'/>
              <Text style={styles.normalText}>Call</Text>
            </View>
            <View style={styles.buttonRoute}>
              <Icon name={'bicycle'} size={20} color='steelblue'/>
                <Text style={styles.normalText}>Route</Text>
              </View>
            <View style={styles.buttonShare}>
              <Icon name={'share'} size={20} color='steelblue'/>
              <Text style={styles.normalText}>Share</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={[styles.normalText]}>
              This guide then takes a step back to explain Flutter’s approach to layout, and shows how to place a single widget on the screen. After a discussion of how to lay widgets out horizontally and vertically, 
              some of the most common layout widgets are covered.If you want a “big picture” understanding of the layout mechanism,
              This guide then takes a step back to explain Flutter’s approach to layout, and shows how to place a single widget on the screen. After a discussion of how to lay widgets out horizontally and vertically, 
              some of the most common layout widgets are covered.If you want a “big picture” understanding of the layout mechanism,
            </Text>
          </View>
      </View>
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
    width: Dimensions.get('window').width,
    height: undefined,
  },

  view2: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:'green'
  },
  placeView: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
  },
  rateView: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
  },
  normalText:{
    fontSize: 16,
    color:'black'
  },
  boldText:{
    fontSize: 16,
    fontWeight:'bold',
    color:'black'
  },
  view3: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor:'green'
  },
  buttonCall: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRoute: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonShare: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view4: {
    flex: 35,
    flexDirection: 'row',
    // backgroundColor:'blue'
    padding: 10,
    paddingBottom: 20,
  }
});
