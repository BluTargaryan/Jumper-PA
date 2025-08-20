import { colors, typography } from '@/app/styleUtils/styleValues';
import { MaterialIcons } from '@expo/vector-icons';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';

interface LocationPermissionButtonProps {
    onPress: () => void;
    text: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    variant: 'accent' | 'primary';
    buttonTextStyle?: AnimatedStyleProp<TextStyle>;
    iconStyle?: AnimatedStyleProp<ViewStyle>;
    flex?: boolean;
    disabled?: boolean;
}

export default function LocationPermissionButton({ 
    onPress, 
    text, 
    icon, 
    variant,
    buttonTextStyle,
    iconStyle,
    flex,
    disabled
}: LocationPermissionButtonProps) {
    const backgroundColor = variant === 'accent' ? colors.accent : colors.primary;
    const textColor = variant === 'accent' ? colors.text : colors.background;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={{
                flex: flex ? 1 : undefined,
                backgroundColor,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 8,
                opacity: disabled ? 0.5 : 1,
            }}
        >
            <Animated.Text 
                style={[
                    typography.presets.button, 
                    { color: textColor },
                    buttonTextStyle
                ]}
            >
                {text}
            </Animated.Text>
            <Animated.View style={iconStyle}>
                <MaterialIcons 
                    name={icon} 
                    size={24} 
                    color={textColor} 
                />
            </Animated.View>
        </TouchableOpacity>
    );
}
