import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';

// 네비게이션 상수
import {authNavigations} from '../constants';

// 네비게이션 타입
export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
