import React from 'react';
import {View, StyleSheet} from 'react-native';

import InputField from '../../components/InputField';
import {colors} from '../../constants';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';

import {validateLogin} from '../../utils';

const LoginScreen = () => {
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(loginForm.values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          touched={loginForm.touched.email}
          error={loginForm.errors.email}
          {...loginForm.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          touched={loginForm.touched.password}
          error={loginForm.errors.password}
          {...loginForm.getTextInputProps('password')}
        />
        <CustomButton
          label="로그인"
          variant="filled"
          size="large"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.grayScale.WHITE,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
