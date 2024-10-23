import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { PageProps } from '../../services/typeProps';
import { vw } from '../../services/styleSheet';

const Page6: React.FC<PageProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
      <Text>Page6</Text>
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
