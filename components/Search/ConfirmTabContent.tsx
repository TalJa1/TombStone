/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../services/styleSheet';
import {martyrSearchData} from '../../services/renderData';

const ConfirmTabContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Tổng: 7237 mộ liệt sĩ đã có thân nhân xác nhận.
      </Text>
      <View>
        {martyrSearchData
          .filter(a => a.status === 'Đã xác định')
          .map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <View style={styles.topContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.status}>{item.status}</Text>
                </View>
                <View style={styles.bottomContainer}>
                  <Text style={styles.date}>
                    {item.birthYear} - {item.deathDate}
                  </Text>
                  <View style={{width: 2, backgroundColor: 'black'}} />
                  <Text style={styles.hometown}>{item.hometown}</Text>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default ConfirmTabContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw(5),
  },
  label: {
    paddingVertical: vh(1),
    color: '#868686',
  },
  itemContainer: {
    paddingVertical: vh(1),
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  status: {
    color: '#343434',
    fontSize: 10,
    backgroundColor: '#D4D4D4',
    padding: vw(1),
    borderRadius: vw(50),
  },
  bottomContainer: {
    flexDirection: 'row',
    columnGap: vw(1),
  },
  date: {
    color: '#000000',
  },
  hometown: {
    color: '#000000',
  },
});
