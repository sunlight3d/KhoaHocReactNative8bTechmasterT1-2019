/**
 yarn add react-navigation
 yarn add react-native-gesture-handler
 react-native link react-native-gesture-handler
 yarn start --reset-cache
 */
import React,{Component} from 'react';
import {FlatList, 
    Text, 
    View, SafeAreaView, 
    Image, 
    ActivityIndicator,
    StyleSheet, 
    TouchableOpacity} from 'react-native';
    
import {URL_PRODUCT_LIST,
    URL_INSERT_PRODUCT,
    URL_UPDATE_PRODUCT,
    URL_DELETE_PRODUCT,
} from '../Server/Api'
import DetailProduct from './DetailProduct'
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
    insertProductFromApi = async (newProduct) => {
        try {
            let response = await fetch(URL_INSERT_PRODUCT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            })
            let responseJson = await response.json()
            if(responseJson.result === "ok") {
                this.getProductsFromApi()            
            }
        } catch (error) {            
            alert(`Cannot get products from Api. Error: ${error}`)
            this.setState({products: []})
        }
    }
    getProductsFromApi = async () => {
        try {
            let response = await fetch(URL_PRODUCT_LIST)
            let responseJson = await response.json()   
            if(responseJson.result === "ok") {
                this.setState({products: responseJson.data})
            }
        } catch (error) {            
            alert(`Cannot get products from Api. Error: ${error}`)
            this.setState({products: []})
        }
    }
    updateProductFromApi = async (updatedProduct) => {
        try {
            updatedProduct.id = updatedProduct._id
            let response = await fetch(URL_UPDATE_PRODUCT, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            })
            let responseJson = await response.json()
            alert(JSON.stringify(responseJson))
            if(responseJson.result === "ok") {
                await this.getProductsFromApi()            
            }
        } catch (error) {            
            alert(`Cannot update product. Error: ${error}`)
            this.setState({products: []})
        }
    }
    deleteProductFromApi = async (productId) => {
        try {
            let response = await fetch(URL_DELETE_PRODUCT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: productId
                }),
            })
            let responseJson = await response.json()
            if(responseJson.result === "ok") {
                await this.getProductsFromApi()            
            }
        } catch (error) {            
            alert(`Cannot get products from Api. Error: ${error}`)
            this.setState({products: []})
        }
    }
    async componentDidMount(){                
        await this.getProductsFromApi()

    }
    _renderItem = ({ item, index }) =>(        
        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('DetailProduct', {
                    type: "update",
                    item,                    
                    updateProductFromApi: this.updateProductFromApi,
                    deleteProductFromApi: this.deleteProductFromApi,
                    getProductsFromApi: this.getProductsFromApi
                })
            }}
        >
            <Product                
                item={item}
                index={index}
            />
        </TouchableOpacity>
    )
    
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <FlatList
                    data = {this.state.products}
                    keyExtractor={(product, index) => `${product.id}`}
                    renderItem={this._renderItem}
                />
                <TouchableOpacity style={styles.btnAddProduct}
                    onPress={() => {
                        this.props.navigation.navigate('DetailProduct', {
                            type: "insert",
                            item,
                            insertProductFromApi: this.insertProductFromApi,                           
                            getProductsFromApi: this.getProductsFromApi
                        })
                    }}>
                    <Text>Add</Text>
                </TouchableOpacity>
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
    },
    btnAddProduct: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});