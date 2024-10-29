/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backIcon, bellIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';

const SearchResultDetail = () => {
  useStatusBar('#547958');
  const route = useRoute<RouteProp<InforDetail, 'SearchDataDetail'>>();
  const data = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Text>Search Result Detail</Text>
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
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(6), vw(6), 'white')}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Hồ sơ liệt sĩ</Text>
      <View style={styles.bellIcon}>{bellIcon(vw(6), vw(6), '#ECF3A3')}</View>
    </View>
  );
};

export default SearchResultDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91A895',
  },
  headerTitle: {
    fontSize: vw(4),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bellIcon: {
    backgroundColor: '#91A89580',
    padding: vw(2),
    borderRadius: vw(50),
  },
  backBtn: {
    backgroundColor: '#91A89526',
    padding: vw(2),
    borderRadius: vw(50),
  },
  header: {
    backgroundColor: '#547958',
    paddingVertical: vw(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(5),
    paddingTop: vh(2),
    paddingBottom: vh(1),
  },
});
