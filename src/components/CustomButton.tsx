import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  Dimensions,
  View,
} from 'react-native';

// 상수
import {colors} from '../constants/colors';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomButton = ({
  label,
  variant = 'filled',
  size = 'large',
  inValid = false,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        inValid && styles.inValid,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
      ]}
      disabled={inValid}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filled: {
    backgroundColor: colors.brand.PINK_700,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.brand.PINK_700,
  },
  inValid: {
    opacity: 0.5,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  filledText: {
    color: colors.grayScale.WHITE,
  },
  outlinedText: {
    color: colors.brand.PINK_700,
  },
  filledPressed: {
    backgroundColor: colors.system.PINK_500,
  },
  outlinedPressed: {
    borderColor: colors.brand.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
});

export default CustomButton;
