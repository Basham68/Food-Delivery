import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../Theme';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {item})}>
      <View style={Styles.container}>
        <Image source={item.image} style={Styles.image} />
        <View style={Styles.textContainer}>
          <Text style={Styles.textTitle}>{item.name}</Text>
          <View style={Styles.ratingsContainer}>
            <Icon.Star stroke="gold" fill="gold" width={15} height={20} />

            <Text style={{color: 'green', fontSize: 10}}>{item.stars}</Text>
            <Text style={Styles.ratingText}>
              ({item.reviews} reviews) . <Text>{item.category}</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Icon.MapPin stroke="grey" width={15} height={15} />
            <Text>Nearby . {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

const Styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowColor: themeColors.bgColor(0.3),
    shadowRadius: 20,
    borderWidth: 3,
    borderColor: '#eee',
    elevation: 10,
    marginTop: 5,
    marginBottom: 10,
    minHeight: 100,
    width: (width / 100) * 60,
    aspectRatio: 1 / 1,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    maxHeight: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingVertical: 10,
  },
  textTitle: {
    paddingTop: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingsContainer: {
    flexDirection: 'row',
    paddingTop: 6,
    alignItems: 'center',
  },
  ratingText: {
    fontWeight: 700,
    fontSize: 8,
  },
});
