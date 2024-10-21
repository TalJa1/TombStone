import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const OnboardingPage = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>OnboardingPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547958',
  },
});
