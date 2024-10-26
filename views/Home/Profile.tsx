/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {backIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ActiveView from '../../components/Profile/ActiveView';
import FinishView from '../../components/Profile/FinishView';

const Profile = () => {
  useStatusBar('#547958');
  const [selectedTab, setSelectedTab] = useState('Đang hoạt động');

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Đang hoạt động':
        return <ActiveView />;
      case 'Hoàn tất':
        return <FinishView />;
      case 'Nháp':
        return (
          <Text style={{color: 'black', padding: vw(5)}}>
            0 có bản nháp nào
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header selectedTab={selectedTab} onTabPress={handleTabPress} />
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface HeaderProps {
  selectedTab: string;
  onTabPress: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({selectedTab, onTabPress}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.headerBack}
          onPress={() => {
            navigation.goBack();
          }}>
          {backIcon(vw(6), vw(6), '#547958')}
        </TouchableOpacity>
        <View>
          <Text style={styles.headerLabel}>Theo dõi “Dấu tích” </Text>
          <Text style={styles.headerDes}>
            Yêu cầu tìm kiếm mộ liệt sĩ, người thân của bạn
          </Text>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        {['Đang hoạt động', 'Hoàn tất', 'Nháp'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab]}
            onPress={() => onTabPress(tab)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#547958',
  },
  headerBack: {
    backgroundColor: 'white',
    borderRadius: vw(50),
    alignSelf: 'flex-start',
    padding: vw(2),
  },
  headerTop: {
    flexDirection: 'row',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    columnGap: vw(3),
  },
  headerLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  headerDes: {
    fontSize: 12,
    color: '#EEF2EE',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: vh(1),
  },
  tab: {
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
  },
  tabText: {
    fontSize: 16,
    color: '#D4D4D4',
  },
  selectedTabText: {
    color: 'white',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  tabContent: {
    padding: vw(5),
  },
});
