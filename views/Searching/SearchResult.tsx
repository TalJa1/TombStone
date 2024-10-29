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
import {backIcon, filterIcon, searchIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
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

  const renderFilterValues = () => {
    return Object.keys(filterData)
      .filter(
        key => filterData[key as keyof MartyrSearchViewDataProps] !== null,
      )
      .map(key => {
        const value = filterData[key as keyof MartyrSearchViewDataProps];
        let style;

        if (value === 'Chưa xác định') {
          style = {
            backgroundColor: '#F7DAD4',
            color: '#571B0F',
          };
        } else {
          const randomStyle = Math.floor(Math.random() * 3);
          switch (randomStyle) {
            case 0:
              style = {
                color: 'white',
                borderColor: 'white',
                borderWidth: 1,
              };
              break;
            case 1:
              style = {
                backgroundColor: '#ECF3A3',
                color: '#547958',
              };
              break;
            case 2:
              style = {
                backgroundColor: '#F7DAD4',
                color: '#571B0F',
              };
              break;
          }
        }

        return (
          <View key={key}>
            {value !== '' && (
              <Text
                style={[
                  {fontSize: 12, padding: 5, borderRadius: 5, margin: 2},
                  style,
                ]}>
                {value}
              </Text>
            )}
          </View>
        );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Main data={renderData} filterLayout={renderFilterValues} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC<{
  data: MartyrSearchViewDataProps[] | undefined;
  filterLayout: () => React.JSX.Element[];
}> = ({data, filterLayout}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <View style={styles.headerDes}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: vw(4),
            marginTop: vh(1.5),
          }}>
          <TouchableOpacity
            style={[styles.searchContainer, {borderRadius: 8}]}
            onPress={() => navigation.goBack()}>
            <Text style={{color: '#D4D4D4', fontSize: 16}}>
              Tìm kiếm mộ liệt sĩ
            </Text>
            {filterIcon(vw(5), vw(5), 'white')}
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              padding: vw(2),
              borderRadius: 16,
            }}>
            {searchIcon(vw(6), vw(6), '#547958')}
          </View>
        </View>
        <View
          style={{
            marginTop: vh(1),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>Bộ lọc: </Text>
          {filterLayout()}
        </View>
      </View>
      {data && (
        <View style={{paddingHorizontal: vw(5)}}>
          <Text
            style={
              styles.mainTxt
            }>{`Tổng: ${data.length} kết quả phù hợp`}</Text>
          <View style={{rowGap: vh(1)}}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.itemContainer}
                  onPress={() => {
                    navigation.navigate('SearchResultDetail', {data: item});
                  }}>
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
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </>
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
  mainTxt: {
    color: '#868686',
    marginVertical: vh(1),
  },
  headerDes: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    backgroundColor: '#547958',
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
