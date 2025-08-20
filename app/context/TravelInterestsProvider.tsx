import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { TravelInterests, TravelInterestsContextType } from '../types/interests';

const STORAGE_KEY = '@travel_interests';

const TravelInterestsContext = createContext<TravelInterestsContextType | undefined>(undefined);

export function TravelInterestsProvider({ children }: { children: React.ReactNode }) {
  const [interests, setInterests] = useState<TravelInterests>({
    selectedInterests: [],
    lastUpdated: Date.now(),
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load interests from storage on mount
  useEffect(() => {
    loadInterests();
  }, []);

  const loadInterests = async () => {
    try {
      const storedInterests = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedInterests) {
        setInterests(JSON.parse(storedInterests));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load travel interests');
    } finally {
      setLoading(false);
    }
  };

  const updateInterests = async (selectedIds: string[]) => {
    try {
      const newInterests: TravelInterests = {
        selectedInterests: selectedIds,
        lastUpdated: Date.now(),
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newInterests));
      setInterests(newInterests);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update travel interests');
      throw err; // Re-throw to handle in the UI
    }
  };

  const clearInterests = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setInterests({
        selectedInterests: [],
        lastUpdated: Date.now(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear travel interests');
      throw err;
    }
  };

  const value: TravelInterestsContextType = {
    interests,
    loading,
    error,
    updateInterests,
    clearInterests,
  };

  return (
    <TravelInterestsContext.Provider value={value}>
      {children}
    </TravelInterestsContext.Provider>
  );
}

export function useTravelInterests() {
  const context = useContext(TravelInterestsContext);
  if (context === undefined) {
    throw new Error('useTravelInterests must be used within a TravelInterestsProvider');
  }
  return context;
}
