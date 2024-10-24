/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {bellIcon, plusIcon, searchIcon} from '../../assets/svgXML'; // Import your SVG icons
import {vw, vh} from '../../services/styleSheet'; // Assuming you have these utility functions
import {HeaderCommunityProps} from '../../services/typeProps';
import Tab1Component from '../../components/Community/Tab1Component';
import Tab2Component from '../../components/Community/Tab2Component';
import Tab3Component from '../../components/Community/Tab3Component';

const CommunityPage = () => {
  useStatusBar('#ECF3A3');
  const [activeTab, setActiveTab] = useState('Tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return <Tab1Component />;
      case 'Tab2':
        return <Tab2Component />;
      case 'Tab3':
        return <Tab3Component />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderContent()}
        </View>
        <View style={{height: vh(12)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<HeaderCommunityProps> = ({activeTab, setActiveTab}) => {
  const getTabTextStyle = (tab: string) => {
    return tab === activeTab
      ? [styles.tabText, styles.activeTabText]
      : styles.tabText;
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topHeader}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/Init/Init.png')}
            style={styles.headerLogo}
          />
          <Text style={styles.appName}>Dấu tích Anh linh</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.iconButton}>
            {bellIcon(vw(5), vw(5), '#547958')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            {plusIcon(vw(5), vw(5), '#547958')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            {searchIcon(vw(5), vw(5), '#547958')}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('Tab1')}>
          <Text style={getTabTextStyle('Tab1')}>Mới nhất</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('Tab2')}>
          <Text style={getTabTextStyle('Tab2')}>Theo dõi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('Tab3')}>
          <Text style={getTabTextStyle('Tab3')}>Của bạn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommunityPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#ECF3A3',
    paddingBottom: vh(2),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: vw(10),
    height: vw(10),
    resizeMode: 'cover',
    marginRight: vw(2),
  },
  appName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#04403A',
  },
  rightHeader: {
    flexDirection: 'row',
  },
  iconButton: {
    width: vw(10),
    height: vw(10),
    borderRadius: vw(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: vw(2),
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: vh(1),
  },
  tabButton: {
    paddingHorizontal: vw(5),
  },
  tabText: {
    fontSize: 16,
    color: '#868686',
  },
  activeTabText: {
    color: 'black',
    fontWeight: '700',
  },
});
