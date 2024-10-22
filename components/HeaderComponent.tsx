import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { backIcon } from '../assets/svgXML';
import { vw } from '../services/styleSheet';
import { HeaderComponentProps } from '../services/typeProps';

const HeaderComponent: React.FC<HeaderComponentProps> = ({title}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.header}>
    <TouchableOpacity
      style={styles.headerBtn}
      onPress={() => navigation.goBack()}>
      {backIcon(vw(7), vw(7))}
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vw(5),
    columnGap: vw(5),
    paddingHorizontal: vw(5),
  },
  headerBtn: {
    backgroundColor: '#91A89526',
    borderRadius: vw(50),
    padding: vw(2),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#547958',
  },
});
