import * as Location from 'expo-location';
import { createContext, useContext, useEffect, useState } from 'react';
import { LocationContextType, LocationData } from '../types/location';

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateLocation = async (newLocation: LocationData) => {
    try {
      setLocation(newLocation);
      // Here you could also persist the location to AsyncStorage or your backend
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update location');
    }
  };

  const requestLocationPermission = async (): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const granted = status === 'granted';
      setPermissionGranted(granted);

      if (granted) {
        const location = await Location.getCurrentPositionAsync({});
        const locationData: LocationData = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          timestamp: location.timestamp,
          permissionGranted: true
        };
        await updateLocation(locationData);
      }

      return granted;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to request location permission');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Watch for location changes when permission is granted
  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null = null;

    if (permissionGranted) {
      (async () => {
        try {
          locationSubscription = await Location.watchPositionAsync(
            {
              accuracy: Location.Accuracy.High,
              timeInterval: 10000, // Update every 10 seconds
              distanceInterval: 10, // Update every 10 meters
            },
            (location) => {
              updateLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                timestamp: location.timestamp,
                permissionGranted: true
              });
            }
          );
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to watch location');
        }
      })();
    }

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, [permissionGranted]);

  const value: LocationContextType = {
    location,
    permissionGranted,
    loading,
    error,
    updateLocation,
    setPermissionGranted,
    requestLocationPermission
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
