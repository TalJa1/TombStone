/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InforDetail} from '../../services/typeProps';
import {RouteProp, useRoute} from '@react-navigation/native';
import {backIcon, filterIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import TabContentMartyrComponent from '../../components/Search/TabContentMartyrComponent';
import {
  extractProvince,
  martyrSearchData,
  vietnamLocations,
} from '../../services/renderData';

const TombLocationDetail = () => {
  useStatusBar('transparent');
  const route = useRoute<RouteProp<InforDetail, 'TombLocation'>>();
  const headerTitle = route.params.title;
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
            data={martyrSearchData.filter(a => a.status === 'Đã xác định')}
          />
        );
      case 'Chưa xác định':
        return (
          <TabContentMartyrComponent
            data={martyrSearchData.filter(a => a.status === 'Chưa xác định')}
          />
        );
      case 'Vô danh':
        return (
          <TabContentMartyrComponent
            data={martyrSearchData.filter(a => a.status === 'Vô danh')}
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
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Bộ lọc tìm kiếm nâng cao</Text>
            <ScrollView>
              <TextInput
                style={styles.input}
                placeholder="Tên"
                value={filterData.name}
                onChangeText={text => handleFilterChange('name', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Năm sinh"
                value={filterData.birthYear}
                onChangeText={text => handleFilterChange('birthYear', text)}
              />
              <RNPickerSelect
                onValueChange={value => handleFilterChange('province', value)}
                items={vietnamLocations.map(location => {
                  const province = extractProvince(location);
                  return {label: province, value: province};
                })}
                style={pickerSelectStyles}
                placeholder={{label: 'Chọn tỉnh', value: ''}}
                value={filterData.province}
              />
              <TextInput
                style={styles.input}
                placeholder="Quê quán"
                value={filterData.hometown}
                onChangeText={text => handleFilterChange('hometown', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Ngày mất"
                value={filterData.deathDate}
                onChangeText={text => handleFilterChange('deathDate', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Đơn vị"
                value={filterData.unit}
                onChangeText={text => handleFilterChange('unit', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Cấp bậc"
                value={filterData.level}
                onChangeText={text => handleFilterChange('level', text)}
              />
              <View style={styles.statusContainer}>
                {['Đã xác định', 'Chưa xác định', 'Vô danh'].map(status => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.statusButton,
                      filterData.status === status &&
                        styles.selectedStatusButton,
                    ]}
                    onPress={() => handleFilterChange('status', status)}>
                    <Text
                      style={[
                        styles.statusButtonText,
                        filterData.status === status &&
                          styles.selectedStatusButtonText,
                      ]}>
                      {status}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.applyButtonText}>Áp dụng</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
          <TouchableOpacity style={styles.backBtn}>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: vw(5),
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: vh(2),
    color: 'black',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: vw(2),
    marginBottom: vh(1.5),
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: vh(1.5),
  },
  statusButton: {
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedStatusButton: {
    backgroundColor: '#547958',
  },
  statusButtonText: {
    color: '#000',
  },
  selectedStatusButtonText: {
    color: 'white',
  },
  applyButton: {
    backgroundColor: '#547958',
    paddingVertical: vh(1.5),
    borderRadius: 5,
    alignItems: 'center',
    marginTop: vh(2),
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: vw(2),
    marginBottom: vh(1.5),
    color: 'black',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: vw(2),
    marginBottom: vh(1.5),
    color: 'black',
  },
});
