import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Attraction, CountryData, TOP_TOURIST_COUNTRIES } from '../dataUtils/countriesData';

const FAVORITED_COUNTRIES_KEY = '@jumper_favorited_countries';
const FAVORITED_DESTINATIONS_KEY = '@jumper_favorited_destinations';

interface FavoritedDestination {
  countryId: string;
  destinationName: string;  // Using name as unique identifier
}

interface FavoritesContextType {
  // Country favorites
  favoritedCountries: string[];
  toggleFavoriteCountry: (countryId: string) => void;
  isCountryFavorited: (countryId: string) => boolean;
  getFavoritedCountries: () => CountryData[];
  
  // Destination favorites
  favoritedDestinations: FavoritedDestination[];
  toggleFavoriteDestination: (countryId: string, destinationName: string) => void;
  isDestinationFavorited: (countryId: string, destinationName: string) => boolean;
  getFavoritedDestinations: () => { country: CountryData; destination: Attraction }[];
  
  isLoading: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoritedCountries, setFavoritedCountries] = useState<string[]>([]);
  const [favoritedDestinations, setFavoritedDestinations] = useState<FavoritedDestination[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from storage on mount
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const [storedCountries, storedDestinations] = await Promise.all([
        AsyncStorage.getItem(FAVORITED_COUNTRIES_KEY),
        AsyncStorage.getItem(FAVORITED_DESTINATIONS_KEY)
      ]);

      if (storedCountries) {
        setFavoritedCountries(JSON.parse(storedCountries));
      }
      if (storedDestinations) {
        setFavoritedDestinations(JSON.parse(storedDestinations));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavoritedCountries = async (newFavorites: string[]) => {
    try {
      await AsyncStorage.setItem(FAVORITED_COUNTRIES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorited countries:', error);
    }
  };

  const saveFavoritedDestinations = async (newFavorites: FavoritedDestination[]) => {
    try {
      await AsyncStorage.setItem(FAVORITED_DESTINATIONS_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorited destinations:', error);
    }
  };

  const toggleFavoriteCountry = (countryId: string) => {
    setFavoritedCountries(prev => {
      const newFavorites = prev.includes(countryId)
        ? prev.filter(id => id !== countryId)
        : [...prev, countryId];
      
      // Save to AsyncStorage
      saveFavoritedCountries(newFavorites);
      return newFavorites;
    });
  };

  const toggleFavoriteDestination = (countryId: string, destinationName: string) => {
    setFavoritedDestinations(prev => {
      const isCurrentlyFavorited = prev.some(
        fav => fav.countryId === countryId && fav.destinationName === destinationName
      );

      const newFavorites = isCurrentlyFavorited
        ? prev.filter(
            fav => !(fav.countryId === countryId && fav.destinationName === destinationName)
          )
        : [...prev, { countryId, destinationName }];
      
      // Save to AsyncStorage
      saveFavoritedDestinations(newFavorites);
      return newFavorites;
    });
  };

  const isCountryFavorited = (countryId: string) => {
    return favoritedCountries.includes(countryId);
  };

  const isDestinationFavorited = (countryId: string, destinationName: string) => {
    return favoritedDestinations.some(
      fav => fav.countryId === countryId && fav.destinationName === destinationName
    );
  };

  const getFavoritedCountries = (): CountryData[] => {
    return TOP_TOURIST_COUNTRIES.filter(country => 
      favoritedCountries.includes(country.id)
    );
  };

  const getFavoritedDestinations = () => {
    return favoritedDestinations.map(fav => {
      const country = TOP_TOURIST_COUNTRIES.find(c => c.id === fav.countryId);
      if (!country) return null;
      
      const destination = country.attractions.find(attr => attr.name === fav.destinationName);
      if (!destination) return null;

      return {
        country,
        destination
      };
    }).filter((item): item is { country: CountryData; destination: Attraction } => item !== null);
  };

  if (isLoading) {
    return null; // Or a loading spinner if you prefer
  }

  return (
    <FavoritesContext.Provider 
      value={{ 
        favoritedCountries,
        toggleFavoriteCountry,
        isCountryFavorited,
        getFavoritedCountries,
        favoritedDestinations,
        toggleFavoriteDestination,
        isDestinationFavorited,
        getFavoritedDestinations,
        isLoading
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

export default FavoritesContext;
