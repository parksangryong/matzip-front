type UseFormValues = {
  email: string;
  password: string;
};

const validateUser = (values: UseFormValues) => {
  const error = {email: '', password: ''};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    error.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    error.password = '비밀번호는 8~20자이어야 합니다.';
  }
  return error;
};

const validateLogin = (values: UseFormValues) => {
  return validateUser(values);
};

const validateSignup = (values: UseFormValues & {passwordConfirm: string}) => {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
};

export {validateLogin, validateSignup};
