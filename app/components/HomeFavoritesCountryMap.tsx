import { Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";
import HomeFavoritesHeader from "./HomeFavoritesHeader";
import { Map, MapMarker } from "./Map";

interface HomeFavoritesCountryMapProps {
  markers: MapMarker[];
  onMarkerPress: (countryId: string) => void;
}

const HomeFavoritesCountryMap = ({ markers, onMarkerPress }: HomeFavoritesCountryMapProps) => {
  const hasFavorites = markers.length > 0;

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
            onMarkerPress={onMarkerPress}
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
  );
};

export default HomeFavoritesCountryMap;
