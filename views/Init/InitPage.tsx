/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {centerAll, vw} from '../../services/styleSheet';

const InitPage = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{flex: 1}, centerAll]}>
        <Image
          style={styles.img}
          source={require('../../assets/Init/Init.png')}
        />
        <Text style={styles.title}>Dấu tích Anh linh</Text>
        <Text style={styles.des}>
          Ứng dụng, hệ thống tìm kiếm, số hóa và lưu giữ thông tin về mộ liệt
          sĩ, tôn vinh sự hy sinh của các anh hùng dân tộc
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default InitPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547958',
  },
  img: {
    width: vw(80),
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#F9D000',
    marginTop: vw(5),
  },
  des: {
    fontSize: 14,
    color: '#ECF3A3',
    textAlign: 'center',
    paddingHorizontal: vw(5),
    marginTop: vw(2),
    fontWeight: '400',
  },
});
