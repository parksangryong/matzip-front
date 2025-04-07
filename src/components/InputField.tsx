import {useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
  Text,
  Pressable,
} from 'react-native';

import {colors} from '../constants';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = ({
  disabled = false,
  error,
  touched,
  ...props
}: InputFieldProps) => {
  const innerRef = useRef<TextInput | null>(null);

  const handlePressInput = () => {
    innerRef.current?.focus();
  };

  return (
    <Pressable onPress={handlePressInput}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          touched && Boolean(error) && styles.inputError,
        ]}>
        <TextInput
          ref={innerRef}
          editable={!disabled}
          style={[styles.input, disabled && styles.disabled]}
          placeholderTextColor={colors.grayScale.GRAY_500}
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
        {error && touched && <Text style={styles.error}>{error}</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grayScale.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  disabled: {
    borderColor: colors.grayScale.GRAY_200,
    color: colors.grayScale.GRAY_700,
  },
  input: {
    fontSize: 16,
    color: colors.grayScale.BLACK,
    padding: 0,
  },
  error: {
    color: colors.system.RED_500,
    fontSize: 12,
    paddingTop: 5,
    fontWeight: 500,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.system.RED_300,
  },
});

export default InputField;
