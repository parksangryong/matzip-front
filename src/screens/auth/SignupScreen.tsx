import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

// components
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

// constants
import {colors} from '../../constants';

// hooks
import useForm from '../../hooks/useForm';

// utils
import {validateSignup} from '../../utils';

const SignupScreen = () => {
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(loginForm.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
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
        <InputField
          placeholder="비밀번호 확인"
          secureTextEntry
          touched={loginForm.touched.passwordConfirm}
          error={loginForm.errors.passwordConfirm}
          {...loginForm.getTextInputProps('passwordConfirm')}
        />
        <CustomButton
          label="회원가입"
          onPress={handleSubmit}
          variant="filled"
          size="large"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayScale.WHITE,
  },
  innerContainer: {
    padding: 30,
    gap: 20,
  },
});

export default SignupScreen;
