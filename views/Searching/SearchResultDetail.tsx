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
import {backIcon, bellIcon, editIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import SearchingStatusComponent from '../../components/SearchingStatusComponent';

interface DataInterface {
  name: string;
  birthYear: string | null;
  province: string;
  hometown: string;
  deathDate: string;
  status: string;
  unit: string;
  level: string;
}

const SearchResultDetail = () => {
  useStatusBar('#547958');
  const route = useRoute<RouteProp<InforDetail, 'SearchDataDetail'>>();
  const data: DataInterface = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <View>
            <RenderData
              title="Thông tin cá nhân của LS"
              names={[
                'Họ và tên liệt sĩ:',
                'Năm sinh:',
                'Giới tính:',
                'Quê quán:',
              ]}
              values={[data.name, data.birthYear ?? '', 'Nam', data.hometown]}
            />
            <RenderData
              title="Thông tin công tác, hy sinh"
              names={[
                'Nhập ngũ:',
                'Hy sinh ngày:',
                'Đơn vị:',
                'Nơi hy sinh:',
                'Lý do hinh sinh:',
                'Nơi an táng ban đầu:',
                'Vị trí mộ phần:',
              ]}
              values={[
                '08/1978',
                data.deathDate,
                data.unit,
                'Quảng Trị',
                'Bị địch bắn',
                'Lộ 2, Takeo, Campuchia',
                'NTLS tỉnh Vĩnh Long',
              ]}
            />
            <RenderData
              title="Thông tin cá nhân của LS"
              names={['Họ tên bố:', 'Họ tên mẹ:', 'Quan hệ người tìm kiếm:']}
              values={['Bùi Văn Năm (còn sống)', 'Đoàn Thị Bô', 'Em gái']}
            />
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: 'black',
                marginTop: vh(-3),
              }}>
              <SearchingStatusComponent
                currentState={
                  data.status === 'Chưa xác định'
                    ? 3
                    : data.status === 'Đã xác định'
                    ? 4
                    : 0
                }
                label="Trạng thái tìm kiếm mộ"
              />
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.draftButton]}>
                <Text style={[styles.buttonText, styles.draftButtonText]}>
                  Lưu vào bản nháp
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.shareButton]}>
                <Text style={[styles.buttonText, styles.shareButtonText]}>
                  Chia sẻ hồ sơ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: vh(5)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderData: React.FC<{
  title: string;
  values: string[];
  names: string[];
}> = ({title, values, names}) => {
  return (
    <View style={styles.container1}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {editIcon(vw(6), vh(6))}
      </View>
      {names.map((name, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.value}>{values[index]}</Text>
        </View>
      ))}
    </View>
  );
};

const Header: React.FC<{}> = () => {
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
    backgroundColor: 'white',
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
  container1: {
    paddingHorizontal: vw(5),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#547958',
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    marginVertical: vh(0.5),
    columnGap: vw(2),
  },
  name: {
    color: '#91A895',
    fontSize: 16,
  },
  value: {
    color: '#000000',
    fontSize: 16,
    flex: 1,
  },
  container2: {
    padding: vw(4),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: vh(2),
    alignItems: 'center',
    borderRadius: 16,
    marginHorizontal: vw(1),
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#547958',
  },
  shareButton: {
    backgroundColor: '#547958',
  },
  buttonText: {
    fontSize: vw(4),
  },
  draftButtonText: {
    color: '#547958',
  },
  shareButtonText: {
    color: 'white',
  },
});
