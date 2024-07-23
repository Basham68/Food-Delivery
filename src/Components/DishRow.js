import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../Theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemById,
} from '../Redux/Slice/CartSlice';

const DishRow = ({item}) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(addToCart({...item}));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  };

  const totalItems =
    useSelector(state => selectCartItemById(state, item.id)) || [];

  return (
    <View style={Styles.cardContainer}>
      <Image source={item.image} style={Styles.imageContainer} />
      <View style={Styles.textContainer}>
        <Text style={Styles.name}>{item.name}</Text>
        <Text style={Styles.description}>{item.description}</Text>
        <View style={Styles.priceContainer}>
          <Text>${item.price}</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={Styles.button}
              disabled={totalItems.length === 0}
              onPress={() => handleDecrease()}>
              <Icon.Minus
                stroke="white"
                strokeWidth={2}
                height={25}
                width={25}
              />
            </TouchableOpacity>
            <Text>{totalItems.length}</Text>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => handleIncrease()}>
              <Icon.Plus
                stroke="white"
                height={25}
                width={25}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    flexWrap: 'wrap',
    fontSize: 14,
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 1,
  },
});
