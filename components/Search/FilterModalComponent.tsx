/* eslint-disable react-native/no-inline-styles */
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vietnamLocations, extractProvince} from '../../services/renderData';
import {FilterModalProps} from '../../services/typeProps';
import {vw, vh} from '../../services/styleSheet';
import RNPickerSelect from 'react-native-picker-select';
import {cancelIcon} from '../../assets/svgXML';

const FilterModalComponent: React.FC<
  FilterModalProps & {
    renderData: any[];
    setRenderFilter: React.Dispatch<React.SetStateAction<any[]>>;
    handleApplyFilter: () => void;
  }
> = ({
  isVisible,
  onClose,
  filterData,
  handleFilterChange,
  handleApplyFilter,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Bộ lọc tìm kiếm nâng cao</Text>
          <ScrollView>
            <View style={styles.fullWidth}>
              <Text style={styles.fieldTitle}>Tên</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập tên liệt sĩ (có dấu, không dấu)"
                placeholderTextColor="#868686"
                value={filterData.name}
                onChangeText={text => handleFilterChange('name', text)}
              />
            </View>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Quê quán</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quê quán"
                  placeholderTextColor="#868686"
                  value={filterData.hometown}
                  onChangeText={text => handleFilterChange('hometown', text)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Tỉnh</Text>
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
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Năm sinh</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày sinh"
                  placeholderTextColor="#868686"
                  value={filterData.birthYear}
                  onChangeText={text => handleFilterChange('birthYear', text)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Ngày mất</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày mất"
                  placeholderTextColor="#868686"
                  value={filterData.deathDate}
                  onChangeText={text => handleFilterChange('deathDate', text)}
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
                  value={filterData.unit}
                  onChangeText={text => handleFilterChange('unit', text)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Cấp bậc</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Cấp bậc"
                  placeholderTextColor="#868686"
                  value={filterData.level}
                  onChangeText={text => handleFilterChange('level', text)}
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
                      filterData.status === status &&
                        styles.selectedStatusButton,
                      (status === 'Thiếu thông tin' ||
                        status === 'Đủ thông tin') &&
                        styles.disabledStatusButton,
                    ]}
                    onPress={() => handleFilterChange('status', status)}
                    disabled={
                      status === 'Thiếu thông tin' || status === 'Đủ thông tin'
                    }>
                    <Text
                      style={[
                        styles.statusButtonText,
                        filterData.status === status &&
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
              <TouchableOpacity style={styles.backButton} onPress={onClose}>
                {cancelIcon(vw(6), vw(6), '#000')}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleApplyFilter}>
                <Text style={styles.applyButtonText}>Tìm kiếm</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModalComponent;

const styles = StyleSheet.create({
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
