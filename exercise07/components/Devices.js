import React,{Component} from 'react';
import {FlatList, Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {devices} from '../data/devices.js';

class Device extends Component{        

    render(){
        let backgroundColor = this.props.index % 2 == 0 ? 'darksalmon' : 'darkseagreen';
        return(
            <View style={[styles.listItem, {backgroundColor}]}>
                <View style={{width: '15%', justifyContent: 'center'}}>
                    <Image source={{uri: this.props.item.deviceURL}}
                    style = {styles.deviceImage}                    
                    />
                </View>
                <View style={{width: '85%',}} >
                    <Text style={styles.textItem}>{this.props.item.deviceName}</Text>
                    <Text numberOfLines={2} style={styles.descriptionItem}>{this.props.item.description}</Text>
                    <View style={styles.bottomLine}></View>
                </View>
            </View>
        );
    }
}

export default class Devices extends Component{
    static navigationOptions = {
        headerTitle: "Home",       
        headerTitleStyle: {
            // fontWeight: '500',
            // fontSize: 50,
            // marginTop: 5,
            textAlign: 'center', 
            alignSelf: 'center'
        },        
        headerStyle: {
            backgroundColor: 'darkred',
        },
        headerTintColor: 'white',
    };
    
    constructor(props){
        super(props);
    }

    _renderItem = ({ item, index }) =>(
        <TouchableOpacity
                onPress={()=>{
                    // alert("ss");
                    
                }}
            >
            <Device
                // {...item}
                item={item}                
                index={index}
            />
        </TouchableOpacity>
    );
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <FlatList
                    data = {devices}
                    keyExtractor={(item, index) => `${item.id}`}
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
        resizeMode: Image.resizeMode.cover,
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