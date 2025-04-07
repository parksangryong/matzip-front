import {useEffect, useState} from 'react';

interface UseFormProps<T> {
  initialValues: T;
  validate: (values: T) => Record<keyof T, string>;
}

const useForm = <T>({initialValues, validate}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeText = (name: keyof T, text: string) => {
    setValues({...values, [name]: text});
  };

  const handleBlur = (name: keyof T) => {
    setTouched({...touched, [name]: true});
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => handleChangeText(name, text);
    const onBlur = () => handleBlur(name);
    return {value, onChangeText, onBlur};
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values, validate]);

  return {values, touched, errors, getTextInputProps};
};
export default useForm;
