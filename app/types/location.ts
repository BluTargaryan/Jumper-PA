export interface LocationData {
  latitude: number;
  longitude: number;
  timestamp: number;
  permissionGranted: boolean;
}

export interface LocationContextType {
  location: LocationData | null;
  permissionGranted: boolean;
  loading: boolean;
  error: string | null;
  updateLocation: (location: LocationData) => void;
  setPermissionGranted: (granted: boolean) => void;
  requestLocationPermission: () => Promise<boolean>;
}
