import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../Theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../Redux/Slice/CartSlice';

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (!cartItems.length) return null; // Fixed here
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View style={Styles.cartItemContainer}>
          <Text style={Styles.text}>{cartItems.length}</Text>
        </View>
        <Text style={Styles.centerText}>View Cart</Text>
        <Text style={Styles.text}>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    zIndex: 1000,
    // alignItems: 'center',
    // justifyContent: 'center',
    // zIndex: -50,
  },
  buttonContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themeColors.bgColor(1),
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 10,
    padding: 12,
  },
  cartItemContainer: {
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
