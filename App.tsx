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
  searchFilledIcon,
  searchIcon,
} from './assets/svgXML';
import Home from './views/bottomTabs/Home';
import SearchPage from './views/bottomTabs/SearchPage';
import MapPage from './views/bottomTabs/MapPage';
import CommunityPage from './views/bottomTabs/CommunityPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <View style={styles.tabnavigationStyle}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#547958',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}>
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
      {/* Main || Onboarding */}
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
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
});
