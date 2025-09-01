import { useEffect, useMemo, useState } from "react";
import { TextInput } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors } from "../styleUtils/styleValues";
import { HomeSearchCategory } from "./HomeSearchCategory";


export const HomeSearch = () => {
    const scrollViewHeight = useSharedValue(0);
    const [searchText, setSearchText] = useState("");


    const countries = useMemo(() => {
            return TOP_TOURIST_COUNTRIES.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText]);

    const attractions = useMemo(() => {
        return TOP_TOURIST_COUNTRIES.flatMap((country) => country.attractions).filter((attraction) => attraction.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText]);
    

    useEffect(() => {
        if (searchText.trim() !== "") {
            scrollViewHeight.value = withTiming(347, { duration: 300 });
        } else {
            scrollViewHeight.value = withTiming(0, { duration: 300 });
        }
    }, [searchText]);

    const animatedScrollViewStyle = useAnimatedStyle(() => {
        return {
            height: scrollViewHeight.value,
            overflow: 'hidden',
        };
    });

    return (
        <Animated.View style={[{
            width: '100%',
            gap: 20,
          }]}>
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

            <Animated.ScrollView
            style={[
                {
                    width: '100%',
                    borderRadius: 8,
                    backgroundColor: colors.accent,
                    zIndex:100,
                },
                animatedScrollViewStyle,
            ]}
            contentContainerStyle={{
                gap: 10,
                flexDirection: 'column',
            }}
            nestedScrollEnabled={true}
            >

                {countries.length > 0 && (
                    <HomeSearchCategory
                    title="Countries"
                    items={countries}
                    />
                )}

                {attractions.length > 0 && (
                    <HomeSearchCategory
                    title="Attractions"
                    items={attractions}
                    />
                )}
            </Animated.ScrollView>
          </Animated.View>
    )
}

export default HomeSearch;