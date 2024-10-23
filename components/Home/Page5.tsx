import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vw} from '../../services/styleSheet';
import {PageProps} from '../../services/typeProps';
import TextInputComponent from '../AddPage/TextInputComponent';

const Page5: React.FC<PageProps> = ({data, setData}) => {
  const handleFatherNameChange = (value: string) => {
    setData({...data, fatherName: value});
  };

  const handleMotherNameChange = (value: string) => {
    setData({...data, motherName: value});
  };

  const handleYourRelationshipWithMartyrChange = (value: string) => {
    setData({...data, yourRelationshipWithMartyr: value});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
      <TextInputComponent
        label="Họ và tên bố"
        value={data.fatherName}
        setValue={handleFatherNameChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Họ và tên mẹ"
        value={data.motherName}
        setValue={handleMotherNameChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Quan hệ người tìm kiếm (bạn) với liệt sĩ"
        value={data.yourRelationshipWithMartyr}
        setValue={handleYourRelationshipWithMartyrChange}
        type="text"
        width={100}
      />
    </View>
  );
};

export default Page5;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: vw(5)},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
