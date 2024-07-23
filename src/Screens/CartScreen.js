import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Icon from 'react-native-feather';
import {themeColors} from '../Theme';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../Redux/Slice/CartSlice';
import {selectRestaurant} from '../Redux/Slice/RestaurantSlice';

const RenderCartDish = ({item}) => {
  const dispatch = useDispatch();
  let dish = item[1];
  return (
    <View style={Styles.cartMenuContainer}>
      <Text style={Styles.cartMenuCount}>{item.length} x</Text>
      <Image source={dish[0].image} style={Styles.cartMenuImage} />
      <Text style={Styles.cartMenuName}>{dish[0].name}</Text>
      <Text style={Styles.cartMenuPrice}>{dish[0].price}</Text>
      <TouchableOpacity
        style={Styles.cartMenuButton}
        onPress={() => dispatch(removeFromCart({id: dish[0].id}))}>
        <Icon.Minus stroke="#ffffff" strokeWidth={2} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const [groupedItems, setGroupedIcons] = useState({});
  const deliveryFee = 2;

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedIcons(items);
  }, [cartItems]);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft
            stroke="#ffffff"
            strokeWidth={4}
            width={25}
            height={25}
          />
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.headerText}>Your Cart</Text>
          <Text style={Styles.subHeaderText}>{restaurant.name}</Text>
        </View>
      </View>
      <View style={Styles.secondContainer}>
        <Image
          source={require('../assets/delivery.jpg')}
          style={Styles.image}
        />
        <Text style={Styles.text}>Delivery in 20-30 min</Text>
        <TouchableOpacity>
          <Text style={Styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.entries(groupedItems)}
        renderItem={({item}) => <RenderCartDish item={item} />}
        keyExtractor={item => item[0]}
        contentContainerStyle={{
          paddingTop: 30,
          paddingLeft: 10,
          paddingEnd: 10,
          gap: 12,
        }}
      />

      <View style={Styles.cartMenuCheckoutContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: 'grey', fontSize: 18}}>Sub total</Text>
          <Text style={{color: 'grey', fontSize: 18}}>${cartTotal}</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: 'grey', fontSize: 18}}>Delivery Fee</Text>
          <Text style={{color: 'grey', fontSize: 18}}>${deliveryFee}</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Order Total</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            ${cartTotal + deliveryFee}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={Styles.cartMenuCheckoutButton}
            onPress={() => navigation.navigate('Order')}>
            <Text style={Styles.cartMenuCheckoutButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  buttonContainer: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 10,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  subHeaderText: {
    textAlign: 'center',
    color: 'gray',
  },
  secondContainer: {
    backgroundColor: themeColors.bgColor(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: themeColors.text,
  },
  cartMenuContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    // justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 20,
    gap: 8,
  },
  cartMenuCount: {
    fontWeight: 'bold',
    color: themeColors.text,
  },
  cartMenuImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cartMenuName: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  cartMenuPrice: {
    fontWeight: 'semibold',
  },
  cartMenuButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 2,
  },
  cartMenuCheckoutContainer: {
    backgroundColor: themeColors.bgColor(0.2),
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 35,
    gap: 15,
  },
  cartMenuCheckoutButton: {
    backgroundColor: themeColors.bgColor(1),
    padding: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  cartMenuCheckoutButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
