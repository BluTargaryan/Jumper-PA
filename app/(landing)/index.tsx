import { router } from "expo-router";
import { useEffect } from "react";
import { ImageBackground, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring
} from 'react-native-reanimated';
import { colors, typography } from "../styleUtils/styleValues";

export default function Index() {
  const width = useSharedValue(54);
  const height = useSharedValue(54);
  const textOpacity = useSharedValue(0);
  
  useEffect(() => {
    width.value = withDelay(800, withSpring(230, {
      damping: 12,
      stiffness: 90
    }));
    height.value = withDelay(800, withSpring(73, {
      damping: 12,
      stiffness: 90
    }));
    textOpacity.value = withDelay(800, withSpring(1, {
      damping: 15,
      stiffness: 60
    }));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.replace("/about");
    }, 2000);
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    width: width.value,
    height: height.value
  }));

  const textAnimatedStyles = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    display: textOpacity.value === 0 ? 'none' : 'flex'
  }));

  return (
    <ImageBackground
      source={require("../../assets/images/landing-image.png")}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View 
          style={[{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:colors.background,
            borderRadius:57,
            gap:13,
          }, animatedStyles]}
        >
          <Animated.Image 
            source={require("../../assets/images/jumper-icon.png")} 
            style={{ width: 54, height: 54, resizeMode: 'contain' }} 
          />
          <Animated.Text 
            style={[typography.presets.displaySmall, { color: colors.primary }, textAnimatedStyles]}
          >
            Jumper
          </Animated.Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}
