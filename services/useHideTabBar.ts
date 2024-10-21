import {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const useHideTabBar = (routeName: string) => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.name === routeName) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: styles.tabBar});
    }
  }, [navigation, route, routeName]);
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: '#EEF2EE',
    backgroundColor: '#EEF2EE',
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default useHideTabBar;
