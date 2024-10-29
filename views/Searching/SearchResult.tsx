/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InforDetail, MartyrSearchViewDataProps} from '../../services/typeProps';
import {martyrSearchData} from '../../services/renderData';

const SearchResult = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<InforDetail, 'SearchData'>>();
  const filterData: Partial<Record<keyof MartyrSearchViewDataProps, string>> =
    route.params.data;
  const [renderData, setRenderData] =
    useState<MartyrSearchViewDataProps[]>();

  console.log('renderData', renderData);

  useEffect(() => {
    const filteredData = martyrSearchData.filter(item => {
      return Object.keys(filterData).every(key => {
        if (filterData[key as keyof MartyrSearchViewDataProps]) {
          const typedKey = key as keyof MartyrSearchViewDataProps;
          return item[typedKey]
            ?.toLowerCase()
            .includes(filterData[typedKey]?.toLowerCase() ?? '');
        }
        return true;
      });
    });
    setRenderData(filteredData);
  }, [filterData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text>SearchResult</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
