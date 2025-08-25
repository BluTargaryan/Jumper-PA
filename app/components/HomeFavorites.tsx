import { useMemo, useState } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useFavorites } from "../context/FavoritesContext";
import { colors } from "../styleUtils/styleValues";
import ContinueButton from "./ContinueButton";
import HomeFavoritesCountryList from "./HomeFavoritesCountryList";
import HomeFavoritesCountryMap from "./HomeFavoritesCountryMap";
import HomeFavoritesDestinationList from "./HomeFavoritesDestinationList";
import HomeFavoritesDestinationMap from "./HomeFavoritesDestinationMap";
import { MapMarker } from "./Map";

const HomeFavorites = () => {
    const { getFavoritedCountries, getFavoritedDestinations } = useFavorites();
    const [showList, setShowList] = useState(false);
    const [showDestinations, setShowDestinations] = useState(false);
    
    const listWidth = useSharedValue(0);
    const mapWidth = useSharedValue(100);
    
    // Animation values for countries/destinations transition
    const countriesOpacity = useSharedValue(1);
    const destinationsOpacity = useSharedValue(0);
    const countriesTranslateY = useSharedValue(0);
    const destinationsTranslateY = useSharedValue(30);
    
    const countryMarkers: MapMarker[] = useMemo(() => {
        const favoritedCountries = getFavoritedCountries();
        return favoritedCountries.map(country => ({
            id: country.id,
            name: country.name,
            coordinate: country.coordinate,
        }));
    }, [getFavoritedCountries]);

    const favoritedDestinations = useMemo(() => {
        return getFavoritedDestinations();
    }, [getFavoritedDestinations]);

    const toggleView = () => {
        setShowList(!showList);
        if (!showList) {
            // Switching to list view
            listWidth.value = withTiming(100, { duration: 500 });
            mapWidth.value = withTiming(0, { duration: 500 });
        } else {
            // Switching to map view
            listWidth.value = withTiming(0, { duration: 500 });
            mapWidth.value = withTiming(100, { duration: 500 });
        }
    };

    const toggleDestinations = () => {
        const newShowDestinations = !showDestinations;
        
        if (newShowDestinations) {
            // Switching to destinations
            // Fade out countries
            countriesOpacity.value = withTiming(0, { duration: 300 });
            countriesTranslateY.value = withTiming(-30, { duration: 300 });
            
            // Fade in destinations
            destinationsOpacity.value = withTiming(1, { duration: 300 });
            destinationsTranslateY.value = withTiming(0, { duration: 300 });
        } else {
            // Switching to countries
            // Fade out destinations
            destinationsOpacity.value = withTiming(0, { duration: 300 });
            destinationsTranslateY.value = withTiming(30, { duration: 300 });
            
            // Fade in countries
            countriesOpacity.value = withTiming(1, { duration: 300 });
            countriesTranslateY.value = withTiming(0, { duration: 300 });
        }
        
        setShowDestinations(newShowDestinations);
    };

    const listAnimatedStyle = useAnimatedStyle(() => ({
        width: `${listWidth.value}%`,
        overflow: 'hidden',
        position: 'relative',
    }));

    const mapAnimatedStyle = useAnimatedStyle(() => ({
        width: `${mapWidth.value}%`,
        overflow: 'hidden',
        position: 'relative',
    }));

    // Animated styles for countries/destinations transition
    const countriesAnimatedStyle = useAnimatedStyle(() => ({
        opacity: countriesOpacity.value,
        transform: [{ translateY: countriesTranslateY.value }],
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: showDestinations ? 1 : 2,
    }));

    const destinationsAnimatedStyle = useAnimatedStyle(() => ({
        opacity: destinationsOpacity.value,
        transform: [{ translateY: destinationsTranslateY.value }],
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: showDestinations ? 2 : 1,
    }));

    return (
        <Animated.View
        style={{
            width: '100%',
            flexDirection: 'column',
            gap: 20,
        }}
        >
        <View
        style={{
            width: '100%',
            flexDirection: 'row',
            height: 650
        }}
        >
            <Animated.View style={mapAnimatedStyle}>
                <Animated.View style={countriesAnimatedStyle}>
                    <HomeFavoritesCountryMap
                        markers={countryMarkers}
                        onMarkerPress={(countryId) => {
                            console.log('Favorite country pressed:', countryId);
                        }}
                    />
                </Animated.View>
                <Animated.View style={destinationsAnimatedStyle}>
                    <HomeFavoritesDestinationMap
                        destinations={favoritedDestinations}
                        onMarkerPress={(destinationName) => {
                            console.log('Favorite destination pressed:', destinationName);
                        }}
                    />
                </Animated.View>
            </Animated.View>

            <Animated.View style={listAnimatedStyle}>
                <Animated.View style={countriesAnimatedStyle}>
                    <HomeFavoritesCountryList
                        countries={countryMarkers}
                        onCountryPress={(countryId) => {
                            console.log('Favorite country pressed:', countryId);
                        }}
                    />
                </Animated.View>
                <Animated.View style={destinationsAnimatedStyle}>
                    <HomeFavoritesDestinationList
                        destinations={favoritedDestinations}
                        onDestinationPress={(destinationName) => {
                            console.log('Favorite destination pressed:', destinationName);
                        }}
                    />
                </Animated.View>
            </Animated.View>

        </View>

        <View style={{
            width: '100%',
            flexDirection: 'column',
            gap: 10,
        }}>
            <ContinueButton
            buttonText={showList ? "Switch to Map" : "Switch to List"}
            onPress={toggleView}
            style={{
                width: '100%',
            }}
            backgroundColor={colors.accent}
            icon={showList ? "map" : "list"}
            iconStyle={{
                color: colors.text,
            }}
            />
            <ContinueButton
            buttonText={showDestinations ? "Switch to Countries" : "Switch to Destinations"}
            onPress={toggleDestinations}
            style={{
                width: '100%',
            }}
            backgroundColor={colors.secondary}
            icon={showDestinations ? "public" : "location-on"}
            iconStyle={{
                color: colors.text,
            }}
            />
        </View>
        </Animated.View>
    )
}

export default HomeFavorites;