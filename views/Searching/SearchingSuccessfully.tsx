/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {backIcon, readmoreNextIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {HomeNewsData} from '../../services/renderData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchingSuccessfully = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC = () => {
  return (
    <View>
      <View style={styles.mainTitleGrp}>
        <Text style={styles.mainTitle}>Mới nhất</Text>
        <TouchableOpacity style={styles.btnReadmore}>
          <Text style={styles.btnReadmoreTxt}>Xem thêm</Text>
          {readmoreNextIcon(vw(6), vw(6), '#547958')}
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: vw(5)}}>
        {HomeNewsData.map((item, index) => {
          return (
            <View key={index} style={styles.news}>
              <Image source={item.img} style={styles.newsImg} />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  height: vw(30),
                }}>
                <View style={styles.topNewsGrp}>
                  <View
                    style={
                      item.status === 'Tìm mộ thành công'
                        ? styles.statusSuccess
                        : styles.statusStrange
                    }>
                    <Text
                      style={
                        item.status === 'Tìm mộ thành công'
                          ? styles.statusTxtSuccess
                          : styles.statusTxtStrange
                      }>
                      {item.status}
                    </Text>
                  </View>
                  <Text style={styles.newsDate}>{item.date}</Text>
                </View>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBackBtn}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(6), vw(6), '#547958')}
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        {searchIcon(vw(6), vw(6), '#91A895')}

        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
          placeholderTextColor="#91A895"
        />
      </View>
    </View>
  );
};

export default SearchingSuccessfully;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    columnGap: vw(3),
  },
  headerBackBtn: {
    backgroundColor: '#91A89526',
    borderRadius: vw(50),
    padding: vw(2),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: vw(2),
    borderWidth: 1,
    borderColor: '#547958',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  mainTitleGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#547958',
  },
  btnReadmore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnReadmoreTxt: {
    color: '#547958',
    marginRight: vw(2),
  },
  news: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(1),
    padding: vw(3),
    backgroundColor: '#EEF2EE',
    borderRadius: 8,
    overflow: 'hidden',
    columnGap: vw(2),
  },
  newsImg: {
    height: vw(30),
    width: vw(27),
    resizeMode: 'cover',
    borderRadius: 8,
  },
  newsContent: {
    flex: 1,
    marginLeft: vw(3),
  },
  topNewsGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusSuccess: {
    backgroundColor: '#ECF3A3',
    padding: vw(1),
    borderRadius: 8,
  },
  statusStrange: {
    backgroundColor: '#6FA078',
    padding: vw(1),
    borderRadius: 8,
  },
  statusTxtSuccess: {
    fontSize: 12,
    color: '#547958',
  },
  statusTxtStrange: {
    fontSize: 12,
    color: 'white',
  },
  newsDate: {
    color: '#547958',
    fontSize: 12,
  },
  newsTitle: {
    color: '#547958',
    fontSize: 18,
    fontWeight: '500',
  },
  newsDescription: {
    color: '#343434',
    fontSize: 12,
  },
});
