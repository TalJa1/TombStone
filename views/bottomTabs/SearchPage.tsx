import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchPage = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const dataStr = [
    'Nghĩa trang Liệt sĩ',
    'Hồ sơ liệt sĩ',
    'Cập nhật tìm mộ thành công',
    'Danh sách mộ chưa có nhân thân (mộ lạ)',
  ];

  const handleCLick = (index: number) => {
    switch (index) {
      case 0:
        navigation.navigate('TombList');
        break;
      case 1:
        navigation.navigate('MartyrProfile');
        break;
      case 2:
        navigation.navigate('SearchingSuccessfully');
        break;
      case 3:
        navigation.navigate('UndefinedTomb');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Searching/flag.png')} />
        <View style={styles.btnGrp}>
          {dataStr.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.btn}
                onPress={() => handleCLick(index)}>
                <Text style={styles.btnTxt}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnGrp: {
    rowGap: vh(2),
    paddingHorizontal: vw(10),
  },
  btn: {
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(5),
    backgroundColor: '#547958',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
