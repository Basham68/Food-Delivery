import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {themeColors} from '../Theme';
import RestaurantCard from './RestaurantCard';

const Featured = ({title, description, restaurants, image}) => {
  return (
    <View>
      <View style={Styles.ContentContainer}>
        <View style={Styles.textContainer}>
          <Text style={Styles.title}>{title}</Text>
          <Text
            style={Styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.text, fontWeight: 'bold'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        renderItem={({item}) => <RestaurantCard item={item} />}
        keyExtractor={(_, i) => i.toString()}
        // contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
};

export default Featured;

const Styles = StyleSheet.create({
  ContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10, // Add some padding to give space between text and "See All"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'grey',
    flexWrap: 'wrap',
  },
});
