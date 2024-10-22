import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import HeaderComponent from '../../components/HeaderComponent';

const AddPage = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title="Thêm hồ sơ liệt sĩ" />
        <View>
          <Text>AddPage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
