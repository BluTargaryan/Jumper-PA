import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, typography } from '../styleUtils/styleValues';

interface InfoButtonProps {
  onPress: () => void;
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant: 'primary' | 'accent' | 'background';
  iconPosition?: 'left' | 'right';
}

export const InfoButton = ({
  onPress,
  text,
  icon,
  variant,
  iconPosition = 'right'
}: InfoButtonProps) => {
  const backgroundColor = {
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
  }[variant];

  const textColor = variant === 'primary' ? colors.background : colors.text;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor }
      ]}
    >
      {iconPosition === 'left' && (
        <MaterialIcons name={icon} size={24} color={textColor} />
      )}
      <Text style={[typography.presets.button, { color: textColor }]}>
        {text}
      </Text>
      {iconPosition === 'right' && (
        <MaterialIcons name={icon} size={24} color={textColor} />
      )}
    </TouchableOpacity>
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
