import { router } from "expo-router";
import { MapListToggleButton } from "../components/MapListToggleButton";

import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MapView, { Marker, Region } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import MainHeader from "../components/MainHeader";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors, typography } from "../styleUtils/styleValues";


const INITIAL_REGION = {
    latitude: 20.0,
    longitude: 0.0,
    latitudeDelta: 90,
    longitudeDelta: 180,
};

export default function CountryMap() {
    const [region, setRegion] = useState<Region>(INITIAL_REGION);
    const [isMapReady, setIsMapReady] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);

    const translateY = useSharedValue(50);
    const opacity = useSharedValue(0);

    const mapContainerY = useSharedValue(50);
    const mapContainerOpacity = useSharedValue(0);

    const buttonY = useSharedValue(100);
    const buttonOpacity = useSharedValue(0);

    useEffect(() => {
        if (mapError) {
            translateY.value = 50;
            opacity.value = 0;
            translateY.value = withDelay(200, withTiming(0));
            opacity.value = withDelay(200, withTiming(1));
        }
    }, [mapError]);

    useEffect(() => {
        // Initial animation when component mounts
        mapContainerY.value = withDelay(200, withTiming(0));
        mapContainerOpacity.value = withDelay(200, withTiming(1));
        
        // Button animation
        buttonY.value = withDelay(500, withTiming(0));
        buttonOpacity.value = withDelay(500, withTiming(1));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value
    }));

    const mapContainerStyle = useAnimatedStyle(() => ({
        flex: 1,
        transform: [{ translateY: mapContainerY.value }],
        opacity: mapContainerOpacity.value
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonY.value }],
        opacity: buttonOpacity.value
    }));

    const onRegionChange = useCallback((newRegion: Region) => {
        try {
            setRegion(newRegion);
        } catch (error) {
            console.error('Error updating region:', error);
            setMapError("Failed to update map region");
        }
    }, []);

    const onMapReady = useCallback(() => {
        try {
            setIsMapReady(true);
        } catch (error) {
            console.error('Error on map ready:', error);
            setMapError("Failed to initialize map");
        }
    }, []);

    if (mapError) {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
                <MainHeader title="Countries" />
                <Animated.View 
                    style={[
                        { 
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        },
                        animatedStyle
                    ]}
                >
                    <Text style={[typography.presets.bodyLarge, { color: colors.text }]}>{mapError}</Text>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={{
                            marginTop: 20,
                            padding: 10,
                            backgroundColor: colors.text,
                            borderRadius: 8,
                        }}
                    >
                        <Text style={[typography.presets.button, { color: colors.background }]}>Go Back</Text>
                    </TouchableOpacity>
                </Animated.View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            <MainHeader 
            title="Countries"
            />
            <View style={{ flex: 1, position: 'relative' }}>
                {!isMapReady && (
                    <View style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: colors.background
                    }}>
                        <ActivityIndicator size="large" color={colors.text} />
                    </View>
                )}
                
                <Animated.View style={mapContainerStyle}>
                    <MapView
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        initialRegion={INITIAL_REGION}
                        onRegionChange={onRegionChange}
                        onMapReady={onMapReady}
                        loadingEnabled={true}
                        loadingIndicatorColor={colors.text}
                        loadingBackgroundColor={colors.background}
                    >
                        {TOP_TOURIST_COUNTRIES?.map((country) => (
                            <Marker
                                key={country.id}
                                coordinate={country.coordinate}
                                title={country.name}
                                pinColor={colors.text}
                                onPress={() => router.push(`/(main)/countryInfo?id=${country.id}`)}
                            />
                        ))}
                    </MapView>
                </Animated.View>

                <MapListToggleButton
                    style={buttonStyle}
                    onPress={() => router.replace("/(main)/countryList")}
                    mode="list"
                />
            </View>
        </SafeAreaView>
    );
}