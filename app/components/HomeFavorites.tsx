import { useMemo } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { useFavorites } from "../context/FavoritesContext";
import { colors, typography } from "../styleUtils/styleValues";
import ContinueButton from "./ContinueButton";
import HomeFavoritesHeader from "./HomeFavoritesHeader";
import { Map, MapMarker } from "./Map";

const HomeFavorites = () => {
    const { getFavoritedCountries } = useFavorites();
    
    const markers: MapMarker[] = useMemo(() => {
        const favoritedCountries = getFavoritedCountries();
        return favoritedCountries.map(country => ({
            id: country.id,
            name: country.name,
            coordinate: country.coordinate,
        }));
    }, [getFavoritedCountries]);

    const hasFavorites = markers.length > 0;

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
            paddingVertical: 30,
            paddingHorizontal: 16,
            backgroundColor: colors.background,
            borderRadius: 8,
            flexDirection: 'column',
            gap: 20,
        }}
        >
            <HomeFavoritesHeader />

            <View style={{
                width: '100%',
                height: 517,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: colors.text,
                overflow: 'hidden',
            }}>
                {hasFavorites ? (
                    <Map
                    markers={markers}
                    onMarkerPress={(countryId) => {
                        console.log('Favorite country pressed:', countryId);
                    }}
                    animateOnMount={false}
                    showLoadingIndicator={false}
                    />
                ) : (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: 200,
                        paddingVertical: 40,
                    }}>
                        <Text style={[
                            typography.presets.bodyLarge,
                            {
                                color: colors.text,
                                textAlign: 'center',
                                opacity: 0.7,
                            }
                        ]}>
                            No favorite countries yet.{'\n'}Start exploring to add some!
                        </Text>
                    </View>
                )}
            </View>
        </View>

        <ContinueButton
        buttonText="Go to Favorites"
        onPress={() => {}}
        style={{
            width: '100%',
        }}
        backgroundColor={colors.accent}
        icon="arrow-right-alt"
        iconStyle={{
            color: colors.text,
        }}
        />
        </Animated.View>
    )
}

export default HomeFavorites;