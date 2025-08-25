import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";
import { colors, typography } from "../styleUtils/styleValues";
import CountryListItem from "./CountryListItem";

const HomeFavoritesCountryList = ({countries, onCountryPress}: {countries: any[], onCountryPress: (countryId: string) => void}) => {
    const [searchText, setSearchText] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);

    // Filter countries based on search text
    useEffect(() => {
        if (!searchText.trim()) {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter(country =>
                country.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    }, [searchText, countries]);

    // Update filtered countries when countries prop changes
    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    return (
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            paddingTop: 24,
            alignItems: 'center',
            gap: 24,
          }}
          >

            <Animated.View style={[{
              width: '100%',
            }]}>
              <TextInput 
                placeholder="Search for a country"
                placeholderTextColor={colors.text}
                value={searchText}
                onChangeText={setSearchText}
                style={{ 
                  color: colors.text,
                  fontSize: 16,
                  borderWidth: 2,
                  backgroundColor: colors.background,
                  width: '100%',
                  padding:16,
                  borderRadius: 8,
                }}
              />
            </Animated.View>
            
            <Animated.ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: 12,
          alignItems: 'center',
          paddingVertical: 10,
          ...(filteredCountries.length === 0 && { flex: 1, justifyContent: 'center' })
        }}
        >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <CountryListItem
              key={index}
              country={country}
              onPress={() => router.push(`/(main)/countryInfo?id=${country.id}`)}
            />
          ))
        ) : (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
            <Text style={[
              typography.presets.bodyLarge,
              {
                color: colors.text,
                textAlign: 'center',
                opacity: 0.7,
              }
            ]}>
              {searchText.trim() 
                ? `No countries found matching "${searchText}"`
                : "No favorite countries yet.{'\n'}Start exploring to add some!"
              }
            </Text>
          </View>
        )}
        </Animated.ScrollView>
            </View>
    )
}

export default HomeFavoritesCountryList;