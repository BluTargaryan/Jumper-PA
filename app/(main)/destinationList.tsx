import MainHeaderwithBack from "@/app/components/MainHeaderwithBack";
import { colors, typography } from "@/app/styleUtils/styleValues";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";

export default function DestinationList() {
    const { countryId } = useLocalSearchParams();
    const country = TOP_TOURIST_COUNTRIES.find((country) => country.id === countryId);
    console.log(country);
    const scale = useSharedValue(0);
    const scrollViewTranslateY = useSharedValue(30);
    const scrollViewOpacity = useSharedValue(0);
    const buttonTranslateY = useSharedValue(30);
    const buttonOpacity = useSharedValue(0);
    const searchScale = useSharedValue(0);

    const titleStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const scrollViewStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: scrollViewTranslateY.value }],
        opacity: scrollViewOpacity.value,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginBottom: 100,
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonTranslateY.value }],
        opacity: buttonOpacity.value,
        position: 'absolute',
        bottom: 24,
        alignSelf: 'center',
        width: 325,
        height: 52,
        backgroundColor: colors.background,
        borderRadius: 8,
    }));

    const searchStyle = useAnimatedStyle(() => ({
        transform: [{ scale: searchScale.value }]
    }));

    useEffect(() => {
        scale.value = withDelay(200, withTiming(1, { duration: 200 }));
        searchScale.value = withDelay(600, withTiming(1, { duration: 200 }));
        scrollViewTranslateY.value = withDelay(400, withTiming(0, { duration: 200 }));
        scrollViewOpacity.value = withDelay(400, withTiming(1, { duration: 200 }));
        buttonTranslateY.value = withDelay(800, withTiming(0, { duration: 200 }));
        buttonOpacity.value = withDelay(800, withTiming(1, { duration: 200 }));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, marginTop: 40, alignItems: 'center', justifyContent: 'space-between'}}>
          <MainHeaderwithBack />
          <View
          style={{
            position: 'relative',
            flex: 1,
            width: '100%',
            paddingHorizontal: 24, 
            paddingTop: 24,
            alignItems: 'center',
            gap: 24,
          }}
          >
            <Animated.View style={titleStyle}>
              <Text
              style={[typography.presets.displaySmall, {color: colors.background, textAlign: 'center'}]}>
                  Where would you like to go?
              </Text>
            </Animated.View>

            <Animated.View style={[{
              width: '100%',
            }, searchStyle]}>
              <TextInput 
              placeholder="Search for a destination"
              placeholderTextColor={colors.background}
              style={{ 
                color: colors.background,
                fontSize: 16,
                borderWidth: 2,
                borderColor: colors.background,
                width: '100%',
                padding:16,
                borderRadius: 8,
              }}

    />
            </Animated.View>
            
            <Animated.ScrollView
        contentContainerStyle={{
          gap: 12,
          alignItems: 'center',
          paddingVertical: 10,
        }}
        style={scrollViewStyle}
        >
        {
          country?.attractions.map((attraction, index) => (
            <TouchableOpacity key={index} 
            onPress={() => router.push(`/(main)/destinationInfo?name=${attraction.name}`)}
            style={{
              width: '100%',
            }}
            >
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
                <Text style={[typography.presets.headingSmall, {color: colors.text, textAlign: 'center', width: '100%'}]}>{attraction.name}</Text>
              </Animated.View>
            </TouchableOpacity>
          ))
        }
        </Animated.ScrollView>
        <Animated.View
                    style={buttonStyle}
                >
                    <TouchableOpacity
                        onPress={() => router.replace(`/(main)/destinationMap?countryId=${countryId}`)}
                        style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            gap: 8,
                        }}
                    >
                        <Text style={[typography.presets.button, { color: colors.text }]}>Map</Text>
                        <MaterialIcons name="map" size={24} color={colors.text} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}   