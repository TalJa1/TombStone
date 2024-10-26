/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBar';
import {GuildLocation} from '../../services/typeProps';
import {GuildLocationData} from '../../services/renderData';
import {locationIcon} from '../../assets/svgXML';

const ADNGuildPage = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.viewContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Hướng dẫn cung cấp ADN</Text>
          </View>
          <View style={styles.contentContainer}>
            {/* Add your content here */}
            <Text style={styles.des1}>
              “Việc thân nhân của liệt sĩ phối hợp cung cấp mẫu GEN đưa vào ngân
              hàng GEN, góp phần xác định danh tính hài cốt của các liệt sĩ giúp
              cho quá trình tìm kiếm mộ các anh linh nhanh chóng và chính xác.”
            </Text>
            <Text style={styles.des2}>
              Dưới đây là danh sách các cơ sở hỗ trợ thu thập ADN chúng tôi có
              thể gợi ý dựa trên vị trí hiện tại của bạn:
            </Text>
            <LocationRender />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const LocationRender: React.FC = () => {
  const renderData: GuildLocation[] = GuildLocationData;

  return (
    <View>
      {renderData.map((item, index) => {
        return (
          <View key={index} style={styles.locaitonRender}>
            <Text style={styles.nameLocation}>
              {index}. {item.name}
            </Text>
            <View style={styles.bottomLocation}>
              <View style={styles.bottomLeftLocation}>
                {locationIcon(vw(5), vw(5))}
                <Text style={styles.locaition}>{item.location}</Text>
              </View>
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ADNGuildPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewContainer: {
    alignSelf: 'center',
    marginTop: vh(5),
    backgroundColor: 'white',
    width: '90%',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  labelContainer: {
    backgroundColor: '#547958',
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    alignItems: 'center',
    position: 'absolute',
    top: -vh(2.5),
    zIndex: 2,
    alignSelf: 'center',
    borderRadius: vw(50),
    borderWidth: 2,
    borderColor: 'black',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  contentContainer: {
    paddingHorizontal: vw(5),
  },
  locaitonRender: {
    paddingBottom: vh(2.5),
  },
  nameLocation: {
    fontSize: 16,
    fontWeight: '700',
    color: '#547958',
  },
  bottomLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(1),
  },
  bottomLeftLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(2),
  },
  locaition: {
    fontSize: 14,
    color: '#000000',
  },
  distance: {
    fontSize: 14,
    color: '#899A5A',
    textDecorationLine: 'underline',
  },
  des1: {
    fontSize: 14,
    color: '#000000',
    marginTop: vh(5),
  },
  des2: {
    fontSize: 14,
    color: '#000000',
    marginVertical: vh(2),
  },
});
