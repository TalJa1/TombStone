import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageProps} from '../../services/typeProps';
import TextInputComponent from '../AddPage/TextInputComponent';
import {vw} from '../../services/styleSheet';

const Page2: React.FC<PageProps> = ({setData, data}) => {
  const handleNameChange = (value: string) => {
    setData({...data, name: value});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
      <TextInputComponent
        label="Họ tên liệt sĩ"
        value={data.name}
        setValue={handleNameChange}
        type="text"
        width={100}
      />
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: vw(5)},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
