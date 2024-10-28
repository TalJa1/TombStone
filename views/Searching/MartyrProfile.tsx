/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backIcon} from '../../assets/svgXML';
import {vw} from '../../services/styleSheet';

const MartyrProfile = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Text>MartyrProfile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(6), vw(6), '#547958')}
      </TouchableOpacity>
      <Text style={styles.headerText}>Tìm kiếm hồ sơ liệt sĩ</Text>
    </View>
  );
};

export default MartyrProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vw(4),
    paddingHorizontal: vw(5),
    backgroundColor: 'white',
    columnGap: vw(3),
  },
  headerBtn: {
    alignItems: 'center',
    backgroundColor: '#91A89526',
    padding: vw(2),
    borderRadius: vw(50),
  },
  headerText: {
    fontSize: vw(4),
    fontWeight: 'bold',
    color: '#547958',
  },
});
