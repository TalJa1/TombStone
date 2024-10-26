import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FinishView = () => {
  return (
    <View style={styles.container}>
      <Text>FinishView</Text>
    </View>
  );
};

export default FinishView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
