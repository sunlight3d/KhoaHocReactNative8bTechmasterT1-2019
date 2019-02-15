import React,{Component} from 'react';
import {TextInput,
    Alert, Text,Image,
    View, SafeAreaView,
    StyleSheet,ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight} from 'react-native'
/* 
yarn add react-native-image-picker
react-native link
*/
import ImagePicker from 'react-native-image-picker';
import {
    URL_UPLOAD_IMAGE,
    URL_IMAGE_URL
} from '../Server/Api'
export default class DetailProduct extends Component{    
    constructor(props) {
        super(props)  
        this.state = {
            type: "",
            product:{}            
        }  
    }    

    async componentDidMount(){             
        this.setState({
            type: this.props.navigation.getParam('type', ""),
            product: this.props.navigation.getParam('item', {})        
        })        
    }
    _onInsertButton = () => {
        const insertProductFromApi = this.props.navigation.getParam('insertProductFromApi')
        insertProductFromApi(this.state.product)
    }
    _onSaveButton = async () => {
        if(this.state.type === "insert") {
            alert("insert")
            const insertProductFromApi = this.props.navigation.getParam('insertProductFromApi')
            await insertProductFromApi(this.state.product)
        } else if(this.state.type === "update") {
            const updateProductFromApi = this.props.navigation.getParam('updateProductFromApi')
            await updateProductFromApi(this.state.product)
        }
        
        this.props.navigation.goBack()
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
                    text: 'OK', onPress: async () => {
                        const deleteProductFromApi = this.props.navigation.getParam('deleteProductFromApi')
                        await deleteProductFromApi(this.state.product._id)
                        this.props.navigation.goBack()
                    } 
                },
            ],
            { cancelable: false }
        )
        
    }
    _showImagePicker = () => {        
        const options = {
            title: 'Select Avatar',         
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        ImagePicker.showImagePicker(options, (response) => {            
            if (response.didCancel) {
                // alert('User cancelled image picker')
            } else if (response.error) {
                // alert(`ImagePicker Error: ${JSON.stringify(response)}`)
            } else if (response.customButton) {
                // alert('User tapped custom button: ', response.customButton)
            } else {                                                
                //upload image
                this._uploadImageToServer(URL_UPLOAD_IMAGE, response.uri)
            }
        })
    }
    _uploadImageToServer = async (url,imageUri) => {
        const data = new FormData();
        data.append('photo', {
            uri: imageUri,
            type: 'image/jpeg', // or photo.type
            name: 'png'
        })
        try {
            let response = await fetch(url, {
                method: 'POST',
                body: data
            })            
            let responseJson = await response.json()            
            if(responseJson.result === "ok") {
                let updatedProduct = Object.assign({}, this.state.product)                 
                updatedProduct.imageURL = URL_IMAGE_URL+responseJson.imageURL   
                this.setState({product: updatedProduct})
                const getProductsFromApi = this.props.navigation.getParam('getProductsFromApi')
                const updateProductFromApi = this.props.navigation.getParam('updateProductFromApi')                
                await updateProductFromApi(this.state.product)
                await getProductsFromApi()                        
                // alert(JSON.stringify(this.state.product))
            }            
        } catch (error) {            
            alert(`Cannot upload image. Error: ${error}`)
        }        
    }
    render(){
        //extract attribute
        if(Object.entries(this.state.product).length === 0 && this.state.type==="update") {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }        
        const hasImage = this.state.product.imageURL && this.state.product.imageURL.length > 0        
                                                
        return(
            <SafeAreaView style = {styles.container}>
                <View style={styles.view1}>
                    <TouchableHighlight onPress={this._showImagePicker} style={{flex: 1}}>
                        {hasImage ? <Image                                
                                                source={{uri: this.state.product.imageURL}}                                
                                                resizeMode='cover'
                                                style={styles.topImage} />:
                                                <Image
                                                source={require('../images/defaultImage.png')}
                                                style={styles.topImage}
                                                resizeMode='cover'/>}
                    </TouchableHighlight>
                </View>
                <View style={styles.view2}>
                    <TextInput
                        style={{ height: 40, marginHorizontal: 10, marginVertical: 5,
                            borderColor: 'gray', borderRadius: 5,
                            borderWidth: 1, paddingLeft: 10}}
                        placeholder={"Enter product's name"}
                        onChangeText={(typedText) => this.setState((previousState) => {
                            let updatedProduct = Object.assign({name: typedText}, previousState.product)
                            updatedProduct.name = typedText
                            // alert(JSON.stringify(updatedProduct))
                            return {product: updatedProduct}
                        })}  
                        value={this.state.product.name}                  
                    />
                    <TextInput
                        style={{ height: 40, marginHorizontal: 10, marginVertical: 5,borderWidth: 1, 
                            borderColor: 'gray', borderRadius: 5,
                            paddingLeft: 10 }}
                        placeholder={"Enter product's description"}
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
                    {this.state.type==="update" && <View style={styles.buttons}>
                        <TouchableOpacity onPress={this._onDeleteProduct} 
                            style={{backgroundColor: 'red', width: '100%',                                                              
                                justifyContent:'center', alignItems:'center', borderRadius: 10}}>
                            <Text style={{fontSize:16, color: 'white'}}>
                                Delete this Product
                            </Text>
                        </TouchableOpacity>
                    </View>}
                    
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