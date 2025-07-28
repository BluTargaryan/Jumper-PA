import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Region } from 'react-native-maps';
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
                <MainHeader />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
            <MainHeader />
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
                
                <View style={{ flex: 1 }}>
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
                                />
                            
                         
                        ))}
                    </MapView>
                </View>

                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        position: 'absolute',
                        bottom: 24,
                        alignSelf: 'center',
                        width: 325,
                        height: 52,
                        backgroundColor: colors.text,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 8,
                    }}
                >
                    <Text style={[typography.presets.button, { color: colors.background }]}>Countries</Text>
                    <MaterialIcons name="public" size={24} color={colors.background} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}