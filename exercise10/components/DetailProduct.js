import React,{Component} from 'react';
import {FlatList, 
    Text, 
    View, SafeAreaView, 
    StyleSheet, 
    TouchableOpacity} from 'react-native';
    
export default class DetailProduct extends Component{    
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }    
    
    async componentDidMount(){        
        
    }
    
    render(){
        //extract attribute
        let {imageURL,name,description} = this.state.product;
        return(
            <SafeAreaView style = {styles.container}>
                <View style={styles.view1}>
                    <Image
                        source={{uri: imageURL}}
                        style={styles.topImage}
                        resizeMode='cover'
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    view1: {
        flex: 35,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    topImage: {
        flex: 1,
        height: undefined,
    },
});