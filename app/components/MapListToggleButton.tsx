import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, typography } from '../styleUtils/styleValues';

interface MapListToggleButtonProps {
  onPress: () => void;
  mode: 'map' | 'list';
  text?: string;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
}

export const MapListToggleButton = ({
  onPress,
  mode,
  text,
  variant = 'primary',
  style,
}: MapListToggleButtonProps) => {
  const isPrimary = variant === 'primary';
  const backgroundColor = isPrimary ? colors.text : colors.background;
  const textColor = isPrimary ? colors.background : colors.text;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: 325,
          height: 52,
          borderRadius: 8,
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
          alignSelf: 'center',
        },
        style
      ]}
    >
      <Text style={[typography.presets.button, { color: textColor }]}>
        {text || (mode === 'map' ? 'Map' : 'List')}
      </Text>
      <MaterialIcons 
        name={mode === 'map' ? 'map' : 'list'} 
        size={24} 
        color={textColor}
      />
    </TouchableOpacity>
  );
};
