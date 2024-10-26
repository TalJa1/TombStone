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
import {backIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Profile = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.headerBack}
          onPress={() => {
            navigation.goBack();
          }}>
          {backIcon(vw(6), vw(6), '#547958')}
        </TouchableOpacity>
        <View>
          <Text style={styles.headerLabel}>Theo dõi “Dấu tích” </Text>
          <Text style={styles.headerDes}>
            Yêu cầu tìm kiếm mộ liệt sĩ, người thân của bạn
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#547958',
  },
  headerBack: {
    backgroundColor: 'white',
    borderRadius: vw(50),
    alignSelf: 'flex-start',
    padding: vw(2),
  },
  headerTop: {
    flexDirection: 'row',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    columnGap: vw(3),
  },
  headerLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  headerDes: {
    fontSize: 12,
    color: 'white',
  },
});
