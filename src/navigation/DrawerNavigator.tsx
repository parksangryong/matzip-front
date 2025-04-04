import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import AuthStackNavigator from './AuthStackNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <Drawer.Screen name="Home" component={AuthStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
