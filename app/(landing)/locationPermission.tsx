import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationPermissionButton from '../components/LocationPermissionButton';
import { useLocation } from '../context/LocationProvider';
import { colors, typography } from "../styleUtils/styleValues";

export default function LocationPermission() {
  const { requestLocationPermission, loading, error } = useLocation();
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const jumperY = useSharedValue(-100); // Start above screen
  const bgScale = useSharedValue(1.5);
  const bgOpacity = useSharedValue(0);
  const contentScale = useSharedValue(0);
  const buttonTextScaleX = useSharedValue(0);
  const iconScaleX = useSharedValue(0);
  const iconRotate = useSharedValue(45);

  useEffect(() => {
    // Animate the jumper dropping in
    jumperY.value = withDelay(200, withTiming(0, { duration: 300 }));
    // Animate background
    bgScale.value = withTiming(1, { duration: 200 });
    bgOpacity.value = withTiming(1, { duration: 200 });
    // Animate content scaling
    contentScale.value = withDelay(400, withTiming(1, { duration: 300 }));
    // Animate button text scaling
    buttonTextScaleX.value = withDelay(800, withTiming(1, { duration: 300 }));
    // Animate icons
    iconScaleX.value = withDelay(1000, withTiming(1, { duration: 300 }));
    iconRotate.value = withDelay(1000, withTiming(0, { duration: 300 }));
  }, []);

  const jumperStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: jumperY.value }]
  }));

  const bgStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bgScale.value }],
    opacity: bgOpacity.value,
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ scale: contentScale.value }]
  }));

  const buttonTextStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: buttonTextScaleX.value }]
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { scaleX: iconScaleX.value },
      { rotate: `${iconRotate.value}deg` }
    ]
  }));

  return (
    <Animated.View style={[{ flex: 1 }, bgStyle]}>
      <ImageBackground
        source={require("../../assets/images/landing-duo-image.png")}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      >
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 40,
        }}>

<Animated.Image
                source={require("../../assets/images/jumper-icon.png")}
                style={[{
                  width: 40,
                  height: 40,
                }, jumperStyle]}
              />

          <Animated.View
            style={[{
              flex:1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20
            }, contentStyle]}>
          
          <View
          style={{
            width: 347,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.secondary,
            gap:12,
            paddingVertical: 40,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          >
            <Text style={[typography.presets.displaySmall, {color: colors.text, textAlign: 'center'}]}>Location Permission</Text>
            <Text style={[typography.presets.bodyLarge, {color: colors.text, textAlign: 'center'}]}>
              We need your location to provide personalized travel recommendations and help you find nearby attractions. Your location data will only be used to enhance your travel experience.
            </Text>
            {(error || permissionError) && (
              <Text style={[typography.presets.bodySmall, {color: colors.accent, textAlign: 'center'}]}>
                {error || permissionError}
              </Text>
            )}
          </View>

          <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            gap: 20,
          }}
          >    
            <LocationPermissionButton
                onPress={async () => {
                  try {
                    const granted = await requestLocationPermission();
                    if (granted) {
                      router.push("/(landing)/travelInterests");
                    } else {
                      setPermissionError("Location permission is required for better experience");
                    }
                  } catch (err) {
                    setPermissionError("Failed to request location permission");
                  }
                }}
                text="Yes"
                icon="thumb-up"
                variant="accent"
                buttonTextStyle={buttonTextStyle}
                iconStyle={iconStyle}
                flex
                disabled={loading}
            />

            <LocationPermissionButton
                onPress={() => {
                  router.push("/(landing)/travelInterests");
                }}
                text="No"
                icon="thumb-down"
                variant="primary"
                buttonTextStyle={buttonTextStyle}
                iconStyle={iconStyle}
                flex
                disabled={loading}
            />
          </View>

          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
}