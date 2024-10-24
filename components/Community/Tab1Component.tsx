import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tab1Component = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1Component</Text>
    </View>
  );
};

export default Tab1Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
