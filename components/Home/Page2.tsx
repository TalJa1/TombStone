import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân của liệt sĩ</Text>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
