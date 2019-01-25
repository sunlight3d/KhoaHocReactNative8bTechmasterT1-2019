import React,{Component} from 'react';
import {FlatList, 
    Text, 
    View, SafeAreaView, 
    Image, 
    ActivityIndicator,
    StyleSheet, 
    TouchableOpacity} from 'react-native';
    
import {URL_DEVICE_LIST} from '../Server/Api'
class Product extends Component{        

    render(){
        let backgroundColor = this.props.index % 2 == 0 ? 'powderblue' : 'skyblue';
        //extract attribute
        let {imageURL,name,description} = this.props.item;
        return(
            <View style={[styles.listItem, {backgroundColor}]}>
                <View style={{width: '15%', justifyContent: 'center'}}>
                    <Image source={{uri: imageURL}}
                    style = {styles.productImage}                    
                    />
                </View>
                <View style={{width: '85%',}} >
                    <Text style={styles.textItem}>{name}</Text>
                    <Text numberOfLines={2} style={styles.descriptionItem}>{description}</Text>
                </View>
            </View>
        );
    }
}

export default class Products extends Component{    
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }    
    getProductsFromApi = async () => {
        try {
            let response = await fetch(URL_DEVICE_LIST)
            let responseJson = await response.json()
            if(responseJson.result === "ok") {
                this.setState({products: responseJson.data})
            }
        } catch (error) {
            alert(`Cannot get products from Api. Error: ${error}`);
        }
    }
    async componentDidMount(){        
        await this.getProductsFromApi()
    }
    _renderItem = ({ item, index }) =>(        
        <TouchableOpacity
                onPress={()=>{
                    // alert("ss");
                    
                }}
            >
           <Product
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
                    data = {this.state.products}
                    keyExtractor={(product, index) => `${product.id}`}
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
    productImage:{
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
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
    }
});