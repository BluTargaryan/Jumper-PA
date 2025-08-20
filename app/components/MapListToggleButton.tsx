import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors, typography } from '../styleUtils/styleValues';

interface MapListToggleButtonProps {
  onPress: () => void;
  style: object;
  mode: 'map' | 'list';
  textColor?: string;
  backgroundColor?: string;
}

export const MapListToggleButton = ({
  onPress,
  style,
  mode,
  textColor = colors.background,
  backgroundColor = colors.text,
}: MapListToggleButtonProps) => {
  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor },
        style
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={[typography.presets.button, { color: textColor }]}>
          {mode === 'map' ? 'Map' : 'List'}
        </Text>
        <MaterialIcons 
          name={mode === 'map' ? 'map' : 'public'} 
          size={24} 
          color={textColor}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    width: 325,
    height: 52,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  }
});
