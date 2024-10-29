/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import RNPickerSelect from 'react-native-picker-select';
import {vietnamLocations, extractProvince} from '../../services/renderData';

const MartyrProfile = () => {
  useStatusBar('white');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [formData, setFormData] = useState({
    name: '',
    hometown: '',
    province: '',
    birthYear: '',
    deathDate: '',
    unit: '',
    rank: '',
    status: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };

  const handleStatusChange = (status: string) => {
    setFormData({...formData, status});
  };

  const handleSearch = () => {
    navigation.navigate('SearchResult', {data: formData});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
          <View style={styles.fullWidth}>
            <Text style={styles.fieldTitle}>Tên</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập tên liệt sĩ (có dấu, không dấu)"
              placeholderTextColor="#868686"
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Quê quán</Text>
              <TextInput
                style={styles.input}
                placeholder="Quê quán"
                placeholderTextColor="#868686"
                value={formData.hometown}
                onChangeText={text => handleInputChange('hometown', text)}
              />
            </View>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Tỉnh</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={value => handleInputChange('province', value)}
                items={vietnamLocations.map(location => {
                  const province = extractProvince(location);
                  return {label: province, value: province};
                })}
                placeholder={{label: 'Chọn tỉnh', value: ''}}
                value={formData.province}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Năm sinh</Text>
              <TextInput
                style={styles.input}
                placeholder="Ngày sinh"
                placeholderTextColor="#868686"
                value={formData.birthYear}
                onChangeText={text => handleInputChange('birthYear', text)}
              />
            </View>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Ngày mất</Text>
              <TextInput
                style={styles.input}
                placeholder="Ngày mất"
                placeholderTextColor="#868686"
                value={formData.deathDate}
                onChangeText={text => handleInputChange('deathDate', text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Đơn vị</Text>
              <TextInput
                style={styles.input}
                placeholder="Đơn vị"
                placeholderTextColor="#868686"
                value={formData.unit}
                onChangeText={text => handleInputChange('unit', text)}
              />
            </View>
            <View style={styles.halfWidth}>
              <Text style={styles.fieldTitle}>Cấp bậc</Text>
              <TextInput
                style={styles.input}
                placeholder="Cấp bậc"
                placeholderTextColor="#868686"
                value={formData.rank}
                onChangeText={text => handleInputChange('rank', text)}
              />
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.fieldTitle}>Trạng thái</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: vw(2),
              }}>
              {[
                'Đã xác định',
                'Chưa xác định',
                'Vô danh',
                'Thiếu thông tin',
                'Đủ thông tin',
              ].map(status => (
                <TouchableOpacity
                  key={status}
                  style={[
                    styles.statusButton,
                    formData.status === status && styles.selectedStatusButton,
                    (status === 'Thiếu thông tin' ||
                      status === 'Đủ thông tin') &&
                      styles.disabledStatusButton,
                  ]}
                  disabled={
                    status === 'Thiếu thông tin' || status === 'Đủ thông tin'
                  }
                  onPress={() => handleStatusChange(status)}>
                  <Text
                    style={[
                      styles.statusButtonText,
                      formData.status === status &&
                        styles.selectedStatusButtonText,
                      (status === 'Thiếu thông tin' ||
                        status === 'Đủ thông tin') &&
                        styles.disabledStatusButtonText,
                    ]}>
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.bottomBtnGrp}>
            <TouchableOpacity style={styles.applyButton} onPress={handleSearch}>
              <Text style={styles.applyButtonText}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
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
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(6), vw(6), '#547958')}
      </TouchableOpacity>
      <Text style={styles.headerText}>Tìm kiếm hồ sơ liệt sĩ</Text>
    </View>
  );
};

export default MartyrProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vw(4),
    backgroundColor: 'white',
    columnGap: vw(3),
  },
  headerBtn: {
    alignItems: 'center',
    backgroundColor: '#91A89526',
    padding: vw(2),
    borderRadius: vw(50),
  },
  headerText: {
    fontSize: vw(4),
    fontWeight: 'bold',
    color: '#547958',
  },
  fieldTitle: {
    fontSize: 14,
    color: '#868686',
    marginBottom: vh(1),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: vw(2),
    marginBottom: vh(1.5),
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullWidth: {
    width: '100%',
    marginBottom: vh(1.5),
  },
  halfWidth: {
    width: '48%',
    marginBottom: vh(1.5),
  },
  statusContainer: {
    marginBottom: vh(1.5),
  },
  statusButton: {
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'flex-start',
    borderRadius: vw(50),
    marginBottom: vh(1.5),
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
  disabledStatusButton: {
    backgroundColor: '#ccc',
  },
  disabledStatusButtonText: {
    color: '#868686',
  },
  applyButton: {
    backgroundColor: '#547958',
    paddingVertical: vh(1.5),
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  backButton: {
    backgroundColor: '#ECF3A3',
    padding: vw(3),
    borderRadius: vw(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: vw(2),
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
