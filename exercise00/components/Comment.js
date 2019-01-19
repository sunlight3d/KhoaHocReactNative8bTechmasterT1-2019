import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
//yarn add react-native-vector-icons
//yarn link
import Ionicons  from 'react-native-vector-icons/Ionicons'

export default class Comment extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 7, justifyContent: 'row'}}>
            <Image style={styles.personImage} source={{uri: this.props.item.imageURL}}>

            </Image>
            <Text style={styles.comment}>
                {this.props.item.content}
            </Text>
        </View>
        <View style={{flex: 3, justifyContent: 'row', }}>
            <View>

            </View>
            <View></View>
        </View>
      </View>   
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    personImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    comment:{
        fontSize: 15,
        color: 'darkgray'
    }
})


content: "I originally wrote this application to generate lists of random names to populate a test database with 1000’s of users",
        imageURL:"https://en.wikipedia.org/wiki/Wiki#/media/File:Ward_Cunningham_-_Commons-1.jpg",
        imageURL:"",
        personName:"Tim Jackson",
        numberOfLikes: 3
