/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail, MartyrSearchViewDataProps} from '../../services/typeProps';
import {martyrSearchData} from '../../services/renderData';
import {backIcon} from '../../assets/svgXML';
import {vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchResult = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<InforDetail, 'SearchData'>>();
  const filterData: Partial<Record<keyof MartyrSearchViewDataProps, string>> =
    route.params.data;
  const [renderData, setRenderData] = useState<MartyrSearchViewDataProps[]>();

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
          <Header />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButtton}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(6), vw(6))}
      </TouchableOpacity>
      <Text style={styles.headerLabel}>Tìm kiếm hồ sơ liệt sĩ</Text>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vw(3),
    paddingHorizontal: vw(5),
    columnGap: vw(3),
  },
  backButtton: {
    backgroundColor: '#91A89526',
    padding: vw(1.5),
    borderRadius: vw(50),
  },
  headerLabel: {fontSize: 18, fontWeight: '700', color: '#547958'},
});
