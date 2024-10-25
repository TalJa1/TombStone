/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import HeaderTombList from '../../components/Map/HeaderTombList';
import {MapLocation} from '../../services/renderData';
import Tab1RenderComponent from '../../components/Map/Tab1RenderComponent';

const TombMapList = () => {
  useStatusBar('#EEF2EE');
  const [searchText, setSearchText] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');

  const provinces = MapLocation.map(location => ({
    label: location.properties?.name ?? 'Unknown',
    value: location.properties?.name ?? 'Unknown',
  }));

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search:', searchText, selectedProvince);
  };

  const renderContent = () => {
    if (activeTab === 'tab1') {
      return <Tab1RenderComponent />;
    } else if (activeTab === 'tab2') {
      return <Text>Content for Tab 2</Text>;
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
            handleSearch={handleSearch}
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
