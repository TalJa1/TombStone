/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageProps} from '../../services/typeProps';
import TextInputComponent from '../AddPage/TextInputComponent';
import {vw} from '../../services/styleSheet';

const Page2: React.FC<PageProps> = ({setData, data}) => {
  const handleNameChange = (value: string) => {
    setData({...data, name: value});
  };

  const handleBirthYearChange = (value: string) => {
    setData({...data, birthYear: value});
  };

  const handleSexChange = (value: string) => {
    setData({...data, sex: value});
  };

  const handleHometownChange = (value: string) => {
    setData({...data, hometown: value});
  };

  const handleArmyJoinDateChange = (value: string) => {
    setData({...data, armyJoinDate: value});
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <TextInputComponent
          label="Năm sinh"
          value={data.birthYear}
          setValue={handleBirthYearChange}
          type="number"
          width={45}
        />
        <TextInputComponent
          label="Giới tính"
          value={data.sex}
          setValue={handleSexChange}
          type="select"
          width={45}
          options={[
            {
              label: 'Nam',
              value: 'Nam',
            },
            {
              label: 'Nữ',
              value: 'Nữ',
            },
          ]}
        />
      </View>
      <TextInputComponent
        label="Quê quán"
        value={data.hometown}
        setValue={handleHometownChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Ngày nhập ngũ"
        value={data.armyJoinDate}
        setValue={handleArmyJoinDateChange}
        type="date"
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
