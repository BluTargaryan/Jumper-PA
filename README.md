# Jumper-PA 🌍

A sophisticated travel exploration app built with Expo, featuring interactive maps, detailed country information, tourist destinations worldwide, and personalized favorites with smooth animations.

## Features

- **Interactive Maps**
  - World map with country markers
  - Country-specific maps with attraction points
  - Automatic map focusing and smooth animations
  - Interactive markers for tourist attractions
  - Location-based features with permission handling

- **Country & Destination Management**
  - Detailed country information with images
  - Famous tourist attractions for each country
  - Favorite countries and destinations system
  - Persistent storage of favorites
  - Staggered animations for content display
  - Image galleries and descriptions

- **Navigation & UI**
  - Smooth transitions between screens
  - Animated content loading with Reanimated
  - Back navigation support
  - Error handling with graceful fallbacks
  - Custom animated components

- **Data Management**
  - Context-based state management
  - AsyncStorage for persistent data
  - Type-safe data structures
  - Efficient data loading and caching

## Prerequisites

Before you begin, ensure you have:
- Node.js installed
- Expo CLI installed (`npm install -g expo-cli`)
- Google Maps API key for map functionality
- AsyncStorage capability for data persistence

## Setup

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd Jumper-PA
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Environment Setup
   - Create a `.env` file in the root directory
   - Add your Google Maps API key:
     ```
     EXPO_GMAP_API_LOCKE=your_google_maps_api_key
     ```

4. Start the development server
   ```bash
   npx expo start
   ```

## Project Structure

```
Jumper-PA/
├── app/
│   ├── (landing)/          # Landing and onboarding screens
│   │   ├── about.tsx       # App introduction
│   │   ├── index.tsx       # Landing page
│   │   └── travelInterests.tsx  # User preferences
│   ├── (main)/            # Main app screens
│   │   ├── countryInfo.tsx    # Country details with animations
│   │   ├── countryList.tsx    # List of countries
│   │   ├── countryMap.tsx     # World map view
│   │   ├── destinationInfo.tsx # Attraction details
│   │   ├── destinationList.tsx # List of attractions
│   │   └── destinationMap.tsx  # Country-specific map
│   ├── components/        # Reusable components
│   │   ├── MainHeader.tsx
│   │   └── MainHeaderwithBack.tsx
│   ├── context/          # Application context
│   │   └── FavoritesContext.tsx  # Favorites management
│   ├── dataUtils/        # Data and utilities
│   │   └── countriesData.ts   # Country and attraction data
│   └── styleUtils/       # Style configurations
│       └── styleValues.ts     # Colors and typography
├── assets/
│   ├── fonts/           # Custom fonts
│   └── images/          # App images
```

## Key Components

- `FavoritesContext.tsx`: Global favorites management with persistence
- `countryInfo.tsx`: Detailed country view with staggered animations
- `destinationMap.tsx`: Interactive map with attraction markers
- `countriesData.ts`: Comprehensive data structure for countries and attractions

## Technologies Used

- **Expo Router** for type-safe navigation
- **React Native Maps** for interactive maps
- **React Native Reanimated** for smooth animations
  - Staggered animations
  - Scale transitions
  - Slide and fade effects
- **AsyncStorage** for data persistence
- **Context API** for state management
- **TypeScript** for type safety
- **Custom Components** for consistent UI
- **Shared Values** for performant animations

## Features in Detail

### Favorites System
- Favorite countries and destinations
- Persistent storage using AsyncStorage
- Type-safe context implementation
- Efficient state management
- Easy-to-use hooks for accessing favorites

### Animations
- Staggered content loading
- Smooth transitions between states
- Scale animations for interactive elements
- Performance-optimized using Reanimated

### Data Management
- Type-safe data structures
- Efficient data loading
- Persistent storage
- Error handling and fallbacks

## Development

To start developing:
1. Run `npx expo start` to start the development server
2. Use 'a' for Android or 'i' for iOS simulator
3. Use 'r' to reload the app
4. Check the terminal for any environment-related warnings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request