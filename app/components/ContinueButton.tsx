import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors, typography } from '../styleUtils/styleValues';

interface ContinueButtonProps {
  onPress: () => void;
  style: object;
  buttonText: string;
  backgroundColor: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconStyle: object;
  disabled?: boolean;
}

export const ContinueButton = ({ 
  onPress,
  style,
  buttonText,
  backgroundColor,
  icon,
  iconStyle,
  disabled
}: ContinueButtonProps) => {
  return (
    <Animated.View style={style}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          { backgroundColor },
          disabled && { opacity: 0.5 }
        ]}
      >
        <Text style={[typography.presets.button, {color: colors.text}]}>{buttonText}</Text>
        <MaterialIcons name={icon} size={24} color={colors.text} style={iconStyle} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 325,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  }
});
