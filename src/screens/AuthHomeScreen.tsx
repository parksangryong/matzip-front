import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Button, SafeAreaView} from 'react-native';

import {AuthStackParamList} from '../navigation/AuthStackNavigator';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
