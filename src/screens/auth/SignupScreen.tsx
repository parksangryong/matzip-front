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
import {validateSignup} from '../../utils';

const SignupScreen = () => {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signupForm = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signupForm.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          inputMode="email"
          touched={signupForm.touched.email}
          error={signupForm.errors.email}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signupForm.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          secureTextEntry
          textContentType="oneTimeCode"
          touched={signupForm.touched.password}
          error={signupForm.errors.password}
          returnKeyType="next"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signupForm.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          secureTextEntry
          textContentType="oneTimeCode"
          touched={signupForm.touched.passwordConfirm}
          error={signupForm.errors.passwordConfirm}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          {...signupForm.getTextInputProps('passwordConfirm')}
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
