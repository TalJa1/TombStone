import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ActiveView = () => {
  return (
    <View style={styles.container}>
      <Text>ActiveView</Text>
    </View>
  );
};

export default ActiveView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
