import {
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
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerBackBtn}>
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
});
