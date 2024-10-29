/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import {vh, vw} from './services/styleSheet';
import {
  communityFilledIcon,
  communityIcon,
  homeFilledIcon,
  homeIcon,
  mapFilledIcon,
  mapIcon,
  plusIcon,
  searchFilledIcon,
  searchIcon,
} from './assets/svgXML';
import Home from './views/bottomTabs/Home';
import SearchPage from './views/bottomTabs/SearchPage';
import MapPage from './views/bottomTabs/MapPage';
import CommunityPage from './views/bottomTabs/CommunityPage';
import useHideTabBar from './services/useHideTabBar';
import AddPage from './views/bottomTabs/AddPage';
import InitPage from './views/Init/InitPage';
import OnboardingPage from './views/Onboarding/OnboardingPage';
import OffBoarding from './views/Onboarding/OffBoarding';
import TombList from './views/Searching/TombList';
import InforChecking from './views/AddPage/InforChecking';
import UploadSuccessfully from './views/AddPage/UploadSuccessfully';
import StatusDetail from './views/StatusDetail';
import CommentPage from './views/Community/CommentPage';
import TombMapList from './views/Map/TombMapList';
import ADNGuildPage from './views/Home/ADNGuildPage';
import Profile from './views/Home/Profile';
import TombLocationDetail from './views/Searching/TombLocationDetail';
import MartyrProfile from './views/Searching/MartyrProfile';
import SearchingSuccessfully from './views/Searching/SearchingSuccessfully';
import UndefinedTomb from './views/Searching/UndefinedTomb';
import SearchResult from './views/Searching/SearchResult';
import SearchResultDetail from './views/Searching/SearchResultDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    useHideTabBar('Thêm');

    return (
      <View style={styles.tabnavigationStyle}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarActiveTintColor: '#547958',
            tabBarShowLabel: false,
            tabBarStyle:
              route.name === 'Thêm' ? {display: 'none'} : styles.tabBar,
          })}>
          <Tab.Screen
            name="Trang chủ"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(8) : vw(8);

                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? homeFilledIcon(iconSize, iconSize, color)
                      : homeIcon(iconSize, iconSize, color)}
                    {focused ? (
                      <Text style={[{color: color}, styles.label]}>
                        Trang chủ
                      </Text>
                    ) : null}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Tìm kiếm"
            component={SearchPage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(8) : vw(8);

                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? searchFilledIcon(iconSize, iconSize, color)
                      : searchIcon(iconSize, iconSize, color)}
                    {focused ? (
                      <Text style={[{color: color}, styles.label]}>
                        Tìm kiếm
                      </Text>
                    ) : null}
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="Thêm"
            component={AddPage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                const iconSize = vw(8);

                return (
                  <View style={styles.plusSurround}>
                    <View style={[styles.plusContainer]}>
                      {focused
                        ? plusIcon(iconSize, iconSize, '#ECF3A3')
                        : plusIcon(iconSize, iconSize, '#ECF3A3')}
                    </View>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="Bản đồ"
            component={MapPage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused, color}) => {
                const iconSize = focused ? vw(8) : vw(8);

                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? mapFilledIcon(iconSize, iconSize, color)
                      : mapIcon(iconSize, iconSize, color)}
                    {focused ? (
                      <Text style={[{color: color}, styles.label]}>Bản đồ</Text>
                    ) : null}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Cộng đồng"
            component={CommunityPage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(8) : vw(8);

                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? communityFilledIcon(iconSize, iconSize, color)
                      : communityIcon(iconSize, iconSize, color)}
                    {focused ? (
                      <Text style={[{color: color}, styles.label]}>
                        Cộng đồng
                      </Text>
                    ) : null}
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        {/* Home */}
        <Stack.Screen
          name="ADNGuildPage"
          component={ADNGuildPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        {/* Map */}
        <Stack.Screen
          name="TombMapList"
          component={TombMapList}
          options={{headerShown: false}}
        />

        {/* Community */}
        <Stack.Screen
          name="CommentPage"
          component={CommentPage}
          options={{headerShown: false}}
        />

        {/* Status detail */}
        <Stack.Screen
          name="StatusDetail"
          component={StatusDetail}
          options={{headerShown: false}}
        />

        {/* AddPage */}
        <Stack.Screen
          name="InforChecking"
          component={InforChecking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadSuccessfully"
          component={UploadSuccessfully}
          options={{headerShown: false}}
        />

        {/* Home */}
        <Stack.Screen
          name="AddPage"
          component={AddPage}
          options={{headerShown: false}}
        />

        {/* Searching */}
        <Stack.Screen
          name="TombList"
          component={TombList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TombLocationDetail"
          component={TombLocationDetail}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MartyrProfile"
          component={MartyrProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchingSuccessfully"
          component={SearchingSuccessfully}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UndefinedTomb"
          component={UndefinedTomb}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchResultDetail"
          component={SearchResultDetail}
          options={{headerShown: false}}
        />

        {/* Init */}
        <Stack.Screen
          name="Init"
          component={InitPage}
          options={{headerShown: false}}
        />

        {/* Onboarding */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OffBoarding"
          component={OffBoarding}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabnavigationStyle: {backgroundColor: '#1A1A1A', flex: 1},
  tabBar: {
    position: 'absolute',
    bottom: vh(0.5),
    left: 0,
    right: 0,
    borderTopColor: '#EEF2EE',
    backgroundColor: '#EEF2EE',
    height: vh(10),
    borderRadius: 30,
    paddingHorizontal: vw(5),
    paddingBottom: vh(1),
  },
  iconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: vh(1),
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    position: 'relative',
    top: vh(0.5),
  },
  plusSurround: {
    position: 'absolute',
    top: -vh(3.5),
    padding: vw(1.5),
    backgroundColor: 'white',
    borderRadius: vw(50),
  },
  plusContainer: {
    borderRadius: vw(50),
    backgroundColor: '#547958',
    padding: vw(2.5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
