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
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.grayScale.WHITE,
  },
  inputContainer: {
    gap: 20,
  },
  innerContainer: {
    padding: 30,
  },
});

export default LoginScreen;
