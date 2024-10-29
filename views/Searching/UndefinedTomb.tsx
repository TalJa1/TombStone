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
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {backIcon, filterIcon, searchIcon} from '../../assets/svgXML';
import RNPickerSelect from 'react-native-picker-select';
import {vh, vw} from '../../services/styleSheet';
import {
  extractProvince,
  martyrSearchData,
  vietnamLocations,
} from '../../services/renderData';

const UndefinedTomb = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Main />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC = () => {
  return (
    <View style={styles.main}>
      <View style={styles.selectGrp}>
        <View style={styles.mainSelect}>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={value => console.log(value)}
            items={vietnamLocations.map(location => {
              const province = extractProvince(location);
              return {label: province, value: province};
            })}
            placeholder={{label: 'Nghĩa trang trực thuộc tỉnh', value: ''}}
          />
        </View>
        <View style={styles.searchIcon}>
          {searchIcon(vw(6), vw(6), 'white')}
        </View>
      </View>
      <View>
        <Text style={{color: '#868686'}}>
          Tổng: 45684 mộ liệt sĩ chưa có thân nhân xác nhận.
        </Text>
        <View style={{rowGap: vh(1), marginVertical: vh(2)}}>
          {martyrSearchData
            .filter(a => a.status === 'Chưa xác định')
            .map((item, index) => {
              return (
                <View key={index} style={styles.itemContainer}>
                  <View style={styles.topContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text
                      style={[
                        styles.status,
                        item.status === 'Chưa xác định' && {
                          backgroundColor: '#F7DAD4',
                        },
                      ]}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.bottomContainer}>
                    <Text style={styles.date}>
                      {item.birthYear} - {item.deathDate}
                    </Text>
                    <View style={{width: 2, backgroundColor: 'black'}} />
                    <Text style={styles.hometown}>{item.hometown}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackBtn}
          onPress={() => navigation.goBack()}>
          {backIcon(vw(6), vw(6), '#FFFFFF')}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Danh sách mộ chưa có nhân thân</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm nâng cao"
          placeholderTextColor="white"
        />
        {filterIcon(vw(6), vw(6), 'white')}
      </View>
    </View>
  );
};

export default UndefinedTomb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#547958',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    columnGap: vw(3),
  },
  headerBackBtn: {
    backgroundColor: '#91A8957D',
    borderRadius: vw(50),
    padding: vw(2),
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: vw(5),
    marginBottom: vh(1),
    borderWidth: 1,
    borderColor: 'white',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  main: {
    flex: 1,
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
  },
  mainSelect: {
    borderWidth: 1,
    borderColor: '#547958',
    borderRadius: 8,
    flex: 1,
  },
  selectGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: vh(1),
    columnGap: vw(2),
  },
  searchIcon: {
    backgroundColor: '#343434',
    borderRadius: vw(50),
    padding: vw(2),
  },
  itemContainer: {
    backgroundColor: '#ECF3A3',
    borderRadius: 12,
    paddingHorizontal: vw(2),
    paddingVertical: vh(1.5),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  status: {
    color: '#343434',
    fontSize: 10,
    backgroundColor: '#D4D4D4',
    padding: vw(1),
    borderRadius: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    columnGap: vw(1),
  },
  date: {
    color: '#000000',
  },
  hometown: {
    color: '#000000',
    flex: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#547958',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#547958',
  },
});
