import { colors, typography } from '@/app/styleUtils/styleValues';
import { Image, Text, View } from 'react-native';

interface AboutCardProps {
    title: string;
    description: string;
    image: string;
    color: "primary" | "secondary" | "accent";
}

export default function AboutCard({ title, description, image, color }: AboutCardProps) {
    const backgroundColor = 
        color === "primary" ? colors.primary 
        : color === "secondary" ? colors.secondary 
        : colors.accent;

    const textColor = color === "primary" ? colors.background : colors.text;

    return (
        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 10,
            width: 320,
            paddingVertical: 40,
            paddingHorizontal: 20,
            gap: 32,
            backgroundColor,
        }}>
            <Image
                source={{ uri: image }}
                style={{
                    resizeMode: 'cover',
                    borderRadius: 10,
                    width: '100%',
                    height: 265,
                }}
            />
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <Text
                    style={[
                        typography.presets.displaySmall,
                        typography.positions.center,
                        { color: textColor }
                    ]}
                >
                    {title}
                </Text>
                <Text
                    style={[
                        typography.presets.bodyLarge,
                        typography.positions.center,
                        { color: textColor }
                    ]}
                >
                    {description}
                </Text>
            </View>
        </View>
    );
}
