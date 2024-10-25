/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import HeaderTombList from '../../components/Map/HeaderTombList';
import {MapLocation, tombListData} from '../../services/renderData';
import Tab1RenderComponent from '../../components/Map/Tab1RenderComponent';
import Tab2RenderComponent from '../../components/Map/Tab2RenderComponent';

const TombMapList = () => {
  useStatusBar('#EEF2EE');
  const [searchText, setSearchText] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');
  const [filteredData, setFilteredData] = useState(tombListData);

  const provinces = MapLocation.map(location => ({
    label: location.properties?.name ?? 'Unknown',
    value: location.properties?.name ?? 'Unknown',
  }));

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleSearch = () => {
    const filtered = tombListData.filter(tomb => {
      const matchesSearchText = tomb.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesProvince = selectedProvince
        ? tomb.location === selectedProvince
        : true;
      return matchesSearchText && matchesProvince;
    });
    setFilteredData(filtered);
  };

  const renderContent = () => {
    if (activeTab === 'tab1') {
      return <Tab1RenderComponent tombListData={filteredData} />;
    } else if (activeTab === 'tab2') {
      const visitedData = filteredData.filter(tomb => tomb.isVisited);
      return <Tab2RenderComponent tombListData={visitedData} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <HeaderTombList
            searchText={searchText}
            setSearchText={setSearchText}
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            provinces={provinces}
            handleSearch={handleSearch} // Ensure this is called when the "Tìm kiếm" button is clicked
          />
          <View style={styles.contentContainer}>{renderContent()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TombMapList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});
