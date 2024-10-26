/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/useStatusBar';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {InforDetail, MartyrProfileItem} from '../services/typeProps';
import {loadData} from '../services/storage';
import {centerAll, vh, vw} from '../services/styleSheet';
import {homeFilledIcon, nextIcon, questionIcon} from '../assets/svgXML';
import {StatusData} from '../services/renderData';
import SearchingStatusComponent from '../components/SearchingStatusComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const StatusDetail = () => {
  useStatusBar('#EEF2EE');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<InforDetail, 'Status'>>();
  const dataIndex = route.params.dataIndex;
  const [renderData, setRenderData] = useState<MartyrProfileItem>();

  const fetchData = async () => {
    await loadData<MartyrProfileItem[]>('martyrProfileStorage')
      .then(data => {
        setRenderData(data[dataIndex]);
      })
      .catch(() => {
        setRenderData(undefined);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Yêu cầu tìm kiếm mộ</Text>
          {renderData && (
            <View style={styles.bottomView}>
              <View style={styles.tombView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.nameTxt}>{renderData.name}</Text>
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
                      {StatusData[renderData.status]}
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
                      {renderData.birthYear} - {renderData.armyJoinDate}
                    </Text>
                    <Text style={styles.martyrInfoText}>
                      {renderData.hometown}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.viewBtn} disabled>
                    {nextIcon(vw(6), vw(6), '#ECF3A3')}
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.martyrInfoText}>
                    Nhân thân là: {renderData.yourRelationshipWithMartyr}
                  </Text>
                </View>
              </View>
              <View style={{marginTop: vh(1)}}>
                <SearchingStatusComponent
                  currentState={renderData.status}
                  label="Theo dõi trạng thái tìm kiếm"
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                      navigation.navigate('Main');
                    }}>
                    {homeFilledIcon(vw(6), vw(6), 'white')}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2}>
                    <View style={styles.quesstionContainer}>
                      {questionIcon(vw(6), vw(6))}
                    </View>
                    <Text style={styles.buttonText}>Liên lạc hỗ trợ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {renderData === undefined && (
            <Text style={styles.title}>Không tìm thấy kết quá</Text>
          )}
        </View>
        <View style={{height: vh(5), backgroundColor: '#547958'}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatusDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2EE',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#547958',
    paddingHorizontal: vw(5),
    marginVertical: vh(2),
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
    alignSelf: 'center',
    zIndex: 2,
    borderWidth: 3,
    borderColor: '#547958',
    position: 'absolute',
    top: -vh(10),
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
  bottomView: {
    flex: 1,
    backgroundColor: '#547958',
    marginTop: vh(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(5),
    borderTopWidth: 3,
    borderColor: 'black',
    paddingTop: vh(2),
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EEF2EE',
    borderWidth: 1,
    borderRadius: vw(50),
    width: '30%',
    height: vh(6),
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2EE',
    borderRadius: vw(50),
    height: vh(6),
    width: '65%',
  },
  buttonText: {
    marginLeft: vw(2),
    fontSize: 16,
    color: '#547958',
  },
  quesstionContainer: {
    backgroundColor: '#547958',
    padding: vw(1.5),
    borderRadius: vw(50),
  },
});
