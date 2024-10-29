import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const UndefinedTomb = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Undefined Tomb</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UndefinedTomb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
