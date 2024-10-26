/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SearchingStatusComponentProps} from '../services/typeProps';
import {vh, vw} from '../services/styleSheet';
import {StatusData} from '../services/renderData';
import {checkIcon} from '../assets/svgXML';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchingStatusComponent: React.FC<SearchingStatusComponentProps> = ({
  label,
  currentState,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const renderIcon = (index: number) => {
    if (index < currentState) {
      return (
        <View style={styles.checkIconCircle}>
          {checkIcon(vw(4), vw(4), 'white')}
        </View>
      ); // Use checkIcon for checked state
    } else if (index === currentState) {
      return (
        <View style={styles.ellipsisIcon}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      );
    } else {
      return <View style={styles.circleIcon} />;
    }
  };

  const renderStatusText = (index: number) => {
    if (index < currentState) {
      return (
        <>
          {index === 0 ? (
            <Text style={styles.successText}>Tải lên thành công</Text>
          ) : (
            <Text style={styles.successText}>Đã xong</Text>
          )}
        </>
      );
    } else if (index === currentState) {
      return <Text style={styles.processingText}>Đang xử lý</Text>;
    } else {
      return null;
    }
  };

  const renderTime = (index: number) => {
    const today = new Date();
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const date = new Date(today);
    date.setDate(today.getDate() - (currentState - index));

    const formattedTime = `${String(randomHour).padStart(2, '0')}:${String(
      randomMinute,
    ).padStart(2, '0')} - ${String(date.getDate()).padStart(2, '0')}/${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}/${date.getFullYear()}`;

    return <Text style={styles.timeText}>{formattedTime}</Text>;
  };

  const renderEstimatedTime = () => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + 1); // Assuming the estimated date is tomorrow

    const formattedDate = `Dự kiến: ${String(date.getDate()).padStart(
      2,
      '0',
    )}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

    return <Text style={styles.timeText}>{formattedDate}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.statusContainer}>
        {StatusData.map((status, index) => (
          <View key={index}>
            <View style={styles.statusItem}>
              {renderIcon(index)}
              <Text
                style={[
                  styles.statusText,
                  index < currentState && {
                    textDecorationLine: 'line-through',
                    color: '#868686',
                  },
                ]}>
                {status}
              </Text>
            </View>
            <View style={styles.statusTextContainer}>
              {renderStatusText(index)}
              {index < currentState && renderTime(index)}
              {index === currentState && index !== 2 && renderEstimatedTime()}
              {index === 2 && currentState === index && (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ADNGuildPage');
                  }}>
                  <Text style={styles.guideText}>Xem hướng dẫn</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SearchingStatusComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: vh(13),
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
  statusContainer: {
    marginTop: vh(5),
    paddingHorizontal: vw(5),
    paddingBottom: vh(5),
    rowGap: vh(1),
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(1),
    columnGap: vw(3),
  },
  statusTextContainer: {
    marginLeft: vw(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statusText: {
    fontSize: 16,
    color: 'black',
  },
  successText: {
    fontSize: 14,
    color: '#868686',
  },
  processingText: {
    fontSize: 14,
    color: 'red',
  },
  timeText: {
    fontSize: 14,
    color: '#6FA078',
  },
  ellipsisIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: vw(5),
    height: vw(5),
  },
  dot: {
    width: vw(1),
    height: vw(1),
    borderRadius: vw(0.5),
    backgroundColor: '#547958',
    marginHorizontal: vw(0.2),
  },
  circleIcon: {
    width: vw(5),
    height: vw(5),
    borderRadius: vw(2.5),
    borderWidth: 1,
    borderColor: 'gray',
  },
  checkIconCircle: {
    width: vw(5),
    height: vw(5),
    borderRadius: vw(2.5),
    backgroundColor: '#547958',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideText: {
    fontSize: 12,
    color: '#6FA078',
    textDecorationLine: 'underline',
  },
});
