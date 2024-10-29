import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';

const SearchResultDetail = () => {
  useStatusBar('#547958');
  const route = useRoute<RouteProp<InforDetail, 'SearchDataDetail'>>();
  const data = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Search Result Detail</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResultDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91A895',
  },
});
