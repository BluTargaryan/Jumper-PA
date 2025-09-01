import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import MapView, { Marker, Region } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { colors } from "../styleUtils/styleValues";

const INITIAL_REGION = {
    latitude: 20.0,
    longitude: 0.0,
    latitudeDelta: 90,
    longitudeDelta: 180,
};

export interface MapMarker {
    id: string;
    name: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
}

interface MapProps {
    markers?: MapMarker[];
    onMapReady?: () => void;
    onRegionChange?: (region: Region) => void;
    onMarkerPress?: (markerId: string) => void;
    initialRegion?: Region;
    showLoadingIndicator?: boolean;
    animateOnMount?: boolean;
    markerColor?: string;
    onPress?: () => void;
}

export const Map = ({
    markers = [],
    onMapReady,
    onRegionChange,
    onMarkerPress,
    initialRegion = INITIAL_REGION,
    showLoadingIndicator = true,
    animateOnMount = true,
    markerColor = colors.text,
    onPress,
}: MapProps) => {
    const [region, setRegion] = useState<Region>(initialRegion);
    const [isMapReady, setIsMapReady] = useState(false);

    const mapContainerY = useSharedValue(animateOnMount ? 50 : 0);
    const mapContainerOpacity = useSharedValue(animateOnMount ? 0 : 1);

    useEffect(() => {
        if (animateOnMount) {
            // Initial animation when component mounts
            mapContainerY.value = withDelay(200, withTiming(0));
            mapContainerOpacity.value = withDelay(200, withTiming(1));
        }
    }, [animateOnMount]);

    const mapContainerStyle = useAnimatedStyle(() => ({
        flex: 1,
        transform: [{ translateY: mapContainerY.value }],
        opacity: mapContainerOpacity.value
    }));

    const handleRegionChange = useCallback((newRegion: Region) => {
        try {
            setRegion(newRegion);
            onRegionChange?.(newRegion);
        } catch (error) {
            console.error('Error updating region:', error);
        }
    }, [onRegionChange]);

    const handleMapReady = useCallback(() => {
        try {
            setIsMapReady(true);
            onMapReady?.();
        } catch (error) {
            console.error('Error on map ready:', error);
        }
    }, [onMapReady]);

    const handleMarkerPress = useCallback((markerId: string) => {
        if (onMarkerPress) {
            onMarkerPress(markerId);
        } else {
            // Default behavior - navigate to country info
            router.push(`/(main)/countryInfo?id=${markerId}`);
        }
    }, [onMarkerPress]);

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            {showLoadingIndicator && !isMapReady && (
                <View style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: colors.background,
                    zIndex: 1,
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
                    initialRegion={initialRegion}
                    onRegionChange={handleRegionChange}
                    onMapReady={handleMapReady}
                    onPress={onPress}
                    loadingEnabled={true}
                    loadingIndicatorColor={colors.text}
                    loadingBackgroundColor={colors.background}
                >
                    {markers?.map((marker) => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            title={marker.name}
                            pinColor={markerColor}
                            onPress={() => handleMarkerPress(marker.id)}
                        />
                    ))}
                </MapView>
            </Animated.View>
        </View>
    );
};

export default Map;
