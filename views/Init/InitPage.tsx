/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {centerAll, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData} from '../../services/storage';

const InitPage = () => {
  useStatusBar('#547958');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isMain, setIsMain] = useState(false);

  const fetchData = async () => {
    await loadData<boolean>('isMain')
      .then(res => {
        setIsMain(res);
      })
      .catch(() => {
        setIsMain(false);
      });
  };

  useEffect(() => {
    fetchData();
    const timer = setTimeout(() => {
      isMain ? navigation.replace('Main') : navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation, isMain]);

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
