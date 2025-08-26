import { router } from "expo-router";
import { Map, MapMarker } from "../components/Map";
import { MapListToggleButton } from "../components/MapListToggleButton";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Region } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import MainHeader from "../components/MainHeader";
import { useFavorites } from "../context/FavoritesContext";
import { colors, typography } from "../styleUtils/styleValues";


export default function FavoritesCountriesMap() {
    const { getFavoritedCountries } = useFavorites();
    const [region, setRegion] = useState<Region | null>(null);
    const [isMapReady, setIsMapReady] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);

    const translateY = useSharedValue(50);
    const opacity = useSharedValue(0);

    const buttonY = useSharedValue(100);
    const buttonOpacity = useSharedValue(0);

    const markers: MapMarker[] = useMemo(() => 
        getFavoritedCountries().map(country => ({
            id: country.id,
            name: country.name,
            coordinate: country.coordinate,
        })), [getFavoritedCountries]
    );

    useEffect(() => {
        if (mapError) {
            translateY.value = 50;
            opacity.value = 0;
            translateY.value = withDelay(200, withTiming(0));
            opacity.value = withDelay(200, withTiming(1));
        }
    }, [mapError]);

    useEffect(() => {
        // Button animation
        buttonY.value = withDelay(500, withTiming(0));
        buttonOpacity.value = withDelay(500, withTiming(1));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonY.value }],
        opacity: buttonOpacity.value
    }));

    const handleRegionChange = useCallback((newRegion: Region) => {
        try {
            setRegion(newRegion);
        } catch (error) {
            console.error('Error updating region:', error);
            setMapError("Failed to update map region");
        }
    }, []);

    const handleMapReady = useCallback(() => {
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
                <MainHeader title="Favorites Countries" />
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
            title="Favorites Countries"
            />
            <Map
                markers={markers}
                onRegionChange={handleRegionChange}
                onMapReady={handleMapReady}
                animateOnMount={true}
            />
            
            <MapListToggleButton
                style={buttonStyle}
                onPress={() => router.replace("/(main)/favoritesCountriesList")}
                mode="list"
                bottom={100}
            />
        </SafeAreaView>
    );
}