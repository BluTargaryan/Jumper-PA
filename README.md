# Jumper-PA 🌍

A sophisticated travel exploration app built with Expo and React Native, featuring interactive maps, detailed country information, tourist destinations worldwide, personalized travel preferences, favorites management, trip booking integration, and beautiful animations powered by Reanimated 3.

## Features

- **Home Dashboard & Search**
  - Animated home screen with smooth entrance effects
  - Real-time search functionality for countries and attractions
  - Dynamic search results with category organization
  - Quick access to favorites and popular destinations
  - Smooth scrolling animations with opacity and translation effects

- **User Experience & Navigation**
  - Animated splash screen with custom fonts
  - Smooth landing page with spring animations
  - Type-safe navigation with Expo Router
  - Back navigation with context-aware headers
  - Animated transitions between screens

- **Travel Preferences & Personalization**
  - Travel interests selection and management
  - Location-based features with permission handling
  - Persistent storage of preferences with AsyncStorage
  - Interest-based recommendations


- **Interactive Maps & Exploration**
  - Interactive world map with country markers
  - Country-specific destination maps with detailed markers
  - Animated map loading with smooth entrance effects
  - Map/List toggle functionality with animated transitions
  - Real-time marker interactions and selection

- **Favorites Management System**
  - Comprehensive favorites system for countries and destinations
  - Animated favorites display with map and list views
  - Toggle between countries and destinations favorites
  - Persistent favorites storage across sessions
  - Quick access from home dashboard

- **Trip Booking Integration**
  - Integrated trip booking via WebView
  - Direct integration with booking platforms
  - Country-specific booking suggestions
  - Booking confirmation handling
  - Error handling and retry mechanisms

- **Country & Destination Information**
  - Detailed country information pages
  - Tourist attraction galleries with rich media
  - Comprehensive destination details
  - Interactive attraction maps
  - Related destinations and recommendations

- **Data & State Management**
  - Multiple context providers:
    - FavoritesContext for bookmarking management
    - LocationContext for user location services
    - TravelInterestsContext for preferences
  - AsyncStorage for data persistence
  - Type-safe data structures with TypeScript
  - Efficient data loading and caching strategies

## Technologies Used

- **Core Framework & Navigation**
  - Expo SDK ~53.0.17 with new architecture enabled
  - React Native 0.79.5
  - Expo Router ~5.1.3 for type-safe navigation
  - React 19.0.0 with latest features
  - TypeScript ~5.8.3 for type safety

- **Animation & UI**
  - React Native Reanimated ~3.17.4 for advanced animations
    - Shared values for performance
    - withTiming and withDelay for smooth transitions
    - useAnimatedStyle for dynamic styling
    - Opacity and transform animations
  - React Native Paper ^5.14.5 for Material Design components
  - Custom animated components and transitions
  - Expo Blur ~14.1.5 for visual effects

- **Maps & Location**
  - React Native Maps 1.20.1 for interactive maps
  - Expo Location ~18.1.6 for GPS services
  - Custom map markers and overlays
  - Region-based map interactions

- **Data & Storage**
  - AsyncStorage 2.1.2 for persistent data storage
  - Context API for state management
  - Type-safe data structures
  - Efficient caching mechanisms

- **Web & External Integration**
  - React Native WebView 13.13.5 for trip booking
  - Expo Web Browser ~14.2.0 for external links
  - Integration with booking platforms

- **Development & Build Tools**
  - Expo CLI for development workflow
  - ESLint ^9.25.0 with Expo config
  - Babel ^7.25.2 for transpilation
  - Metro bundler for web builds

- **Additional Features**
  - Country Flag Icons ^1.5.19 for flag displays
  - Expo Haptics ~14.1.4 for tactile feedback
  - Expo Image ~2.3.2 for optimized image handling
  - React Native SVG 15.11.2 for vector graphics

## Project Structure

