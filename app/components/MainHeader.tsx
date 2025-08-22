import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { colors, typography } from "../styleUtils/styleValues";

export default function MainHeader({title}: {title: string}) {
    const menuWidth = useSharedValue(0);
    const [isOpen, setIsOpen] = useState(false);

    const menuStyle = useAnimatedStyle(() => ({
        width: menuWidth.value
    }));

    const toggleMenu = () => {
        const targetWidth = isOpen ? 0 : 300;
        menuWidth.value = withSpring(targetWidth, {
            damping: 15,
            stiffness: 100
        });
        setIsOpen(!isOpen);
    };

    const pages = [
        {
            name: "Home",
            icon: "home",
            route: "/(main)/home",
        },
        {
            name: "Countries",
            icon: "map",
            route: "/(main)/countryMap",
        },
        {
            name: "Favorites",
            icon: "favorite-border",
            route: "/(main)/countryMap",
        },
    ];

    return (
        <View style={{
            width: '100%',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 24,
            gap: 24,
            backgroundColor: colors.text,
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
            }}>
                <Image source={require("../../assets/images/jumper-icon.png")} style={{ width: 30, height: 30 }} />
                <Text style={[typography.presets.displayXSmall, {color: colors.background}]}>{title}</Text>
            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
            }}>
                <Text style={[typography.presets.bodyLarge, {color: colors.background}]}>Pages</Text>
                <TouchableOpacity onPress={toggleMenu}>
                    <MaterialIcons 
                        name={isOpen ? "close" : "menu"} 
                        size={30} 
                        color={colors.background} 
                    />
                </TouchableOpacity>
            </View>

            <Animated.View style={[{
                position: 'absolute',
                top: 80,
                right: 0,
                overflow: 'hidden',
                zIndex: 10,
                backgroundColor: colors.accent,
            }, menuStyle]}>
                {pages.map((page, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingHorizontal: 12,
                            height: 50,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.text,
                        }}
                        onPress={() => {
                            router.replace(page.route as any);
                            toggleMenu(); // Close menu after navigation
                        }}
                    >
                        <Text style={[typography.presets.bodyLarge, {color: colors.text}]}>{page.name}</Text>
                        <MaterialIcons name={page.icon as keyof typeof MaterialIcons.glyphMap} size={20} color={colors.text} />
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
}