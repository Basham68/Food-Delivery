import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {categoryList} from '../Constants';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View style={Styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categoryList.map((ele, i) => {
          const isActive = ele.id === activeCategory;
          return (
            <View key={i} style={Styles.categoryBox}>
              <TouchableOpacity
                style={[
                  Styles.categoryButton,
                  {backgroundColor: isActive ? '#CDD4CB' : '#e6eee3'},
                ]}
                onPress={() => setActiveCategory(ele.id)}>
                <Image style={{width: 50, height: 50}} source={ele.image} />
              </TouchableOpacity>
              <Text
                style={[
                  Styles.categoryText,
                  {color: isActive ? '#000000' : '#a9a9a9'},
                ]}>
                {ele.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const Styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
  },

  categoryBox: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    borderRadius: 50,
    padding: 2,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 14,
    // padding: 1,
  },
});
