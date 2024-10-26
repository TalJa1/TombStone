/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {MartyrProfile, StatusData} from '../../services/renderData';
import {MartyrProfileItem} from '../../services/typeProps';
import {nextIcon} from '../../assets/svgXML';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const FinishView = () => {
  const [renderData, setRenderData] = useState<MartyrProfileItem[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleViewDetail = (index: number) => {
    navigation.navigate('StatusDetail', {dataIndex: index});
  };

  useEffect(() => {
    setRenderData(MartyrProfile);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{paddingVertical: vh(1)}}>
        <Text style={styles.searchingTxt}>
          Yêu cầu tìm kiếm <Text style={styles.finishTxt}>ĐÃ HOÀN TẤT:</Text>
          <Text style={styles.timeTxt}>19:23:01 |</Text>
          <Text style={styles.datetime}>15/10/2024. </Text>
        </Text>
      </View>
      <View>
        {renderData.map((item, index) => {
          return (
            <View key={index}>
              {item.status === 6 && (
                <View style={styles.tombView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
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
                  <Text style={styles.martyrInfoText}>
                    Quan hệ với LS: {item.yourRelationshipWithMartyr}
                  </Text>
                </View>
              )}
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
    paddingHorizontal: vw(5),
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
    backgroundColor: '#E5E5E5',
    padding: vw(4),
    rowGap: vh(1),
    borderRadius: 20,
    marginVertical: vh(1),
  },
  searchingTxt: {
    color: '#000000',
  },
  finishTxt: {
    color: '#000000',
    fontWeight: '700',
  },
  timeTxt: {
    color: '#547958',
  },
  datetime: {
    color: '#547958',
    fontWeight: '700',
  },
});
