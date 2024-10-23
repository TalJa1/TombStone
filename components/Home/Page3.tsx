import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageProps} from '../../services/typeProps';
import TextInputComponent from '../AddPage/TextInputComponent';
import {vw} from '../../services/styleSheet';

const Page3: React.FC<PageProps> = ({data, setData}) => {
  const handleLevelChange = (value: string) => {
    setData({...data, level: value});
  };

  const handleUnitChange = (value: string) => {
    setData({...data, unit: value});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
      <TextInputComponent
        label="Cấp bậc"
        value={data.level}
        setValue={handleLevelChange}
        type="text"
        width={100}
      />
      <TextInputComponent
        label="Đơn vị"
        value={data.unit}
        setValue={handleUnitChange}
        type="text"
        width={100}
      />
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: vw(5)},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
