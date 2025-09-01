import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import HomeFavorites from "../components/HomeFavorites";
import { HomeSearch } from "../components/HomeSearch";
import MainHeader from "../components/MainHeader";
import ToCountriesHomeLink from "../components/toCountriesHomeLink";
import { colors } from "../styleUtils/styleValues";


export default function Home() {
    const [searchText, setSearchText] = useState("");
    
    // Animated values
    const translateY = useSharedValue(50); // Start 50 units below
    const opacity = useSharedValue(0); // Start at opacity 0
    
    // Start animations on component mount
    useEffect(() => {
        // Rise animation - move from translateY 50 to 0
        translateY.value = withDelay(400, withTiming(0, { duration: 600 }));
        
        // Opacity animation - fade from 0 to 1 after 400ms delay
        opacity.value = withDelay(400, withTiming(1, { duration: 600 }));
    }, []);
    
    // Animated style
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value }
            ],
        };
    });   
  return (
    <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: colors.text,
        }}
    >
      <MainHeader title="Home" />
      <Animated.ScrollView
        style={[
            {
                flex: 1,
            },
            animatedStyle
        ]}
        contentContainerStyle={{
            gap: 54,
            paddingHorizontal: 20,
            paddingBottom: 100,
            flexDirection: 'column',
        }}

      >
      <HomeSearch/>

      <HomeFavorites />
      {/* <HomeInterests /> */}
      <ToCountriesHomeLink />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}