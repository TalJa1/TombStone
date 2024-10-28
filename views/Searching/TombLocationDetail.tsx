/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InforDetail} from '../../services/typeProps';
import {RouteProp, useRoute} from '@react-navigation/native';
import {backIcon, filterIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';

const TombLocationDetail = () => {
  useStatusBar('transparent');
  const route = useRoute<RouteProp<InforDetail, 'TombLocation'>>();
  const headerTitle = route.params.title;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header title={headerTitle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<{title: string}> = ({title}) => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleHidePress = () => {
    setIsTextVisible(false);
  };

  return (
    <View>
      <Image
        source={require('../../assets/Home/tp3.png')}
        style={styles.headerImg}
      />
      <View style={{position: 'absolute', top: vh(2), left: vw(5)}}>
        <View style={styles.headerTitleGrp}>
          <TouchableOpacity style={styles.backBtn}>
            {backIcon(vw(5), vw(5), 'white')}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NTLS {title}</Text>
        </View>
      </View>
      <View style={{width: vw(100)}}>
        {isTextVisible ? (
          <View style={styles.headerDes}>
            <Text style={styles.headerDesTxt}>
              Nghĩa trang liệt sĩ Quốc gia {title} là nơi quy tụ 10.263 phần mộ
              của các liệt sĩ có tổng diện tích 140.000m2. Phần đất mộ được phân
              thành 10 khu vực chính. Nghĩa trang liệt sĩ Trường Sơn là nơi an
              nghỉ đời đời của các anh hùng liệt sĩ đã hi sinh trên tuyến đường
              mòn Hồ Chí Minh trong thời kì chống Mỹ cứu nước.{' '}
              <Text style={styles.hideButton} onPress={handleHidePress}>
                Ẩn
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: vw(4),
                marginTop: vh(1.5),
              }}>
              <TouchableOpacity style={styles.searchContainer}>
                <Text style={{color: '#D4D4D4', fontSize: 16}}>
                  Tìm kiếm mộ liệt sĩ
                </Text>
                {filterIcon(vw(5), vw(5), 'white')}
              </TouchableOpacity>
              {searchIcon(vw(6), vw(6), 'white')}
            </View>
          </View>
        ) : (
          <View style={styles.searchIconContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsTextVisible(true);
              }}>
              <View style={styles.searchCenterBtn}>
                {searchIcon(vw(7), vw(7), 'white')}
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TombLocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImg: {
    width: '100%',
    height: 200,
  },
  headerTitleGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(3),
  },
  backBtn: {
    backgroundColor: '#91A8957D',
    padding: vw(2),
    borderRadius: vw(50),
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  headerDes: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    backgroundColor: '#547958',
  },
  headerDesTxt: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  hideButton: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    color: '#ECF3A3',
  },
  searchIconContainer: {
    alignItems: 'center',
    backgroundColor: '#547958',
    height: vh(3),
    width: vw(100),
  },
  searchCenterBtn: {
    padding: vw(1),
    borderRadius: vw(50),
    backgroundColor: '#547958',
    position: 'relative',
    top: vh(-2.5),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-start',
    flex: 1,
    padding: vw(2),
    borderRadius: vw(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
