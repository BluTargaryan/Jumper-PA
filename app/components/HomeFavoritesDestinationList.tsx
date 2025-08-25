import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";
import { colors, typography } from "../styleUtils/styleValues";
import DestinationListItem from "./DestinationListItem";

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

interface HomeFavoritesDestinationListProps {
  destinations: FavoritedDestination[];
  onDestinationPress: (destinationName: string) => void;
}

const HomeFavoritesDestinationList = ({ destinations, onDestinationPress }: HomeFavoritesDestinationListProps) => {
  const [searchText, setSearchText] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  // Filter destinations based on search text
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(item =>
        item.destination.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.country.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  }, [searchText, destinations]);

  // Update filtered destinations when destinations prop changes
  useEffect(() => {
    setFilteredDestinations(destinations);
  }, [destinations]);

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
          placeholder="Search destinations or countries"
          placeholderTextColor={colors.text}
          value={searchText}
          onChangeText={setSearchText}
          style={{ 
            color: colors.text,
            fontSize: 16,
            borderWidth: 2,
            backgroundColor: colors.background,
            width: '100%',
            padding: 16,
            borderRadius: 8,
          }}
        />
      </Animated.View>
      
      <Animated.ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{
          gap: 12,
          alignItems: 'center',
          paddingVertical: 10,
          ...(filteredDestinations.length === 0 && { flex: 1, justifyContent: 'center' })
        }}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((item, index) => (
            <DestinationListItem
              key={index}
              destination={{
                name: item.destination.name,
                countryName: item.country.name,
              }}
              onPress={() => router.push(`/(main)/destinationInfo?name=${item.destination.name}`)}
              showCountry={true}
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
                ? `No destinations found matching "${searchText}"`
                : "No favorite destinations yet.{'\n'}Start exploring to add some!"
              }
            </Text>
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default HomeFavoritesDestinationList;
