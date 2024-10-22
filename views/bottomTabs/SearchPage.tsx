import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {vh, vw} from '../../services/styleSheet';

const SearchPage = () => {
  useStatusBar('black');

  const dataStr = [
    'Nghĩa trang Liệt sĩ',
    'Hồ sơ liệt sĩ',
    'Cập nhật tìm mộ thành công',
    'Danh sách mộ chưa có nhân thân (mộ lạ)',
  ];

  const handleCLick = (index: number) => {
    switch (index) {
      case 0:
        // navigate to Liệt sĩ
        break;
      case 1:
        // navigate to Hồ sơ liệt sĩ
        break;
      case 2:
        // navigate to Cập nhật tìm mộ thành công
        break;
      case 3:
        // navigate to Danh sách mộ chưa có nhân thân (mộ lạ)
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
