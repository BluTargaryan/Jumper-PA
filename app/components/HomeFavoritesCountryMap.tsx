import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";
import HomeSectionHeader from "./HomeSectionHeader";
import { Map, MapMarker } from "./Map";
import MapFloatButton from "./MapFloatButton";

interface HomeFavoritesCountryMapProps {
  markers: MapMarker[];
}

const HomeFavoritesCountryMap = ({ markers }: HomeFavoritesCountryMapProps) => {
  const hasFavorites = markers.length > 0;
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderRadius: 8,
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <HomeSectionHeader title="Your favorites" onPress={() => {router.push(`/(main)/favoritesCountriesList`)}} />

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
            onMarkerPress={(markerId) => {
              setSelectedCountry(markers.find((marker) => marker.id === markerId)?.name || null);
              setSelectedCountryId(markerId);
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

{selectedCountry && (
          <MapFloatButton
            title={selectedCountry}
            bottom={10}
            onPress={() => {
              router.push(`/(main)/countryInfo?id=${selectedCountryId}`);
              setSelectedCountry(null);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default HomeFavoritesCountryMap;
