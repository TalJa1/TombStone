import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const OffBoarding = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>OffBoarding</Text>
      </View>
    </SafeAreaView>
  );
};

export default OffBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547958',
  },
});
