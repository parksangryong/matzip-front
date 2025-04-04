import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import MapHomeScreen from '../../screens/map/MapHomeScreen';

// 네비게이션 드로어
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
