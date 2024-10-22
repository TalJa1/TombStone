/* eslint-disable react-native/no-inline-styles */
import {
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
import {backIcon, dropdownIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {ProvinceList} from '../../services/renderData';

const TombList = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
          <SearchView />
          <Text> TombList </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
          }}
          Icon={() => dropdownIcon(vw(5), vw(5), '#547958')}
        />
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(7), vw(7))}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Danh sách nghĩa trang</Text>
    </View>
  );
};

export default TombList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vw(5),
    columnGap: vw(5),
  },
  headerBtn: {
    backgroundColor: '#91A89526',
    borderRadius: vw(50),
    padding: vw(2),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#547958',
  },
  searchContainer: {
    marginTop: vh(2),
    marginHorizontal: vw(5),
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
