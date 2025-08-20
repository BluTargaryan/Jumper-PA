# Jumper-PA 🌍

A sophisticated travel exploration app built with Expo, featuring interactive maps, detailed country information, tourist destinations worldwide, and personalized travel preferences with smooth animations.

## Features

- **User Experience & Navigation**
  - Animated splash screen with custom fonts
  - Smooth landing page with spring animations
  - Animated dropdown navigation menu
  - Staggered content loading animations
  - Back navigation with context
  - Custom headers with dynamic titles

- **Travel Preferences & Personalization**
  - Travel interests selection
  - Location-based features with permission handling
  - Persistent storage of preferences
  - Interest-based recommendations

- **Country & Destination Exploration**
  - Interactive world map with country markers
  - Country-specific destination maps
  - Detailed country information pages
  - Tourist attraction galleries
  - Favorite countries and destinations system
  - Random attraction highlights

- **Data & State Management**
  - Multiple context providers:
    - FavoritesContext for bookmarking
    - LocationContext for user location
    - TravelInterestsContext for preferences
  - AsyncStorage for data persistence
  - Type-safe data structures
  - Efficient data loading and caching

## Technologies Used

- **Core Technologies**
  - Expo Router for type-safe navigation
  - React Native Maps for interactive maps
  - React Native Reanimated 3 for animations
    - Shared values
    - Spring animations
    - Interpolated styles
    - Staggered animations
  - TypeScript for type safety
  - AsyncStorage for persistence

- **UI Components**
  - Custom animated buttons
  - Reusable cards and headers
  - Dynamic navigation menu
  - Interactive map markers
  - Image galleries with pagination

## Project Structure

\`\`\`
Jumper-PA/
├── app/
│   ├── (landing)/           # Onboarding flow
│   │   ├── index.tsx       # Animated landing
│   │   ├── about.tsx       # App introduction
│   │   ├── locationPermission.tsx  # Location setup
│   │   └── travelInterests.tsx     # Preferences
│   ├── (main)/             # Main app screens
│   │   ├── countryMap.tsx      # World map view
│   │   ├── countryList.tsx     # Countries list
│   │   ├── countryInfo.tsx     # Country details
│   │   ├── destinationMap.tsx  # Attractions map
│   │   ├── destinationList.tsx # Attractions list
│   │   └── destinationInfo.tsx # Attraction details
│   ├── components/         # Reusable components
│   │   ├── AboutCard.tsx
│   │   ├── ContinueButton.tsx
│   │   ├── FavoriteButton.tsx
│   │   ├── InfoButton.tsx
│   │   ├── LocationPermissionButton.tsx
│   │   ├── MainHeader.tsx
│   │   ├── MainHeaderwithBack.tsx
│   │   └── MapListToggleButton.tsx
│   ├── context/           # Application state
│   │   ├── FavoritesContext.tsx
│   │   ├── LocationProvider.tsx
│   │   └── TravelInterestsProvider.tsx
│   ├── dataUtils/         # Data management
│   │   ├── about.ts
│   │   ├── attractions.ts
│   │   └── countriesData.ts
│   ├── styleUtils/        # Styling
│   │   └── styleValues.ts
│   └── types/            # TypeScript types
│       └── location.ts
├── assets/
│   ├── fonts/           # Custom fonts
│   └── images/          # App assets
\`\`\`

## Key Features in Detail

### Animation System
- Spring animations for natural movement
- Shared values for performance
- Staggered loading effects
- Interactive feedback
- Smooth transitions

### Navigation & Routing
- Type-safe routing with Expo Router
- Nested navigation stacks
- Animated transitions
- Deep linking support
- Back navigation handling

### State Management
- Context-based state management
- Persistent storage with AsyncStorage
- Location services integration
- Travel preferences system
- Favorites management

### UI/UX Features
- Custom animated components
- Interactive maps
- Image galleries
- Dynamic loading states
- Error boundaries and fallbacks

## Setup & Development

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Environment Setup:
   - Create a \`.env\` file
   - Add required API keys

3. Start development:
   \`\`\`bash
   npx expo start
   \`\`\`

## Prerequisites

- Node.js
- Expo CLI (\`npm install -g expo-cli\`)
- Google Maps API key
- iOS/Android development environment

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request