import { router } from "expo-router";
import MapFloatButton from "../components/MapFloatButton";
import { MapListToggleButton } from "../components/MapListToggleButton";

import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Region } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import { useFavorites } from "../context/FavoritesContext";
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

export default function FavoritesDestinationMap() {
    const { getFavoritedDestinations } = useFavorites();
    const initialRegion = DEFAULT_REGION;
    
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
        } catch (error) {
            console.error('Error on map ready:', error);
            setMapError("Failed to initialize map");
        }
    }, []);

    if (mapError) {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <MainHeader title={`Fave Destinations`} />
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
            <MainHeader title={`Fave Destinations`} />
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
                        {getFavoritedDestinations().map((item) => (
                            <Marker
                                key={`${item.country.id}-${item.destination.name}`}
                                coordinate={item.destination.coordinate}
                                pinColor={colors.secondary}
                                title={item.destination.name}
                                description={item.country.name}
                                onPress={() => setSelectedAttraction(item.destination.name)}
                            >
                            </Marker>
                        ))}
                    </MapView>
                </Animated.View>

                {selectedAttraction && (
                    <MapFloatButton
                        title={selectedAttraction}
                        onPress={() => {
                            router.push(`/(main)/destinationInfo?name=${selectedAttraction}`);
                            setSelectedAttraction(null);
                        }}
                    />
                )}

                <Animated.View style={[buttonStyle, { position: 'absolute', bottom: 94, alignSelf: 'center' }]}>
                    <MapListToggleButton
                        onPress={() => router.replace("/(main)/favoritesDestinationList")}
                        mode="list"
                    />
                    
                </Animated.View>

                <Animated.View style={[buttonStyle, { position: 'absolute', bottom: 34, alignSelf: 'center' }]}>
                    <MapListToggleButton
                        onPress={() => router.replace("/(main)/favoritesCountriesMap")}
                        mode="map"
                        text="Countries"
                    />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}