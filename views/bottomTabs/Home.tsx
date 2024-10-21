/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {vh, vw} from '../../services/styleSheet';
import {bellIcon} from '../../assets/svgXML';

const Home = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.topGrp}>
            <Header />
            <TopDataRender />
          </View>
        </View>
        <View style={{height: vh(10)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const TopDataRender: React.FC = () => {
  return (
    <View>
      <Text style={styles.followText}>Theo dõi “Dấu tích” </Text>
      <Text style={styles.subFollowText}>
        Yêu cầu tìm kiếm mộ liệt sĩ, người thân của bạn:
      </Text>
      <View></View>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', columnGap: vw(2)}}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/Home/avatar.png')}
        />
        <View>
          <Text style={styles.name}>Lê Công Duy</Text>
          <Text style={styles.subName}>Xem hoạt động của bạn</Text>
        </View>
      </View>
      <View style={styles.bell}>{bellIcon(vw(7), vw(7))}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(2),
  },
  topGrp: {
    paddingHorizontal: vw(5),
    backgroundColor: '#547958',
    paddingBottom: vh(2),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerImg: {
    width: vw(10),
    height: vw(10),
    resizeMode: 'contain',
  },
  bell: {
    backgroundColor: '#91A89580',
    padding: vw(2),
    borderRadius: vw(50),
  },
  name: {
    color: '#ECF3A3',
    fontSize: 16,
    fontWeight: '700',
  },
  subName: {
    color: '#91A895',
    fontSize: 12,
  },
  followText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  subFollowText: {
    color: '#D4D4D4',
    fontSize: 12,
  },
});
