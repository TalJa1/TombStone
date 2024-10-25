import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tab1RenderComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1RenderComponent</Text>
    </View>
  );
};

export default Tab1RenderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
