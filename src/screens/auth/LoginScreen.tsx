import React, {useRef} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

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
  const passwordRef = useRef<TextInput | null>(null);

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
            autoFocus
            placeholder="이메일"
            inputMode="email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            touched={loginForm.touched.email}
            error={loginForm.errors.email}
            {...loginForm.getTextInputProps('email')}
          />
          <InputField
            ref={passwordRef}
            placeholder="비밀번호"
            secureTextEntry
            textContentType="oneTimeCode"
            touched={loginForm.touched.password}
            error={loginForm.errors.password}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
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
