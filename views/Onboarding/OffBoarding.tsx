/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {CheckStartPage} from '../../services/renderData';
import {vw} from '../../services/styleSheet';

const OffBoarding = () => {
  useStatusBar('#547958');
  const renderData = CheckStartPage;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{renderData.title}</Text>
        <Image source={renderData.img} style={styles.image} />
        <Text style={styles.des}>{renderData.description}</Text>
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
  image: {
    width: vw(100),
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: vw(5),
    textAlign: 'center',
  },
  des: {
    fontSize: 14,
    color: '#ECF3A3',
    textAlign: 'center',
    paddingHorizontal: vw(5),
    marginTop: vw(2),
  },
});
