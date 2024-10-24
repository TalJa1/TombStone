import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchingStatusComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>SearchingStatusComponent</Text>
    </View>
  );
};

export default SearchingStatusComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
