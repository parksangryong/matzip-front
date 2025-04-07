type UseFormValues = {
  email: string;
  password: string;
};

const validateLogin = (values: UseFormValues) => {
  const error = {email: '', password: ''};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    error.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    error.password = '비밀번호는 8~20자이어야 합니다.';
  }
  return error;
};

const validateSignup = (values: UseFormValues) => {
  const error = {email: '', password: ''};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    error.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    error.password = '비밀번호는 8~20자이어야 합니다.';
  }

  return error;
};

export {validateLogin, validateSignup};
