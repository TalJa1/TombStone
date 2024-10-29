import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const SearchingSuccessfully = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>SearchingSuccessfully</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchingSuccessfully;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
