import React from 'react';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

// 네비게이션 설정
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// 네비게이션 스택
import RootNavigator from './src/navigations/root/RootNavigator';

// 쿼리 클라이언트
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
