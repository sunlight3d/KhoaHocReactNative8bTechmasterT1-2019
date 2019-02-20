
import React,{Component} from 'react';
import { 
    Text, 
    View, SafeAreaView, 
    Image, 
    StyleSheet, 
    TouchableOpacity} from 'react-native';
import {Provider, connect} from 'react-redux'
 
export default class ReduxApp extends Component{   
    
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={() => {
                    //this.setState({counter: this.state.counter - 1})
                    this.props.decrease()
                }}>
                    <Text  style={{fontSize: 40}}>Decrease</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    //this.setState({counter: this.state.counter + 1})
                    this.props.increase()
                }}>
                    <Text  style={{fontSize: 40}}>Increase</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 40}}>
                    {this.props.counter2}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,   
        flexDirection: "column"  
    },
    
});
//convert to Container
const mapStateToProps = (state = {counter: 0}) => {
    //alert(`state = ${JSON.stringify(state)}`)
    return {
        counter2: state.counterReducer.counter
    }
}   
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            const action = {
                type: 'INCREASE_ACTION',
            }
            return dispatch(action)
        },
        decrease: () => {
            const action = {
                type: 'DECREASE_ACTION'
            }
            return dispatch(action)
        }
    }
}
export const higherOrderFunction = connect(mapStateToProps, mapDispatchToProps)
export const ReduxAppContainer = higherOrderFunction(ReduxApp)