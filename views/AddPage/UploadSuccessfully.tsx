import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MartyrProfileItem} from '../../services/typeProps';
import {loadData} from '../../services/storage';
import {MartyrProfile} from '../../services/renderData';

const UploadSuccessfully = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [tmp, setTmp] = useState<MartyrProfileItem[]>([]);

  const fetchData = async () => {
    await loadData<MartyrProfileItem[]>('martyrProfileStorage')
      .then(data => {
        setTmp(data);
      })
      .catch(() => {
        setTmp(MartyrProfile);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const handleFollowRequest = () => {
    navigation.navigate('StatusDetail', {dataIndex: tmp.length - 1});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/AddPage/flag.png')}
      />
      <View style={styles.main}>
        <Text style={styles.title}>
          Thông tin hồ sơ và yêu cầu tìm kiếm mộ đã tải lên thành công
        </Text>
        <Image
          style={styles.upImg}
          source={require('../../assets/AddPage/upload.png')}
        />
        <Text style={styles.des}>
          Quá trình xử lý yêu cầu tìm mộ của bạn đang diễn ra với nhiều bước
          quan trọng để đảm bảo kết quả chính xác nhất. Vui lòng thường xuyên
          kiểm tra tiến độ và cập nhật tình trạng hồ sơ của bạn để theo dõi
          những thay đổi mới nhất
        </Text>
        <TouchableOpacity onPress={handleFollowRequest}>
          <Text style={styles.underlineBtnTxt}>Theo dõi yêu cầu tìm kiếm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.homeBtn, centerAll]}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text style={styles.homeBtnTxt}>Trở về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UploadSuccessfully;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FA078',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: vw(5),
    rowGap: vh(1),
  },
  img: {
    height: vh(20),
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  des: {
    fontSize: 16,
    color: '#E5E5E5',
    textAlign: 'center',
  },
  underlineBtnTxt: {
    fontSize: 18,
    color: '#ECF3A3',
    textDecorationLine: 'underline',
  },
  homeBtn: {
    backgroundColor: '#ECF3A3',
    paddingVertical: vh(2),
    width: '100%',
    borderRadius: 16,
    position: 'absolute',
    bottom: vh(2),
  },
  homeBtnTxt: {
    fontSize: 16,
    color: 'black',
  },
  upImg: {
    height: vh(30),
    width: '100%',
    resizeMode: 'contain',
  },
});
