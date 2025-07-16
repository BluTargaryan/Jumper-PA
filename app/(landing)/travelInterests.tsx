import { useEffect } from "react";
import { Animated, SafeAreaView, Text } from "react-native";
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { colors } from "../styleUtils/styleValues";


export default function TravelInterests() {

    const jumperY = useSharedValue(-100); // Start above screen

    useEffect(() => {
        // Animate the jumper dropping in
        jumperY.value = withDelay(200, withTiming(0, { duration: 300 }));
    }, []);

    const jumperStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: jumperY.value }]
      }));
  return (
    <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        backgroundColor: colors.primary,
    }}>
        <Animated.Image
                source={require("../../assets/images/jumper-icon.png")}
                style={[{
                  width: 40,
                  height: 40,
                }, jumperStyle]}
              />
        <Text>Travel Interests</Text>
    </SafeAreaView>
  );
}