import React,{Component} from 'react';
import {
    Alert, 
    Text,Image,TextInput,
    View, SafeAreaView, 
    StyleSheet, 
    TouchableOpacity} from 'react-native'

export default class DetailProduct extends Component{    
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.navigation.getParam('item', {})
        }
    }    
    
    async componentDidMount(){        
        
    }
    _onInsertButton = () => {
        const insertProductFromApi = this.props.navigation.getParam('insertProductFromApi')
        insertProductFromApi(this.state.product)
    }
    _onSaveButton = () => {
        const updateProductFromApi = this.props.navigation.getParam('updateProductFromApi')
        alert(updateProductFromApi)
        updateProductFromApi(this.state.product)
    }
    _onCancelButton = () => {
        this.props.navigation.goBack()
    }
    _onDeleteProduct = () => {
        Alert.alert(
            'Delete Product',
            'Are you sure you want to delete this product ?',
            [                
                { 
                    text: 'Cancel', onPress: () => {
                        
                    } 
                },
                { 
                    text: 'OK', onPress: () => {
                        const deleteProductFromApi = this.props.navigation.getParam('deleteProductFromApi')
                        deleteProductFromApi(this.state.product.id)
                        this.props.navigation.goBack()
                    } 
                },
            ],
            { cancelable: false }
        )
        
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
                <View style={styles.view2}>
                    <TextInput
                        style={{ height: 40, marginHorizontal: 10, marginVertical: 5 }}
                        onChangeText={(typedText) => this.setState((previousState) => {
                            let updatedProduct = Object.assign({name: typedText}, previousState.product)
                            updatedProduct.name = typedText
                            // alert(JSON.stringify(updatedProduct))
                            return {product: updatedProduct}
                        })}  
                        value={this.state.product.name}                  
                    />
                    <TextInput
                        style={{ height: 40, marginHorizontal: 10, marginVertical: 5 }}
                        numberOfLines = {4}
                        onChangeText={(typedText) => this.setState((previousState) => {
                            let updatedProduct = Object.assign({description: typedText}, previousState.product)
                            updatedProduct.description = typedText
                            return {product: updatedProduct}                            
                        })}                    
                        value={this.state.product.description}                  
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this._onSaveButton} 
                            style={{backgroundColor: 'steelblue',
                            width: 120,
                            justifyContent:'center', alignItems:'center', borderRadius: 10}}>                            
                            <Text style={{fontSize:16, color: 'white'}}>
                                Save
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onCancelButton} 
                            style={{backgroundColor: 'red',
                            width: 120,
                            justifyContent:'center', alignItems:'center', borderRadius: 10}}>
                            <Text style={{fontSize:16, color: 'white'}}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this._onDeleteProduct} 
                            style={{backgroundColor: 'red', width: '100%',                                                              
                                justifyContent:'center', alignItems:'center', borderRadius: 10}}>
                            <Text style={{fontSize:16, color: 'white'}}>
                                Delete this Product
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
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
    },
    topImage: {
        flex: 1,
        height: undefined,
    },
    view2: {
        flex: 65,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        alignItems: 'stretch'
    },        
    buttons: {
        marginTop: 15,  
        marginHorizontal: 40, 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'stretch',
        height: 40
    },    

});