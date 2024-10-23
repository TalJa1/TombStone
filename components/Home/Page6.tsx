import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageProps} from '../../services/typeProps';
import {vw} from '../../services/styleSheet';
import TextInputComponent from '../AddPage/TextInputComponent';

const Page6: React.FC<PageProps> = ({data, setData}) => {
  const handleDescriptionChange = (value: string) => {
    setData({...data, description: value});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin hỗ trợ/yêu cầu khác</Text>
      <TextInputComponent
        label="Quan hệ người tìm kiếm (bạn) với liệt sĩ"
        value={data.description}
        setValue={handleDescriptionChange}
        type="text"
        width={100}
      />
    </View>
  );
};

export default Page6;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: vw(5)},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
