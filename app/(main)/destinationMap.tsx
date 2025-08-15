import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Region } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeaderwithBack from "../components/MainHeaderwithBack";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors, typography } from "../styleUtils/styleValues";


const DEFAULT_REGION = {
    latitude: 20.0,
    longitude: 0.0,
    latitudeDelta: 90,
    longitudeDelta: 180,
};

const COUNTRY_VIEW_DELTAS = {
    latitudeDelta: 10,
    longitudeDelta: 10,
};

export default function DestinationMap() {
    const { countryId } = useLocalSearchParams();
    const country = TOP_TOURIST_COUNTRIES.find((country) => country.id === countryId);
    const initialRegion = country ? {
        latitude: country.coordinate.latitude,
        longitude: country.coordinate.longitude,
        ...COUNTRY_VIEW_DELTAS
    } : DEFAULT_REGION;
    
    const [region, setRegion] = useState<Region>(initialRegion);
    const [isMapReady, setIsMapReady] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);
    const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);

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

    const mapRef = useRef<MapView>(null);

    const onMapReady = useCallback(() => {
        try {
            setIsMapReady(true);
            // Animate to the country's location
            if (mapRef.current && country) {
                mapRef.current.animateToRegion(initialRegion, 1000);
            }
        } catch (error) {
            console.error('Error on map ready:', error);
            setMapError("Failed to initialize map");
        }
    }, [country, initialRegion]);

    if (mapError) {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <MainHeaderwithBack />
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
            <MainHeaderwithBack />
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
                        ref={mapRef}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        initialRegion={initialRegion}
                        onRegionChange={onRegionChange}
                        onMapReady={onMapReady}
                        loadingEnabled={true}
                        loadingIndicatorColor={colors.text}
                        loadingBackgroundColor={colors.background}
                        onPress={() => setSelectedAttraction(null)}
                    >
                        {country?.attractions?.map((attraction) => (
                            <Marker
                                key={attraction.name}
                                coordinate={attraction.coordinate}
                                pinColor={colors.secondary}
                                title={attraction.name}
                                onPress={() => setSelectedAttraction(attraction.name)}
                            >
                            </Marker>
                        ))}
                    </MapView>
                </Animated.View>

                {selectedAttraction && (
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            width: 325,
                            bottom: 92,
                            alignSelf: 'center',
                            backgroundColor: colors.accent,
                            paddingHorizontal: 24,
                            paddingVertical: 12,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => {
                            router.push(`/(main)/destinationInfo?name=${selectedAttraction}`);
                            setSelectedAttraction(null);
                        }}
                    >
                        <Text style={[typography.presets.button, { color: colors.text }]}>
                            See {selectedAttraction}
                        </Text>
                        <MaterialIcons name="arrow-forward" size={24} color={colors.text} />
                    </TouchableOpacity>
                )}

                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            bottom: 24,
                            alignSelf: 'center',
                            width: 325,
                            height: 52,
                            backgroundColor: colors.text,
                            borderRadius: 8,
                        },
                        buttonStyle
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => router.replace(`/(main)/destinationList?countryId=${countryId}`)}
                        style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            gap: 8,
                        }}
                    >
                        <Text style={[typography.presets.button, { color: colors.background }]}>Countries</Text>
                        <MaterialIcons name="public" size={24} color={colors.background} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}