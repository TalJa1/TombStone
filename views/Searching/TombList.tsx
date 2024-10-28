/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {dropdownIcon, readMoreIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import RNPickerSelect from 'react-native-picker-select';
import {MapListData, ProvinceList} from '../../services/renderData';
import HeaderComponent from '../../components/HeaderComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const TombList = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <HeaderComponent title="Danh sách nghĩa trang" />
          <SearchView />
          <MapListView />
          <MapListView2 />
        </View>
        <View style={{height: vh(5)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MapListView2: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: vw(5),
          marginVertical: vh(2),
        }}>
        <Text style={{color: '#547958', fontSize: 18, fontWeight: '700'}}>
          Nghĩa trang bạn đã qua
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#547958', fontSize: 14}}>Xem thêm</Text>
          {readMoreIcon(vw(5), vw(5))}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: vw(5), columnGap: vw(2)}}>
        {MapListData.filter(a => a.isVisited === true).map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.mapListContainer}
              onPress={() => {
                navigation.navigate('TombLocationDetail', {
                  title: item.title,
                });
              }}>
              <Image source={item.img} style={styles.mapListImg} />
              <View style={styles.cityContainer}>
                <Text style={styles.cityTxt}>{item.city}</Text>
              </View>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const MapListView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: vw(5),
          marginVertical: vh(2),
        }}>
        <Text style={{color: '#547958', fontSize: 18, fontWeight: '700'}}>
          Nghĩa trang gần bạn
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#547958', fontSize: 14}}>Xem thêm</Text>
          {readMoreIcon(vw(5), vw(5))}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: vw(5), columnGap: vw(2)}}>
        {MapListData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.mapListContainer}
              onPress={() => {
                navigation.navigate('TombLocationDetail', {
                  title: item.title,
                });
              }}>
              <Image source={item.img} style={styles.mapListImg} />
              <View style={styles.cityContainer}>
                <Text style={styles.cityTxt}>{item.city}</Text>
              </View>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const SearchView: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        {searchIcon(vw(5), vw(5), '#547958')}
        <TextInput
          inputMode="text"
          style={styles.searchInput}
          placeholder="Nhập tên nghĩa trang"
          placeholderTextColor="#6FA078"
        />
      </View>
      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          onValueChange={(value: any) => console.log(value)}
          items={ProvinceList}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: vh(2), // Adjust this value to position the icon vertically
              right: vw(3.5), // Adjust this value to position the icon horizontally
            },
          }}
          placeholder={{
            label: 'Trực thuộc tỉnh',
            value: null,
            color: '#547958',
          }}
          Icon={() => dropdownIcon(vw(5), vw(5), '#547958')}
        />
      </View>
      <TouchableOpacity style={styles.btnSearch}>
        <Text style={styles.btnSearchTxt}>Tìm kiếm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TombList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    marginTop: vh(2),
    marginHorizontal: vw(5),
    paddingHorizontal: vw(5),
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#547958',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: vh(0.7),
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    color: '#547958',
  },
  pickerWrapper: {
    marginTop: vh(2),
    borderWidth: 1,
    borderColor: '#547958',
    borderRadius: 5,
  },
  btnSearch: {
    backgroundColor: '#547958',
    paddingVertical: vh(2),
    borderRadius: 16,
    marginTop: vh(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSearchTxt: {
    color: 'white',
    fontSize: 16,
  },
  mapListContainer: {
    width: vw(55),
    backgroundColor: '#547958',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    padding: vw(2),
  },
  mapListImg: {
    height: vw(40),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  cityContainer: {
    padding: vw(2),
    backgroundColor: '#FFFFFFB3',
    borderRadius: 8,
    position: 'absolute',
    top: vw(4),
    right: vw(4),
  },
  cityTxt: {
    color: '#547958',
    fontSize: 10,
  },
  titleTxt: {
    color: '#EEF2EE',
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: vh(1),
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#6FA078',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10, // Adjust this value to position the icon vertically
    right: 12, // Adjust this value to position the icon horizontally
  },
});