\`\`\`
Jumper-PA/
├── app/
│   ├── _layout.tsx           # Root app layout
│   ├── (landing)/            # Onboarding flow
│   │   ├── _layout.tsx      # Landing layout
│   │   ├── index.tsx        # Animated landing page
│   │   ├── about.tsx        # App introduction
│   │   ├── locationPermission.tsx  # Location setup
│   │   └── travelInterests.tsx     # Preferences selection
│   ├── (main)/              # Main app screens
│   │   ├── _layout.tsx      # Main app layout
│   │   ├── home.tsx         # Dashboard with animated search & favorites
│   │   ├── interests.tsx    # Travel interests management
│   │   ├── bookTrip.tsx     # WebView booking integration
│   │   ├── countryMap.tsx   # World map view
│   │   ├── countryList.tsx  # Countries list
│   │   ├── countryInfo.tsx  # Detailed country information
│   │   ├── destinationMap.tsx    # Attractions map
│   │   ├── destinationList.tsx   # Attractions list
│   │   ├── destinationInfo.tsx   # Attraction details
│   │   ├── favoritesCountriesList.tsx    # Favorites countries list
│   │   ├── favoritesCountriesMap.tsx     # Favorites countries map
│   │   ├── favoritesDestinationList.tsx  # Favorites destinations list
│   │   └── favoritesDestinationMap.tsx   # Favorites destinations map
│   ├── components/          # Reusable UI components
│   │   ├── AboutCard.tsx    # About section card
│   │   ├── ContinueButton.tsx           # Animated continue button
│   │   ├── CountryListItem.tsx          # Country list item
│   │   ├── DestinationListItem.tsx      # Destination list item
│   │   ├── FavoriteButton.tsx           # Favorite toggle button
│   │   ├── HomeFavorites.tsx            # Main favorites component
│   │   ├── HomeFavoritesCountryList.tsx     # Countries favorites list
│   │   ├── HomeFavoritesCountryMap.tsx      # Countries favorites map
│   │   ├── HomeFavoritesDestinationList.tsx # Destinations favorites list
│   │   ├── HomeFavoritesDestinationMap.tsx  # Destinations favorites map
│   │   ├── HomeInterests.tsx            # Interests section
│   │   ├── HomeInterestsListItem.tsx    # Interest list item
│   │   ├── HomeSearch.tsx               # Animated search component
│   │   ├── HomeSearchCategory.tsx       # Search category grouping
│   │   ├── HomeSearchCategoryHeader.tsx # Search category header
│   │   ├── HomeSearchCategoryItem.tsx   # Search result item
│   │   ├── HomeSectionHeader.tsx        # Section header component
│   │   ├── InfoButton.tsx               # Information button
│   │   ├── LocationPermissionButton.tsx # Location permission handler
│   │   ├── MainHeader.tsx               # Main app header
│   │   ├── MainHeaderwithBack.tsx       # Header with back navigation
│   │   ├── Map.tsx                      # Interactive map component
│   │   ├── MapFloatButton.tsx           # Floating map button
│   │   ├── MapListToggleButton.tsx      # Map/List toggle
│   │   └── toCountriesHomeLink.tsx      # Navigation link component
│   ├── context/             # State management
│   │   ├── FavoritesContext.tsx         # Favorites state management
│   │   ├── LocationProvider.tsx         # Location services
│   │   └── TravelInterestsProvider.tsx  # Travel preferences
│   ├── dataUtils/           # Data management
│   │   ├── about.ts         # About page data
│   │   ├── attractions.ts   # Attractions data
│   │   └── countriesData.ts # Countries and destinations data
│   ├── styleUtils/          # Styling utilities
│   │   └── styleValues.ts   # Colors, typography, and theme
│   └── types/              # TypeScript definitions
│       ├── interests.ts    # Travel interests types
│       └── location.ts     # Location-related types
├── assets/
│   ├── fonts/              # Custom typography
│   │   ├── Montserrat-*.ttf
│   │   ├── SpaceMono-Regular.ttf
│   │   └── WanderlustRegular.ttf
│   └── images/             # App assets and icons
│       ├── icon.png
│       ├── splash-icon.png
│       ├── landing-*.png
│       └── about-*.png
├── app.config.js           # Expo configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Key Features in Detail

### Advanced Animation System
- **React Native Reanimated 3** with shared values for optimal performance
- **Entrance animations** with opacity and translateY transformations
- **Delayed animations** using withDelay for choreographed sequences
- **Search animations** with dynamic height transitions
- **Map loading animations** with smooth entrance effects
- **Favorites toggle animations** between map and list views
- **Staggered loading** for improved user experience

### Home Dashboard Features
- **Animated search bar** with real-time filtering
- **Dynamic search results** categorized by countries and attractions
- **Favorites section** with animated map/list toggle
- **Countries vs Destinations** toggle with smooth transitions
- **Quick navigation** to detailed views
- **Smooth scrolling** with entrance animations

### Interactive Maps System
- **World map** with country markers and interactions
- **Destination-specific maps** with attraction markers
- **Animated map loading** with performance optimizations
- **Marker press handling** with floating action buttons
- **Region-based interactions** and zoom controls
- **Custom map styling** with branded colors

### Comprehensive Favorites Management
- **Dual-mode favorites**: Countries and Destinations
- **Animated view switching** between map and list presentations
- **Persistent storage** with AsyncStorage integration
- **Real-time updates** across all app sections
- **Quick access** from home dashboard
- **Visual feedback** for favorite actions

### Trip Booking Integration
- **WebView-based booking** with major travel platforms
- **Country-specific suggestions** and deep linking
- **Booking confirmation handling** with user feedback
- **Error handling and retry** mechanisms
- **Progress indicators** and loading states
- **Seamless navigation** back to app content

### State Management Architecture
- **Context-based state** with multiple providers
- **FavoritesContext**: Manages bookmarking across the app
- **LocationContext**: Handles GPS and location permissions
- **TravelInterestsContext**: Manages user preferences
- **AsyncStorage integration** for data persistence
- **Type-safe data structures** with comprehensive TypeScript support

### Navigation & Routing
- **Expo Router** with file-based routing
- **Nested navigation stacks** for organized user flows
- **Type-safe navigation** with TypeScript integration
- **Deep linking support** for external integrations
- **Context-aware back navigation** with appropriate headers
- **Animated screen transitions** for smooth user experience

## Setup & Development

### Prerequisites

- **Node.js** (v18 or higher)
- **Expo CLI** (\`npm install -g @expo/cli\`)
- **Google Maps API Key** for map functionality
- **iOS/Android development environment** for device testing

### Installation & Setup

1. **Clone the repository**:
   \`\`\`bash
   git clone <repository-url>
   cd Jumper-PA
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Configuration**:
   - Create a \`.env\` file in the root directory
   - Add your Google Maps API key:
   \`\`\`env
   EXPO_GMAP_API_LOCKE=your_google_maps_api_key_here
   \`\`\`

4. **Start development server**:
   \`\`\`bash
   npx expo start
   \`\`\`

5. **Run on devices**:
   \`\`\`bash
   # iOS Simulator
   npx expo start --ios
   
   # Android Emulator
   npx expo start --android
   
   # Web browser
   npx expo start --web
   \`\`\`

### Development Workflow

- **Hot Reloading**: Changes are automatically reflected in the app
- **TypeScript**: Full type checking and IntelliSense support
- **Linting**: ESLint configuration for code quality
- **Debugging**: React Native Debugger and Expo Dev Tools

### Build Configuration

The app is configured with:
- **New Architecture**: Enabled for better performance
- **Edge-to-Edge**: Android configuration for modern UI
- **Location Permissions**: Pre-configured for both platforms
- **Custom Fonts**: Montserrat and Wanderlust fonts included
- **Splash Screen**: Custom branded splash configuration

## App Highlights

🌍 **Interactive Travel Exploration**: World map with country and destination markers
🎨 **Beautiful Animations**: Reanimated 3 powered smooth transitions and entrance effects  
❤️ **Smart Favorites**: Dual-mode favorites system with animated map/list views
🔍 **Real-time Search**: Dynamic search with category organization
✈️ **Trip Booking**: Integrated WebView booking with major travel platforms
📱 **Modern UI**: Material Design components with custom theming
🗺️ **Location Services**: GPS integration with permission handling
💾 **Data Persistence**: AsyncStorage for favorites and preferences
🔧 **Developer Experience**: TypeScript, ESLint, and hot reloading

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using Expo and React Native**