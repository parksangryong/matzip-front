import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import InputField from '../../components/InputField';
import {colors} from '../../constants';

const LoginScreen = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (name: string, text: string) => {
    setValues({...values, [name]: text});
  };

  const handleBlur = (name: string) => {
    switch (name) {
      case 'email':
        if (values.email === '' || !values.email.includes('@')) {
          setTouched({...touched, email: true});
        } else {
          setTouched({...touched, email: false});
        }
        break;
      case 'password':
        if (values.password === '' || values.password.length < 8) {
          setTouched({...touched, password: true});
        } else {
          setTouched({...touched, password: false});
        }
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          touched={touched.email}
          value={values.email}
          onChangeText={text => handleChangeText('email', text)}
          error="이메일을 입력해주세요."
          onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          touched={touched.password}
          value={values.password}
          onChangeText={text => handleChangeText('password', text)}
          error="비밀번호를 입력해주세요."
          onBlur={() => handleBlur('password')}
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
