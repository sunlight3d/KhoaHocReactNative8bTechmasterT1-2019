/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Products from './components/Products'
import DetailProduct from './components/DetailProduct'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Products: {
    screen: Products
  },
  DetailProduct: {
    screen: DetailProduct
  }
}, {
  initialRouteName: "Products"
});
export default createAppContainer(AppNavigator)
