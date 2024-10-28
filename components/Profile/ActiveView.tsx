/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {MartyrProfileItem} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {MartyrProfile, StatusData} from '../../services/renderData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {nextIcon, sandClockIcon, thunderIcon} from '../../assets/svgXML';
import {vw, vh, centerAll} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ActiveView = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [renderData, setRenderData] = useState<MartyrProfileItem[]>([]);

  const fetchData = async () => {
    await loadData<MartyrProfileItem[]>('martyrProfileStorage')
      .then(data => {
        setRenderData(data);
      })
      .catch(() => {
        setRenderData(MartyrProfile);
        saveData('martyrProfileStorage', MartyrProfile);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const handleViewDetail = (index: number) => {
    navigation.navigate('StatusDetail', {dataIndex: index});
  };

  const formatUploadDate = (uploadDate: string) => {
    console.log('uploadDate', uploadDate);

    const [day, month, year] = uploadDate.split('/').map(Number);
    const upload = new Date(year, month - 1, day);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - upload.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'vừa mới đăng tải';
    } else {
      return `${diffDays} ngày trước - ${day}/${month}/${year}`;
    }
  };

  return (
    <View style={styles.container}>
      {renderData.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.topTxt}>
              {formatUploadDate(item.uploadDate) === 'vừa mới đăng tải'
                ? 'Bạn vừa tải lên một yêu cầu tìm kiếm: '
                : 'Yêu cầu tìm kiếm thay đổi trạng thái vào: '}
              <Text style={styles.dateTimeTxt}>
                {formatUploadDate(item.uploadDate)}
              </Text>
            </Text>
            <View
              style={[
                styles.status6,
                item.status === 4 && styles.status4,
                item.status === 6 && styles.tombView,
              ]}>
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
            {item.status === 1 ? (
              <View style={styles.bottomBlock}>
                <View style={styles.bottomBlockIconContainer}>
                  {sandClockIcon(vw(4), vw(4))}
                </View>
                <Text style={styles.bottomBlockTxt}>
                  Hãy chờ vài ngày để hệ thống xác nhận thông tin tải lên từ
                  bạn.
                </Text>
              </View>
            ) : (
              <View style={[styles.bottomBlock, {backgroundColor: '#FFEDED'}]}>
                <View
                  style={[
                    styles.bottomBlockIconContainer,
                    {backgroundColor: '#AC2B2B'},
                  ]}>
                  {thunderIcon(vw(4), vw(4))}
                </View>
                <Text
                  style={[
                    styles.bottomBlockTxt,
                    {color: '#AC2B2B', fontWeight: '700'},
                  ]}>
                  Hãy tiến hành bước tiếp theo để quá trình tìm kiếm có kết quả
                  nhanh, chuẩn nhất.
                </Text>
              </View>
            )}
          </View>
        );
      })}
      <View style={{height: vh(3)}} />
    </View>
  );
};

export default ActiveView;

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
  status4: {
    backgroundColor: '#E4FFE4',
  },
  status6: {
    padding: vw(4),
    rowGap: vh(1),
    borderRadius: 20,
    marginVertical: vh(1),
    backgroundColor: '#FFFDD3',
    borderWidth: 1,
    borderColor: '#547958',
  },
  topTxt: {
    marginTop: vh(1),
    color: '#000000',
    fontSize: 14,
  },
  uploadDateText: {
    color: '#547958',
    fontSize: 12,
    fontStyle: 'italic',
  },
  dateTimeTxt: {
    color: '#547958',
    fontSize: 14,
    fontWeight: '700',
  },
  bottomBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(1),
    backgroundColor: '#E5E5E5',
    overflow: 'hidden',
    paddingHorizontal: vw(2),
    borderRadius: 12,
    paddingVertical: vh(0.6),
  },
  bottomBlockIconContainer: {
    marginRight: vw(2),
    backgroundColor: '#868686',
    padding: vw(1.5),
    borderRadius: vw(50),
    alignSelf: 'center',
  },
  bottomBlockTxt: {
    width: '75%',
    color: '#868686',
    fontSize: 14,
  },
});
