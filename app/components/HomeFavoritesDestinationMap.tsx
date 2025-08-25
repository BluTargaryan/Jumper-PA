import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";
import HomeFavoritesHeader from "./HomeFavoritesHeader";
import { Map, MapMarker } from "./Map";
import MapFloatButton from "./MapFloatButton";

interface FavoritedDestination {
  country: {
    id: string;
    name: string;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
  destination: {
    name: string;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

interface HomeFavoritesDestinationMapProps {
  destinations: FavoritedDestination[];
  onMarkerPress: (destinationName: string) => void;
}

const HomeFavoritesDestinationMap = ({ destinations, onMarkerPress }: HomeFavoritesDestinationMapProps) => {
  const hasFavorites = destinations.length > 0;

  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const onDestinationPress = (destinationName: string) => {
    setSelectedDestination(destinationName);
  }
  
  // Convert destinations to map markers
  const markers: MapMarker[] = destinations.map(item => ({
    id: `${item.country.id}-${item.destination.name}`,
    name: item.destination.name,
    coordinate: item.destination.coordinate,
  }));
  


  return (
    <View
      style={{
        width: '100%',
        height: '100%',
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
        position: 'relative',
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
            onPress={() => setSelectedDestination(null)}
            onMarkerPress={(markerId) => {
              // Extract destination name from marker id
              const destination = destinations.find(d => 
                `${d.country.id}-${d.destination.name}` === markerId
              );
              if (destination) {
                onDestinationPress(destination.destination.name);
              }
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
              No favorite destinations yet.{'\n'}Start exploring to add some!
            </Text>
          </View>
        )}

        {selectedDestination && (
          <MapFloatButton
            title={selectedDestination}
            bottom={10}
            onPress={() => {
              router.push(`/(main)/destinationInfo?name=${selectedDestination}`);
              setSelectedDestination(null);
            }}
          />
        )}

      </View>
    </View>
  );
};

export default HomeFavoritesDestinationMap;
