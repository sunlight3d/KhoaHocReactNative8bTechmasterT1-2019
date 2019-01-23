import React,{Component} from 'react';
import {FlatList, Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {devices} from '../data/devices.js';

class Device extends Component{        

    render(){
        let backgroundColor1 = this.props.index % 2 == 0 ? 'darksalmon' : 'darkseagreen';
        //extract attribute
        let {deviceURL,deviceName,description} = this.props.item;
        return(
            <View style={[styles.listItem, {backgroundColor:backgroundColor1}]}>
                <View style={{width: '15%', justifyContent: 'center'}}>
                    <Image source={{uri: deviceURL}}
                    style = {styles.deviceImage}                    
                    />
                </View>
                <View style={{width: '85%',}} >
                    <Text style={styles.textItem}>{deviceName}</Text>
                    <Text numberOfLines={2} style={styles.descriptionItem}>{description}</Text>
                    <View style={styles.bottomLine}></View>
                </View>
            </View>
        );
    }
}

export default class Devices extends Component{    

    _renderItem = ({ item, index }) =>(
        <Device
            // {...item}
            item={item}
            index={index}
        />
        // <TouchableOpacity
        //         onPress={()=>{
        //             // alert("ss");
                    
        //         }}
        //     >
           
        // </TouchableOpacity>
    );
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <FlatList
                    data = {devices}
                    keyExtractor={(device, index) => `${device.id}`}
                    renderItem={this._renderItem}
                    style={{ backgroundColor: 'darkseagreen'}}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    listItem:{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
    }, 
    deviceImage:{
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
        // resizeMode: Image.resizeMode.contain,
    },
    textItem:{
        paddingTop: 10,
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 5,        
    },
    descriptionItem:{
        fontSize: 14,        
        paddingBottom: 10
    },    
    bottomLine: {
        height: 1,        
        backgroundColor: 'gray'    
    }
});