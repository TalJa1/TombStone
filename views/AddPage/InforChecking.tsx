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
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';
import {cancelIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const InforChecking = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<InforDetail, 'Martyr'>>();

  const {...data} = route.params;

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Text>InforChecking</Text>
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
        <Text style={styles.headerTitle}>Xác nhận thông tin</Text>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigation.goBack()}>
          {cancelIcon(vw(7), vw(7), '#91A895')}
        </TouchableOpacity>
      </View>
      <Text style={styles.headerDes}>
        Hãy xác nhận thông tin hồ sơ lần cuối cùng.
      </Text>
    </View>
  );
};

export default InforChecking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    padding: vw(5),
    rowGap: vh(1.5),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  headerDes: {
    fontSize: 12,
    color: '#000000',
  },
  headerBtn: {
    alignSelf: 'flex-end',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
