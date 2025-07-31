# Jumper-PA 🌍

A sophisticated travel exploration app built with Expo, featuring interactive maps, detailed country information, and tourist destinations worldwide with smooth animations.

## Features

- **Interactive Maps**
  - World map with country markers
  - Country-specific maps with attraction points
  - Automatic map focusing and smooth animations
  - Interactive markers for tourist attractions

- **Country Exploration**
  - Detailed country information with images
  - Famous tourist attractions for each country
  - Staggered animations for content display
  - Image galleries and descriptions

- **Navigation & UI**
  - Smooth transitions between screens
  - Animated content loading
  - Back navigation support
  - Error handling with graceful fallbacks

## Prerequisites

Before you begin, ensure you have:
- Node.js installed
- Expo CLI installed (`npm install -g expo-cli`)
- Google Maps API key for map functionality

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
│   ├── dataUtils/         # Data and utilities
│   │   └── countriesData.ts   # Country and attraction data
│   └── styleUtils/        # Style configurations
│       └── styleValues.ts     # Colors and typography
├── assets/
│   ├── fonts/            # Custom fonts
│   └── images/           # App images
```

## Key Components

- `countryInfo.tsx`: Detailed country view with staggered animations
- `destinationMap.tsx`: Interactive map with attraction markers and auto-focusing
- `countriesData.ts`: Comprehensive data structure for countries and attractions

## Technologies Used

- **Expo Router** for type-safe navigation
- **React Native Maps** for interactive maps
- **React Native Reanimated** for smooth animations
  - Staggered animations
  - Slide transitions
  - Fade effects
- **TypeScript** for type safety
- **Custom Components** for consistent UI
- **Shared Values** for performant animations

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