/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RNPickerSelect from 'react-native-picker-select';
import {MapLocation} from '../../services/renderData';
import {backIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';

const TombMapList = () => {
  useStatusBar('#EEF2EE');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Text>Map List</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [searchText, setSearchText] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');

  const provinces = MapLocation.map(location => ({
    label: location.properties?.name ?? 'Unknown',
    value: location.properties?.name ?? 'Unknown',
  }));

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search:', searchText, selectedProvince);
  };

  return (
    <View style={styles.header}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={{width: '20%'}}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            {backIcon(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tên nghĩa trang"
          placeholderTextColor={'#6FA078'}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <View style={{width: '20%'}} />
        <View style={styles.selectDropDown}>
          <RNPickerSelect
            onValueChange={setSelectedProvince}
            items={provinces}
            style={pickerSelectStyles}
            placeholder={{label: 'Thuộc tỉnh', value: null}}
          />
        </View>
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setActiveTab('tab1')}
          style={[styles.tabButton]}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'tab1' && styles.activeTab,
            ]}>
            Tab 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('tab2')}
          style={[styles.tabButton]}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'tab2' && styles.activeTab,
            ]}>
            Tab 2
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TombMapList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#EEF2EE',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    rowGap: vh(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#91A89526',
    borderRadius: vw(50),
    padding: vw(2),
    marginRight: vw(5),
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    borderColor: '#6FA078',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#547958',
    padding: 10,
    borderRadius: vw(50),
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: vh(2),
  },
  activeTab: {
    fontWeight: '700',
    color: 'black',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#868686',
  },
  selectDropDown: {
    flex: 1,
    borderColor: '#547958',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
  inputAndroid: {
    flex: 1,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
});
