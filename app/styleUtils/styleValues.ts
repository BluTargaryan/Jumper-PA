// Colors
export const colors = {
  primary: '#1D4E80',
  secondary: '#90BFE3',
  accent: '#FFBE27',
  background: '#FFFAF1',
  text: '#0E0E1B',
  red: '#FF0000',
} as const;

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Border Radius
export const borderRadius = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
  rounded: '50%',
} as const;

// Typography
export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    display: 48,
    hero: 64
  },
  positions: {
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
  },
  weights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  families: {
    wanderlust: 'Wanderlust',  // Decorative font for headlines
    montserrat: 'Montserrat',  // Primary font for body text
    system: 'System',  // System default as fallback
  },
  presets: {
    // Wanderlust presets for decorative headlines
    displayLarge: {
      fontFamily: 'Wanderlust',
      fontSize: 64,
    },
    displayMedium: {
      fontFamily: 'Wanderlust',
      fontSize: 48,
    },
    displaySmall: {
      fontFamily: 'Wanderlust',
      fontSize: 32,
    },
    displayXSmall: {
      fontFamily: 'Wanderlust',
      fontSize: 24,
    },
    displayXXSmall: {
      fontFamily: 'Wanderlust',
      fontSize: 16,
    },
    
    // Montserrat presets for body text
    headingLarge: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 24,
    },
    headingMedium: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 20,
    },
    headingSmall: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16,
    },
    bodyLarge: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 16,
    },
    bodyMedium: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
    },
    bodySmall: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
    },
    button: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16,
    },
    caption: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
    },
  },
} as const;

// Layout
export const layout = {
  iconSizes: {
    small: 24,
    medium: 48,
    large: 78,  // Your current icon size
  },
  buttonSizes: {
    small: {
      width: 120,
      height: 40,
    },
    medium: {
      width: 180,
      height: 56,
    },
    large: {
      width: 230,  // Your current button width
      height: 73,  // Your current button height
    },
  },
} as const;

// Shadows (for iOS and Android)
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  },
} as const;

export default {
  colors,
  spacing,
  borderRadius,
  typography,
  layout,
  shadows,
} as const;
