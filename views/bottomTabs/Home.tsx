/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {bellIcon, nextIcon, plusIcon, readMoreIcon} from '../../assets/svgXML';
import {loadData, saveData} from '../../services/storage';
import {
  FoundMartyrProfileItem,
  MartyrProfileItem,
} from '../../services/typeProps';
import {
  HomeNewsData,
  MapListData,
  MartyrProfile,
  MartyrProfileListData,
  StatusData,
} from '../../services/renderData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Home = () => {
  useStatusBar('#547958');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleAdd = () => {
    navigation.navigate('AddPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.topGrp}>
            <Header />
            <TopDataRender />
          </View>
          <View style={styles.topGrpBottom}>
            <TouchableOpacity
              style={styles.addBtn}
              activeOpacity={0.9}
              onPress={handleAdd}>
              <Text style={styles.addBtnTxt}>Thêm yêu cầu tìm kiếm</Text>
              <View
                style={{
                  padding: vw(2),
                  backgroundColor: '#899A5A',
                  alignSelf: 'flex-end',
                  borderRadius: vw(50),
                }}>
                {plusIcon(vw(5), vw(5), 'white')}
              </View>
            </TouchableOpacity>
          </View>
          <NewsView />
          <MapListView />
          <LocationView />
        </View>
        <View style={{height: vh(15)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const LocationView: React.FC = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: vw(5),
          marginVertical: vh(1),
        }}>
        <Text style={{color: '#547958', fontSize: 18, fontWeight: '700'}}>
          Bản đồ nghĩa trang liệt sĩ
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#547958', fontSize: 14}}>Xem thêm</Text>
          {readMoreIcon(vw(5), vw(5))}
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: vw(5),
          },
          centerAll,
        ]}>
        {MartyrProfileListData.map((item, index) => {
          return (
            <Image
              key={index}
              source={item}
              style={{
                width: vw(17),
                height: vw(17),
                resizeMode: 'cover',
                borderRadius: 12,
                overflow: 'hidden',
                margin: vw(1),
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const MapListView: React.FC = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: vw(5),
          marginVertical: vh(1),
        }}>
        <Text style={{color: '#547958', fontSize: 18, fontWeight: '700'}}>
          Bản đồ nghĩa trang liệt sĩ
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#547958', fontSize: 14}}>Xem thêm</Text>
          {readMoreIcon(vw(5), vw(5))}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: vw(5), columnGap: vw(2)}}>
        {MapListData.map((item, index) => {
          return (
            <View key={index} style={styles.mapListContainer}>
              <Image source={item.img} style={styles.mapListImg} />
              <View style={styles.cityContainer}>
                <Text style={styles.cityTxt}>{item.city}</Text>
              </View>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const NewsView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: vw(5),
          marginVertical: vh(1),
        }}>
        <Text style={{color: '#547958', fontSize: 18, fontWeight: '700'}}>
          Mới nhất
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('SearchingSuccessfully');
          }}>
          <Text style={{color: '#547958', fontSize: 14}}>Xem thêm</Text>
          {readMoreIcon(vw(5), vw(5))}
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: vw(5)}}>
        {HomeNewsData.slice(0, 2).map((item, index) => {
          return (
            <View key={index} style={styles.news}>
              <Image source={item.img} style={styles.newsImg} />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  height: vw(30),
                }}>
                <View style={styles.topNewsGrp}>
                  <View
                    style={
                      item.status === 'Tìm mộ thành công'
                        ? styles.statusSuccess
                        : styles.statusStrange
                    }>
                    <Text
                      style={
                        item.status === 'Tìm mộ thành công'
                          ? styles.statusTxtSuccess
                          : styles.statusTxtStrange
                      }>
                      {item.status}
                    </Text>
                  </View>
                  <Text style={styles.newsDate}>{item.date}</Text>
                </View>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const TombSearchingListView: React.FC<{
  item: MartyrProfileItem;
  index: number;
}> = ({item, index}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleViewDetail = () => {
    navigation.navigate('StatusDetail', {dataIndex: index});
  };

  return (
    <View style={styles.tombView}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          <Text style={styles.statusTxt}>{StatusData[item.status]}</Text>
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
        <TouchableOpacity style={styles.viewBtn} onPress={handleViewDetail}>
          {nextIcon(vw(6), vw(6), '#ECF3A3')}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TombFoundListView: React.FC<{
  item: FoundMartyrProfileItem;
  index: number;
}> = ({item, index}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleViewDetail = () => {
    navigation.navigate('StatusDetail', {dataIndex: index});
  };

  return (
    <View>
      <View
        style={[
          styles.tombView,
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#D4F7E5',
            flexDirection: 'row',
          },
        ]}>
        <Image
          source={item.img}
          style={{
            height: vw(20),
            width: vw(20),
            resizeMode: 'contain',
            borderRadius: 12,
          }}
        />
        <View style={{flex: 1, marginLeft: vw(1)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.nameTxt, {color: '#EEF2EE'}]}>
              {item.name}
            </Text>
            <View
              style={[
                {
                  backgroundColor: '#D4F7E5',
                  paddingHorizontal: vw(2),
                  paddingVertical: vh(0.5),
                  borderRadius: vw(20),
                },
                centerAll,
              ]}>
              <Text style={styles.statusTxt}>{StatusData[item.status]}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '50%'}}>
              <Text style={[styles.martyrInfoText, {color: '#EEF2EE'}]}>
                {item.birthYear} - {item.armyJoinDate}
              </Text>
              <Text style={[styles.martyrInfoText, {color: '#EEF2EE'}]}>
                {item.hometown}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleViewDetail}
              style={[styles.viewBtn, {backgroundColor: '#6FA078'}]}>
              {nextIcon(vw(6), vw(6), '#ECF3A3')}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const TopDataRender: React.FC = () => {
  const [renderDataSearching, setRenderDataSearching] = useState<
    MartyrProfileItem[]
  >([]);

  const fetchData = async () => {
    await loadData<MartyrProfileItem[]>('martyrProfileStorage')
      .then(data => {
        setRenderDataSearching(data);
      })
      .catch(() => {
        setRenderDataSearching(MartyrProfile);
        saveData('martyrProfileStorage', MartyrProfile);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View>
      <Text style={styles.followText}>Theo dõi “Dấu tích” </Text>
      <Text style={styles.subFollowText}>
        Yêu cầu tìm kiếm mộ liệt sĩ, người thân của bạn:
      </Text>
      <View>
        {renderDataSearching.map((item, index) => {
          return (
            <View key={index}>
              {item.status < 6 && (
                <>
                  {item.status === 4 ? (
                    <TombFoundListView item={item} index={index} />
                  ) : (
                    <TombSearchingListView item={item} index={index} />
                  )}
                </>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', columnGap: vw(2)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            style={styles.headerImg}
            source={require('../../assets/Home/avatar.png')}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>Lê Công Duy</Text>
          <Text style={styles.subName}>Xem hoạt động của bạn</Text>
        </View>
      </View>
      <View style={styles.bell}>{bellIcon(vw(7), vw(7))}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(2),
  },
  topGrp: {
    paddingHorizontal: vw(5),
    backgroundColor: '#547958',
  },
  topGrpBottom: {
    backgroundColor: '#547958',
    height: vh(5),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderLeftWidth: 0.5,
    borderBottomWidth: 3,
    borderRightWidth: 0.5,
    borderColor: 'black',
    marginBottom: vh(3),
  },
  headerImg: {
    width: vw(10),
    height: vw(10),
    resizeMode: 'contain',
  },
  bell: {
    backgroundColor: '#91A89580',
    padding: vw(2),
    borderRadius: vw(50),
  },
  name: {
    color: '#ECF3A3',
    fontSize: 16,
    fontWeight: '700',
  },
  subName: {
    color: '#91A895',
    fontSize: 12,
  },
  followText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  subFollowText: {
    color: '#D4D4D4',
    fontSize: 12,
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
  addBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: vw(3),
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: vw(4),
    paddingVertical: vh(1),
    borderRadius: 12,
    position: 'absolute',
    bottom: vh(-3),
    zIndex: 3,
    borderWidth: 3,
    borderColor: 'black',
  },
  addBtnTxt: {
    color: 'black',
    fontSize: 16,
  },
  news: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(1),
    padding: vw(3),
    backgroundColor: '#EEF2EE',
    borderRadius: 8,
    overflow: 'hidden',
    columnGap: vw(2),
  },
  newsImg: {
    height: vw(30),
    width: vw(27),
    resizeMode: 'cover',
    borderRadius: 8,
  },
  newsContent: {
    flex: 1,
    marginLeft: vw(3),
  },
  topNewsGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusSuccess: {
    backgroundColor: '#ECF3A3',
    padding: vw(1),
    borderRadius: 8,
  },
  statusStrange: {
    backgroundColor: '#6FA078',
    padding: vw(1),
    borderRadius: 8,
  },
  statusTxtSuccess: {
    fontSize: 12,
    color: '#547958',
  },
  statusTxtStrange: {
    fontSize: 12,
    color: 'white',
  },
  newsDate: {
    color: '#547958',
    fontSize: 12,
  },
  newsTitle: {
    color: '#547958',
    fontSize: 18,
    fontWeight: '500',
  },
  newsDescription: {
    color: '#343434',
    fontSize: 12,
  },
  mapListContainer: {
    width: vw(55),
    backgroundColor: '#547958',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    padding: vw(2),
  },
  mapListImg: {
    height: vw(40),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  cityContainer: {
    padding: vw(2),
    backgroundColor: '#FFFFFFB3',
    borderRadius: 8,
    position: 'absolute',
    top: vw(4),
    right: vw(4),
  },
  cityTxt: {
    color: '#547958',
    fontSize: 10,
  },
  titleTxt: {
    color: '#EEF2EE',
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: vh(1),
  },
});
