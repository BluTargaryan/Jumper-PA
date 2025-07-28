# Jumper-PA 🌍

A travel exploration app built with Expo, featuring interactive maps and tourist destinations around the world.

## Features

- Interactive world map with country markers
- Famous tourist attractions for each country
- Smooth navigation between landing and map screens
- Beautiful UI with animations

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
│   ├── (landing)/          # Landing page screens
│   ├── (main)/            # Main app screens
│   ├── components/        # Reusable components
│   ├── dataUtils/         # Data and utilities
│   └── styleUtils/        # Style configurations
├── assets/
│   ├── fonts/            # Custom fonts
│   └── images/           # App images
```

## Key Components

- `countryMap.tsx`: Interactive world map with country markers
- `about.tsx`: Animated landing page with tourist information
- `countriesData.ts`: Structured data for countries and attractions

## Technologies Used

- Expo Router for navigation
- React Native Maps for map integration
- React Native Reanimated for animations
- TypeScript for type safety
- Custom styling with React Native StyleSheet

## Development

To start developing:
1. Run `npx expo start` to start the development server
2. Use 'a' for Android or 'i' for iOS simulator
3. Use 'r' to reload the app

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
