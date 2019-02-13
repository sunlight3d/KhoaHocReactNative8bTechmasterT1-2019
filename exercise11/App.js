/**
 yarn add react-navigation
 yarn add react-native-gesture-handler
 yarn add react-native-image-picker
 react-native link 

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