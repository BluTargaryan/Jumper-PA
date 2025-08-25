import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, typography } from '../styleUtils/styleValues';

export interface MapFloatButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  width?: number;
  bottom?: number;
}

const MapFloatButton = ({
  title,
  onPress,
  style,
  backgroundColor = colors.accent,
  textColor = colors.text,
  iconColor = colors.text,
  iconName = "arrow-forward",
  width = 325,
  bottom = 92,
}: MapFloatButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          position: 'absolute',
          width,
          bottom,
          alignSelf: 'center',
          backgroundColor,
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[typography.presets.button, { color: textColor }]}>
        {title}
      </Text>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

export default MapFloatButton;
