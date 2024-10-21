/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {CheckStartPage} from '../../services/renderData';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {saveData} from '../../services/storage';

const OffBoarding = () => {
  useStatusBar('#547958');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const renderData = CheckStartPage;

  const handleStart = () => {
    saveData('isMain', true);
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Text style={styles.title}>{renderData.title}</Text>
        <View>
          <Image source={renderData.img} style={styles.image} />
          <Text style={styles.des}>{renderData.description}</Text>
        </View>
        <TouchableOpacity style={styles.btnStart} onPress={handleStart}>
          <Text style={styles.btnStartText}>Bắt đầu</Text>
        </TouchableOpacity>
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
  btnStart: {
    backgroundColor: 'white',
    paddingVertical: vh(2),
    marginHorizontal: vw(5),
    borderRadius: vw(2),
    marginTop: vw(5),
  },
  btnStartText: {
    color: '#547958',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
