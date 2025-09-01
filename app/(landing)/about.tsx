import { router } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, ScrollView, View, useWindowDimensions } from "react-native";
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
import AboutCard from '../components/AboutCard';
import ContinueButton from '../components/ContinueButton';
import { ABOUT_US } from '../dataUtils/about';
import { colors } from "../styleUtils/styleValues";

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
              flex: 1
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
                  style={[ listStyle]}
                contentContainerStyle={{
                  paddingHorizontal: 44,
                  gap: 20,
                }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
              >
                {ABOUT_US.map((item, index) => (
                    <AboutCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        color={item.color}
                    />
                ))}
              </Animated.ScrollView>
              <View style={{
                flexDirection: 'row',
                gap: 8,
              }}>
                {ABOUT_US.map((item, index) => {
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

              <ContinueButton 
                style={[buttonStyle,
                  {
                   width: 320,
                  }
                ]}
                onPress={() => router.replace("/(landing)/locationPermission")}
                buttonText="Continue"
                backgroundColor={colors.background}
                icon="arrow-forward"
                iconStyle={{}}
              />
            </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
}