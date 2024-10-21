/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {bellIcon, nextIcon} from '../../assets/svgXML';
import {loadData, saveData} from '../../services/storage';
import {MartyrProfileItem} from '../../services/typeProps';
import {MartyrProfile} from '../../services/renderData';

const Home = () => {
  useStatusBar('#547958');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.topGrp}>
            <Header />
            <TopDataRender />
          </View>
        </View>
        <View style={{height: vh(10)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const TombSearchingListView: React.FC<{item: MartyrProfileItem}> = ({item}) => {
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
          <Text style={styles.statusTxt}>{item.status}</Text>
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
        <TouchableOpacity style={styles.viewBtn}>
          {nextIcon(vw(6), vw(6), '#ECF3A3')}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TopDataRender: React.FC = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.followText}>Theo dõi “Dấu tích” </Text>
      <Text style={styles.subFollowText}>
        Yêu cầu tìm kiếm mộ liệt sĩ, người thân của bạn:
      </Text>
      <View>
        {renderData.map((item, index) => {
          return (
            <View key={index}>
              <TombSearchingListView item={item} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', columnGap: vw(2)}}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/Home/avatar.png')}
        />
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
    paddingBottom: vh(2),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
});
