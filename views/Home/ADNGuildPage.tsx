/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ADNGuildPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text>ADNGuildPage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ADNGuildPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
