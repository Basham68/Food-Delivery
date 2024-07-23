import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {featuredList} from '../Constants';
import {themeColors} from '../Theme';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectsRestaurant} from '../Redux/Slice/RestaurantSlice';
const DeliveryScreen = () => {
  const restaurant = useSelector(selectsRestaurant);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          longitude: restaurant.longitude,
          latitude: restaurant.latitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={{flex: 1}}
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.title}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View style={Styles.container}>
        <View style={Styles.miniContainer}>
          <View style={{gap: 8}}>
            <Text style={{fontSize: 18, fontWeight: 'semibold'}}>
              Estimated Arrival
            </Text>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              20-30 minutes
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'semibold'}}>
              Your Order is on the way
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/delivery-boy.png')}
              style={{width: 80, height: 80}}
            />
          </View>
        </View>
        <View style={Styles.riderContainer}>
          <View>
            <Image
              source={require('../assets/profile.webp')}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
              Surender
            </Text>
            <Text
              style={{color: '#ffffff', fontSize: 16, fontWeight: 'semibold'}}>
              Your Rider
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={Styles.riderButton}>
              <Icon.Phone
                stroke={themeColors.bgColor(1)}
                fill={themeColors.bgColor(1)}
                strokeWidth={3}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.riderButton}
              onPress={() => navigation.navigate('Home')}>
              <Icon.X stroke="red" strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: -30,
    position: 'relative',
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
  },
  riderContainer: {
    backgroundColor: themeColors.bgColor(0.8),
    borderRadius: 50,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },

  riderButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
  },
});
