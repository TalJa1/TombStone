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

const FilterModalComponent: React.FC<FilterModalProps> = ({
  isVisible,
  onClose,
  filterData,
  handleFilterChange,
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
                placeholder="Tên"
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
                  placeholder="Năm sinh"
                  value={filterData.birthYear}
                  onChangeText={text => handleFilterChange('birthYear', text)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Ngày mất</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày mất"
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
                  value={filterData.unit}
                  onChangeText={text => handleFilterChange('unit', text)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.fieldTitle}>Cấp bậc</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Cấp bậc"
                  value={filterData.level}
                  onChangeText={text => handleFilterChange('level', text)}
                />
              </View>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.fieldTitle}>Trạng thái</Text>
              {['Đã xác định', 'Chưa xác định', 'Vô danh'].map(status => (
                <TouchableOpacity
                  key={status}
                  style={[
                    styles.statusButton,
                    filterData.status === status && styles.selectedStatusButton,
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
            <TouchableOpacity style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyButtonText}>Áp dụng</Text>
            </TouchableOpacity>
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
    borderRadius: 5,
    padding: vw(2),
    marginBottom: vh(1.5),
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
    borderRadius: 5,
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
