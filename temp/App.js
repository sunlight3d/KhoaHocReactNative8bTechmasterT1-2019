/**
 yarn add react-navigation
 yarn add react-native-gesture-handle
 react-native link react-native-gesture-handler
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
