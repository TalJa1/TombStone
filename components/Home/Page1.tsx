import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {cameraIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {Page1BottomData, Page1TopData} from '../../services/renderData';

const Page1: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Các giấy tờ xác nhận</Text>
        <View style={styles.row}>
          {Page1TopData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView label={item} />
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.title}>Các vật phẩm liên quan của liệt sĩ</Text>
        <View style={styles.row}>
          {Page1BottomData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView label={item} />
              </View>
            );
          })}
        </View>
        <View style={styles.imagePickerContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            {cameraIcon(vw(8), vw(8))}
            <Text style={styles.upTxt}>Tải lên</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Tiêu đề</Text>
        </View>
      </View>
    </View>
  );
};

const ImagePickerView: React.FC<{label: string}> = ({label}) => {
  return (
    <View style={styles.imagePickerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        {cameraIcon(vw(8), vw(8))}
        <Text style={styles.upTxt}>Tải lên</Text>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: vw(5),
  },
  title: {
    textAlign: 'center',
    color: '#D8672E',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: vh(2),
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%', // Adjust the width to fit two items per row with some spacing
    marginBottom: vh(2),
  },
  imagePickerContainer: {
    padding: vw(4),
    borderRadius: vw(2),
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(1),
    height: vh(20),
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#969696',
  },
  upTxt: {
    color: '#969696',
    fontSize: 16,
    marginLeft: vw(2),
  },
  label: {
    color: '#484848',
    fontSize: 16,
    textAlign: 'center',
  },
});
