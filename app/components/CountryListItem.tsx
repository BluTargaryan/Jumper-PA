import { colors, typography } from '@/app/styleUtils/styleValues';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

export interface CountryListItemProps {
  country: {
    id: string;
    name: string;
  };
  onPress: () => void;
}

const CountryListItem = ({ country, onPress }: CountryListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        borderRadius: 8,
        width: '100%',
        height: 52,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}>
        <Text style={[typography.presets.headingSmall, { color: colors.text }]}>
          {country.name}
        </Text>
        <Text style={{ fontSize: 24 }}>
          {getUnicodeFlagIcon(country.id)}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CountryListItem;
