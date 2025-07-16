import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useEffect } from "react";
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { colors, typography } from "../styleUtils/styleValues";

export default function LocationPermission() {
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
            padding: 40,
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
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Text>
          </View>

          <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            gap: 20,
          }}
          >    
            <TouchableOpacity
            onPress={() => router.push("/travelInterests")} 
            style={{
              flex:1,
              backgroundColor: colors.accent,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 8,
            }}
            >
                <Animated.Text style={[typography.presets.button, {color: colors.text}, buttonTextStyle]}>Yes</Animated.Text>
                <Animated.View style={iconStyle}>
                  <MaterialIcons name="thumb-up" size={24} color={colors.text} />
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity
            style={{
              flex:1,
              backgroundColor: colors.primary,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 8,
            }}
            >
                <Animated.Text style={[typography.presets.button, {color: colors.background}, buttonTextStyle]}>No</Animated.Text>
                <Animated.View style={iconStyle}>
                  <MaterialIcons name="thumb-down" size={24} color={colors.background} />
                </Animated.View>
            </TouchableOpacity>
          </View>

          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
}