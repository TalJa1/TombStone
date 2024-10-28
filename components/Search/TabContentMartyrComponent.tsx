/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../services/styleSheet';
import {MartyrSearchViewDataProps} from '../../services/typeProps';

const TabContentMartyrComponent: React.FC<{
  data: MartyrSearchViewDataProps[];
  isFilter?: boolean;
}> = ({data, isFilter}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isFilter ? (
          `Tổng: ${data.length} kết quả phù hợp`
        ) : (
          <>
            {data[0].status === 'Đã xác định' &&
              'Tổng: 7237 mộ liệt sĩ đã có thân nhân xác nhận.'}
            {data[0].status === 'Chưa xác định' &&
              'Tổng: 2922 mộ liệt sĩ chưa có thân nhân xác nhận.'}
            {data[0].status === 'Vô danh' && 'Tổng: 68 liệt sĩ vô danh '}
          </>
        )}
      </Text>
      <View style={{rowGap: vh(1)}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.topContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text
                  style={[
                    styles.status,
                    item.status === 'Chưa xác định' && {
                      backgroundColor: '#F7DAD4',
                    },
                  ]}>
                  {item.status}
                </Text>
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

export default TabContentMartyrComponent;

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
    backgroundColor: '#ECF3A3',
    borderRadius: 12,
    paddingHorizontal: vw(2),
    paddingVertical: vh(1.5),
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
    borderRadius: 8,
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
    flex: 1,
  },
});
