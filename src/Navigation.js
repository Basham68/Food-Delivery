import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import CartScreen from './Screens/CartScreen';
import OrderPreparingScreen from './Screens/OrderPreparingScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          options={{presentation: 'modal'}}
          component={CartScreen}
        />
        <Stack.Screen
          name="Order"
          options={{presentation: 'fullScreenModal'}}
          component={OrderPreparingScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{presentation: 'fullScreenModal'}}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
