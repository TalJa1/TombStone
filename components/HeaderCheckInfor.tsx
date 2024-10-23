import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {vh, vw} from '../services/styleSheet';
import {cancelIcon} from '../assets/svgXML';

const HeaderCheckInfor = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={{marginBottom: vh(2)}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          {cancelIcon(vw(7), vw(7), 'black')}
        </TouchableOpacity>
        <Text style={styles.title}>Xác nhận thông tin</Text>
      </View>
      <Text style={styles.description}>
        Hãy xác nhận hoặc sửa thông tin chưa chính xác do chất lượng tài liệu
        tải lên có thể nhàu, mờ.
      </Text>
    </View>
  );
};

export default HeaderCheckInfor;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vw(5),
    columnGap: vw(5),
    paddingHorizontal: vw(5),
    width: vw(100),
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  btn: {
    position: 'absolute',
    left: vw(5),
  },
  description: {
    marginHorizontal: vw(5),
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
});
