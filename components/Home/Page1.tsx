import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Page1 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Các giấy tờ xác nhận</Text>
      </View>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#D8672E',
    fontSize: 18,
    fontWeight: '800',
  },
});
