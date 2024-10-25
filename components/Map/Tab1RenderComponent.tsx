import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TombListProps} from '../../services/typeProps';
import {checkIcon, locationIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';

interface Tab1RenderComponentProps {
  tombListData: TombListProps[];
}

const Tab1RenderComponent: React.FC<Tab1RenderComponentProps> = ({
  tombListData,
}) => {
  return (
    <View style={styles.container}>
      {tombListData.map((tomb, index) => (
        <View key={index} style={styles.tombItem}>
          <Text style={styles.tombName}>
            {index + 1}. {tomb.name}
          </Text>
          <View style={styles.rowExact}>
            {locationIcon(vw(4), vw(4))}
            <Text style={styles.tombLocation}>{tomb.exactLocation}</Text>
          </View>
          <View style={styles.grpRight}>
            <View style={styles.tombContainer}>
              <Text style={styles.tombNumbers}>{tomb.numbersOfTomb} mộ</Text>
            </View>
            {tomb.isVisited ? (
              <View style={styles.isVisited}>
                {checkIcon(vw(3), vw(3), 'white')}
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tab1RenderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tombItem: {
    marginBottom: 16,
  },
  tombName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#547958',
  },
  tombLocation: {
    fontSize: 14,
    color: '#000000',
  },
  tombNumbers: {
    fontSize: 14,
    color: 'white',
  },
  tombVisited: {
    fontSize: 14,
    color: '#666',
  },
  rowExact: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(1),
  },
  grpRight: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(2),
  },
  tombContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#899A5A',
    borderRadius: 10,
    paddingHorizontal: vw(2),
    paddingVertical: vh(0.6),
  },
  isVisited: {
    borderRadius: vw(50),
    padding: vw(1),
    backgroundColor: '#547958',
  },
});
