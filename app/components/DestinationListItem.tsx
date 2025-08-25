import { colors, typography } from '@/app/styleUtils/styleValues';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

export interface DestinationListItemProps {
  destination: {
    name: string;
    countryName?: string;
  };
  onPress: () => void;
  showCountry?: boolean;
}

const DestinationListItem = ({ destination, onPress, showCountry = true }: DestinationListItemProps) => {
  return (
    <TouchableOpacity 
    style={{
      width: '100%',
    }}
    onPress={onPress}>
      <Animated.View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        borderRadius: 8,
        width: '100%',
        minHeight: 52,
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 4,
      }}>
        <Text style={[typography.presets.headingSmall, { color: colors.text }]}>
          {destination.name}
        </Text>
        {showCountry && destination.countryName && (
          <Text style={[
            typography.presets.bodySmall, 
            { color: colors.text, opacity: 0.7 }
          ]}>
            {destination.countryName}
          </Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default DestinationListItem;
