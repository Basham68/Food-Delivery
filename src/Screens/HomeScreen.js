import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {themeColors} from '../Theme';
import Categories from '../Components/Categories';
import Featured from '../Components/Featured';
import {featuredList} from '../Constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={Styles.safeContent}>
      <StatusBar barStyle="dark-content" />
      <View style={Styles.mainContainer}>
        <View style={Styles.searchBarContainer}>
          <Icon.Search height="25" width="25" stroke="grey" />
          <TextInput placeholder="Restaurants" style={Styles.textInput} />
          <View style={Styles.verticalDivider} />
          <View style={Styles.locationContainer}>
            <View style={Styles.verticalLine} />
            <Icon.MapPin height="25" width="25" stroke="grey" />
            <Text style={Styles.locationText}>New York, NYC</Text>
          </View>
        </View>
        <View
          style={[
            Styles.filterContainer,
            {backgroundColor: themeColors.bgColor(1)},
          ]}>
          <Icon.Sliders
            width="25"
            height="25"
            strokeWidth={2.5}
            stroke="#ffffff"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <Categories />
        <View style={{marginTop: 30}}>
          {featuredList?.map((ele, i) => (
            <Featured
              key={i}
              title={ele.title}
              description={ele.description}
              image={ele.image}
              restaurants={ele.restaurants}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  safeContent: {
    backgroundColor: '#ffffff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 50,
    width: '85%',
    borderColor: 'grey',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0, // Remove default border of TextInput
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'grey',
    paddingLeft: 2,
  },
  verticalDivider: {
    borderRightWidth: 1,
    borderRightColor: 'grey',
    height: '100%',
  },
  filterContainer: {
    borderRadius: 50,
    padding: 8,
    marginLeft: 3,
  },
});
