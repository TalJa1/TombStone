import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vw} from '../../services/styleSheet';
import TextInputComponent from '../AddPage/TextInputComponent';
import {PageProps} from '../../services/typeProps';

const Page4: React.FC<PageProps> = ({data, setData}) => {
  const handleDeathDateChange = (value: string) => {
    setData({...data, deathDate: value});
  };

  const handleDeathUnitChange = (value: string) => {
    setData({...data, deathUnit: value});
  };

  const handleDeathReasonChange = (value: string) => {
    setData({...data, deathReason: value});
  };

  const handleFirstTombChange = (value: string) => {
    setData({...data, firstTomb: value});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
      <TextInputComponent
        label="Hy sinh ngày"
        value={data.deathDate}
        setValue={handleDeathDateChange}
        type="fullDate"
        width={100}
      />
      <TextInputComponent
        label="Đơn vị hi sinh"
        value={data.deathUnit}
        setValue={handleDeathUnitChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Lý do hi sinh"
        value={data.deathReason}
        setValue={handleDeathReasonChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Nơi an táng ban đầu"
        value={data.firstTomb}
        setValue={handleFirstTombChange}
        type="text"
        width={100}
      />
    </View>
  );
};

export default Page4;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: vw(5)},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
