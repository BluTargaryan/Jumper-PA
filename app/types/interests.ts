
export interface TravelInterests {
  selectedInterests: string[];  // Array of attraction IDs
  lastUpdated: number;         // Timestamp
}

export interface TravelInterestsContextType {
  interests: TravelInterests;
  loading: boolean;
  error: string | null;
  updateInterests: (selectedIds: string[]) => Promise<void>;
  clearInterests: () => Promise<void>;
}

export default TravelInterests;
