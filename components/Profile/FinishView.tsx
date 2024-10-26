/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {StatusData} from '../../services/renderData';
import {MartyrProfileItem} from '../../services/typeProps';
import {nextIcon} from '../../assets/svgXML';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const FinishView = () => {
  const renderData: MartyrProfileItem[] = [];
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleViewDetail = (index: number) => {
    navigation.navigate('StatusDetail', {dataIndex: index});
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>
          Yêu cầu tìm kiếm <Text>ĐÃ HOÀN TẤT:</Text>
          <Text>19:23:01 |</Text>
          <Text>15/10/2024. </Text>
        </Text>
      </View>
      <View>
        {renderData.map((item, index) => {
          return (
            <View key={index} style={styles.tombView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.nameTxt}>{item.name}</Text>
                <View
                  style={[
                    {
                      backgroundColor: '#D4D4D4',
                      paddingHorizontal: vw(2),
                      paddingVertical: vh(0.5),
                      borderRadius: vw(20),
                    },
                    centerAll,
                  ]}>
                  <Text style={styles.statusTxt}>
                    {StatusData[item.status]}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.martyrInfoText}>
                    {item.birthYear} - {item.armyJoinDate}
                  </Text>
                  <Text style={styles.martyrInfoText}>{item.hometown}</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewBtn}
                  onPress={() => handleViewDetail(index)}>
                  {nextIcon(vw(6), vw(6), '#ECF3A3')}
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FinishView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameTxt: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  statusTxt: {
    color: '#343434',
    fontSize: 10,
  },
  martyrInfoText: {
    color: '#000000',
    fontSize: 14,
  },
  viewBtn: {
    backgroundColor: '#547958',
    padding: vw(1.5),
    borderRadius: vw(50),
    alignSelf: 'flex-end',
  },
  tombView: {
    backgroundColor: '#ECF3A3',
    padding: vw(4),
    rowGap: vh(1),
    borderRadius: 20,
    marginVertical: vh(1),
  },
});
