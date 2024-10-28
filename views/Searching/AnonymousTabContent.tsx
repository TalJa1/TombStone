import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AnonymousTabContent = () => {
  return (
    <View style={styles.container}>
      <Text>AnonymousTabContent</Text>
    </View>
  );
};

export default AnonymousTabContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
