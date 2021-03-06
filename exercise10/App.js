/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Products from './components/Products'
import { createStackNavigator, createAppContainer } from "react-navigation";
const AppNavigator = createStackNavigator({
  Products: {
    screen: Products
  } 
}, {
  initialRouteName: "Products"
});
export default createAppContainer(AppNavigator)
