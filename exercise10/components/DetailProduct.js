import React,{Component} from 'react';
import {TextInput, 
    Text,Image,
    View, SafeAreaView, 
    StyleSheet,ActivityIndicator,
    TouchableOpacity} from 'react-native'
import {URL_DEVICE_LIST,
    URL_INSERT_PRODUCT,
    URL_UPDATE_PRODUCT,
    URL_DELETE_PRODUCT,
} from '../Server/Api'

export default class DetailProduct extends Component{    
    constructor(props) {
        super(props)  
        this.state = {
            product:{}
        }        
    }    

    async componentDidMount(){           
        await this.setState({
            product: this.props.navigation.getParam('item', {})
        })
        alert(JSON.stringify(this.state.product))
    }
    _onInsertButton = () => {
        const insertProductFromApi = this.props.navigation.getParam('insertProductFromApi')
        insertProductFromApi(this.state.product)
    }
    _onSaveButton = () => {
        const updateProductFromApi = this.props.navigation.getParam('updateProductFromApi')
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
        if(Object.entries(this.state.product).length === 0) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
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
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(typedText) => this.setState((previousState) => {
                            let updatedProduct = Object.assign({name: typedText}, previousState.product)
                            return updatedProduct
                        })}  
                        value={name}                  
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        numberOfLines = {4}
                        onChangeText={(typedText) => this.setState((previousState) => {
                            let updatedProduct = Object.assign({description: typedText}, previousState.product)
                            return updatedProduct
                        })}                    
                        value={description}                  
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this._onSaveProduct}>
                            <Text style={styles.saveButton}>
                                Save
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onCancel}>
                            <Text style={styles.cancelButton}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this._onDeleteProduct}>
                        <Text style={styles.deleteButton}>
                            Delete this Product
                        </Text>
                    </TouchableOpacity>
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
    view2: {
        flex: 65,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        alignItems: 'stretch'
    },    
    saveButton: {
        fontSize:20,
        height: 40,
        backgroundColor: 'skyblue'
    },
    cancelButton: {
        fontSize:20,
        height: 40,
        backgroundColor: 'red'
    },
    buttons: {
        flexDirection: 'row',
        height: 50
    },
    deleteButton: {
        fontSize:20,
        height: 40,
        backgroundColor: 'red'
    },

});