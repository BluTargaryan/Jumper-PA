import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography } from "../styleUtils/styleValues";

export default function About() {
  const { width } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const jumperY = useSharedValue(-100); // Start above screen
  const bgScale = useSharedValue(1.5);
  const bgOpacity = useSharedValue(0);
  const buttonY = useSharedValue(100); // Start below screen
  const listX = useSharedValue(width); // Start from screen width (right side)

  useEffect(() => {
    // Animate the jumper dropping in
    jumperY.value = withDelay(200, withTiming(0, { duration: 300 }));
    // Animate background
    bgScale.value = withTiming(1, { duration: 200 });
    bgOpacity.value = withTiming(1, { duration: 200 });
    // Animate button sliding up
    buttonY.value = withDelay(400, withTiming(0, { duration: 300 }));
    // Animate list sliding in
    listX.value = withDelay(600, withTiming(0, { duration: 400 }));
  }, []);

  const jumperStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: jumperY.value }]
  }));

  const bgStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bgScale.value }],
    opacity: bgOpacity.value,
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: buttonY.value }]
  }));

  const listStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: listX.value }]
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const items = [
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"secondary"
    },
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"primary"
    },  
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"accent"
    }
  ]
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
        }}>
          
            <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              gap: 40,
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
            >
              <Animated.Image
                source={require("../../assets/images/jumper-icon.png")}
                style={[{
                  width: 40,
                  height: 40,
                }, jumperStyle]}
              />
              <Animated.ScrollView 
                horizontal
                style={[{
                  height: 590
                }, listStyle]}
                contentContainerStyle={{
                  paddingHorizontal: 44,
                  gap: 20,
                }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
              >
                {items.map((item, index) => (
                    <View key={index} style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 10,
                      width: 320,
                      paddingVertical: 40,
                      paddingHorizontal: 20,
                      gap: 32,
                      backgroundColor: item.color === "primary" ? colors.primary : item.color === "secondary" ? colors.secondary : colors.accent,
                    }}>
                      <Image
                        source={item.image}
                        style={{
                          flex: 1,
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: '100%',
                        }}
                      />
                      <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                      }}>
                        <Text
                          style={[
                            typography.presets.displaySmall,
                            typography.positions.center,
                            {
                              color:item.color==="primary"?colors.background:colors.text,
                            }
                          ]}
                        >{item.title}</Text>
                        <Text
                          style={[
                            typography.presets.bodyLarge,
                            typography.positions.center,
                            {
                              color:item.color==="primary"?colors.background:colors.text,
                            }
                          ]}
                        >{item.description}</Text>
                      </View>
                    </View>
                ))}
              </Animated.ScrollView>
              <View style={{
                flexDirection: 'row',
                gap: 8,
              }}>
                {items.map((item, index) => {
                  const dotStyle = useAnimatedStyle(() => {
                    const opacity = interpolate(
                      scrollX.value,
                      [(index - 1) * 340, index * 340, (index + 1) * 340],
                      [0.5, 1, 0.5],
                      Extrapolate.CLAMP
                    );
                    return {
                      opacity,
                    };
                  });

                  return (
                    <Animated.View 
                      key={index} 
                      style={[{
                        width: 14,
                        height: 14,
                        borderRadius: 7,
                        backgroundColor: colors.background,
                      },
                      dotStyle
                      ]}
                    />
                  );
                })}
              </View>

              <Animated.View style={buttonStyle}>
                <TouchableOpacity
                onPress={() => router.push("/locationPermission")}
                  style={{
                    width: 325,
                    height: 52,
                    backgroundColor: colors.background,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}
                >
                  <Text style={[typography.presets.button, {color: colors.text}]}>Continue</Text>
                  <MaterialIcons name="arrow-forward" size={24} color={colors.text} />              
                </TouchableOpacity>
              </Animated.View>
            </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
}