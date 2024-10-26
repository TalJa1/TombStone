import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchingStatusComponentProps} from '../services/typeProps';
import {vh, vw} from '../services/styleSheet';
import {StatusData} from '../services/renderData';
import {checkIcon} from '../assets/svgXML';

const SearchingStatusComponent: React.FC<SearchingStatusComponentProps> = ({
  label,
  currentState,
}) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.statusContainer}>
        {StatusData.map((status, index) => (
          <View key={index} style={styles.statusItem}>
            {renderIcon(index)}
            <View style={styles.statusTextContainer}>
              <Text style={styles.statusText}>{status}</Text>
              {renderStatusText(index)}
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
    marginTop: vh(10),
    backgroundColor: 'white',
    width: '90%',
    borderWidth: 2,
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
  },
  statusTextContainer: {
    marginLeft: vw(2),
  },
  statusText: {
    fontSize: 16,
    color: 'black',
  },
  successText: {
    fontSize: 14,
    color: 'green',
  },
  processingText: {
    fontSize: 14,
    color: 'red',
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
});
