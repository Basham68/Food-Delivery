import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../Theme';
import DishRow from '../Components/DishRow';
import CartIcon from '../Components/CartIcon';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../Redux/Slice/RestaurantSlice';

const RestaurantScreen = () => {
  const {params} = useRoute();
  let {item} = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, [item]);

  const Header = () => {
    return (
      <>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Image style={styles.image} source={item.image} />
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const StickyHeader = () => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.ratingsContainer}>
              <Icon.Star stroke="gold" fill="gold" width={20} height={25} />
              <Text style={styles.rating}>{item.stars}</Text>
              <Text style={styles.ratingText}>
                ({item.reviews} reviews) . <Text>{item.category}</Text>
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon.MapPin stroke="grey" width={15} height={15} />
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </View>
          <View>
            <Text>{item.description}</Text>
          </View>
          <View>
            <Text style={{gap: 3, fontSize: 18, fontWeight: 'bold'}}>Menu</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <CartIcon />
      <FlatList
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[1]}
        data={[
          {key: 'stickyHeader'},
          ...item.dishes.map((dish, i) => ({...dish, key: `item-${i}`})),
        ]}
        renderItem={({item}) =>
          item.key === 'stickyHeader' ? (
            <StickyHeader />
          ) : (
            <DishRow item={item} />
          )
        }
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  backButtonContainer: {
    borderRadius: 50,
    backgroundColor: '#ffffff',
    top: 20,
    left: 20,
    position: 'absolute',
    padding: 7,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -25,
    paddingTop: 30,
  },
  cardTitleContainer: {
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    color: 'green',
    fontSize: 14,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  address: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
