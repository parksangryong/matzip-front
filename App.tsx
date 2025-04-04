import React from 'react';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

// 네비게이션 설정
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// 네비게이션 스택
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
