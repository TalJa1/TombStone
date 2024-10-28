/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';
import {backIcon, filterIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import TabContentMartyrComponent from '../../components/Search/TabContentMartyrComponent';
import {martyrSearchData} from '../../services/renderData';
import FilterModalComponent from '../../components/Search/FilterModalComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TombLocationDetail = () => {
  useStatusBar('transparent');
  const route = useRoute<RouteProp<InforDetail, 'TombLocation'>>();
  const headerTitle = route.params.title;
  const renderData = martyrSearchData;
  const [selectedTab, setSelectedTab] = useState('Đã xác định');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    name: '',
    birthYear: '',
    province: '',
    hometown: '',
    deathDate: '',
    status: '',
    unit: '',
    level: '',
  });

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilterData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Đã xác định':
        return (
          <TabContentMartyrComponent
            data={renderData.filter(a => a.status === 'Đã xác định')}
          />
        );
      case 'Chưa xác định':
        return (
          <TabContentMartyrComponent
            data={renderData.filter(a => a.status === 'Chưa xác định')}
          />
        );
      case 'Vô danh':
        return (
          <TabContentMartyrComponent
            data={renderData.filter(a => a.status === 'Vô danh')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header title={headerTitle} setIsModalVisible={setIsModalVisible} />
          <TabRender selectedTab={selectedTab} onTabPress={handleTabPress} />
          {renderContent()}
        </View>
        <View style={{height: vh(5)}} />
      </ScrollView>
      <FilterModalComponent
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        filterData={filterData}
        handleFilterChange={handleFilterChange}
      />
    </SafeAreaView>
  );
};

const TabRender: React.FC<{
  selectedTab: string;
  onTabPress: (tab: string) => void;
}> = ({selectedTab, onTabPress}) => {
  return (
    <View style={styles.tabsContainer}>
      {['Đã xác định', 'Chưa xác định', 'Vô danh'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === tab && styles.selectedTab]}
          onPress={() => onTabPress(tab)}>
          <Text
            style={[
              styles.tabText,
              selectedTab === tab && styles.selectedTabText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Header: React.FC<{
  title: string;
  setIsModalVisible: (visible: boolean) => void;
}> = ({title, setIsModalVisible}) => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleHidePress = () => {
    setIsTextVisible(false);
  };

  return (
    <View>
      <Image
        source={require('../../assets/Home/tp3.png')}
        style={styles.headerImg}
      />
      <View style={{position: 'absolute', top: vh(2), left: vw(5)}}>
        <View style={styles.headerTitleGrp}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            {backIcon(vw(5), vw(5), 'white')}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NTLS {title}</Text>
        </View>
      </View>
      <View style={{width: vw(100)}}>
        {isTextVisible ? (
          <View style={styles.headerDes}>
            <Text style={styles.headerDesTxt}>
              Nghĩa trang liệt sĩ Quốc gia {title} là nơi quy tụ 10.263 phần mộ
              của các liệt sĩ có tổng diện tích 140.000m2. Phần đất mộ được phân
              thành 10 khu vực chính. Nghĩa trang liệt sĩ Trường Sơn là nơi an
              nghỉ đời đời của các anh hùng liệt sĩ đã hi sinh trên tuyến đường
              mòn Hồ Chí Minh trong thời kì chống Mỹ cứu nước.{' '}
              <Text style={styles.hideButton} onPress={handleHidePress}>
                Ẩn
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: vw(4),
                marginTop: vh(1.5),
              }}>
              <TouchableOpacity
                style={styles.searchContainer}
                onPress={() => setIsModalVisible(true)}>
                <Text style={{color: '#D4D4D4', fontSize: 16}}>
                  Tìm kiếm mộ liệt sĩ
                </Text>
                {filterIcon(vw(5), vw(5), 'white')}
              </TouchableOpacity>
              {searchIcon(vw(6), vw(6), 'white')}
            </View>
          </View>
        ) : (
          <View style={styles.searchIconContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsTextVisible(true);
              }}>
              <View style={styles.searchCenterBtn}>
                {searchIcon(vw(7), vw(7), 'white')}
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TombLocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImg: {
    width: '100%',
    height: 200,
  },
  headerTitleGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(3),
  },
  backBtn: {
    backgroundColor: '#91A8957D',
    padding: vw(2),
    borderRadius: vw(50),
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  headerDes: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    backgroundColor: '#547958',
  },
  headerDesTxt: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  hideButton: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    color: '#ECF3A3',
  },
  searchIconContainer: {
    alignItems: 'center',
    backgroundColor: '#547958',
    height: vh(3),
    width: vw(100),
  },
  searchCenterBtn: {
    padding: vw(1),
    borderRadius: vw(50),
    backgroundColor: '#547958',
    position: 'relative',
    top: vh(-2.5),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-start',
    flex: 1,
    padding: vw(2),
    borderRadius: vw(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    paddingBottom: vh(1.5),
    paddingHorizontal: vw(3),
    width: '33%',
  },
  selectedTab: {
    backgroundColor: '#547958',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabText: {
    fontSize: 14,
    color: '#547958',
    textAlign: 'center',
  },
  selectedTabText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  tabContent: {
    padding: vw(5),
  },
});
