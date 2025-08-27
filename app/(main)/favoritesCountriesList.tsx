import CountryListItem from "@/app/components/CountryListItem";
import MainHeader from "@/app/components/MainHeader";
import { colors, typography } from "@/app/styleUtils/styleValues";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapListToggleButton } from "../components/MapListToggleButton";
import { useFavorites } from "../context/FavoritesContext";
import { CountryData } from "../dataUtils/countriesData";

export default function FavoritesCountriesList() {
    const { getFavoritedCountries } = useFavorites();
    const [searchText, setSearchText] = useState("");
    const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([]);
    
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
        width: '100%',
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

    useEffect(() => {
        const favoritedCountries = getFavoritedCountries();
        const filtered = favoritedCountries.filter(country =>
            country.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCountries(filtered);
    }, [searchText, getFavoritedCountries]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, alignItems: 'center', justifyContent: 'space-between'}}>
          <MainHeader title="FaveCountries" />
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
                  Which country would you like to visit?
              </Text>
            </Animated.View>

            <Animated.View style={[{
              width: '100%',
            }, searchStyle]}>
              <TextInput 
                placeholder="Search for a country"
                placeholderTextColor={colors.background}
                value={searchText}
                onChangeText={setSearchText}
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
           filteredCountries.map((country, index) => (
             <CountryListItem
               key={index}
               country={country}
               onPress={() => router.push(`/(main)/countryInfo?id=${country.id}`)}
             />
           ))
         }
        </Animated.ScrollView>
        
        <Animated.View style={[buttonStyle, { position: 'absolute', bottom: 94, zIndex: 1000 }]}>
          <MapListToggleButton
            onPress={() => router.replace("/(main)/favoritesCountriesMap")}
            mode="map"
            variant="secondary"
          />
        </Animated.View>

            </View>
        </SafeAreaView>
    );
}