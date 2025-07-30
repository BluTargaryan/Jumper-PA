import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import MainHeaderwithBack from "../components/MainHeaderwithBack";
import { CountryData, TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors, typography } from "../styleUtils/styleValues";

export default function CountryInfo() {
    const { id } = useLocalSearchParams();
    const country: CountryData | undefined = TOP_TOURIST_COUNTRIES.find((country) => country.id === id); 
    const scrollX = useSharedValue(0);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, marginTop: 40, alignItems: 'center'}}>
          <MainHeaderwithBack />
          <ScrollView
          style={{
            width: '100%',
          }}

        contentContainerStyle={{
            paddingHorizontal: 24, 
            paddingVertical: 24,
            alignItems: 'center',
            gap: 40,
        }}
       
          >
            <Text
            style={[typography.presets.displaySmall, {color: colors.background, textAlign: 'center'}]}>
                {country?.name}
            </Text>
            <Image
                        source={{uri: country?.image}}
                        style={{
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: 200,
                        }}
                      />
                      <Text
                      style={[typography.presets.bodyLarge, {color: colors.background, textAlign: 'center'}]}>
                        {country?.description}
                      </Text>











                      <View

                    style={{
                      gap: 24,
                    }}
                      >
                        <Text
            style={[typography.presets.displayXSmall, {color: colors.background, textAlign: 'center'}]}>
                Destinations
            </Text>
            <View
            style={{
              gap: 12,
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              <Animated.ScrollView 
                horizontal
                style={{
                  height:'auto',
                  flexShrink: 1,
                  flexGrow: 0,
                }}
                contentContainerStyle={{
                  paddingHorizontal: 44,
                  paddingVertical: 20,
                  gap: 20,
                  alignSelf: 'flex-start',
                }}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll={useAnimatedScrollHandler({
                  onScroll: (event) => {
                    scrollX.value = event.contentOffset.x;
                  },
                })}
              >
                {country?.attractions.slice(0, 3).map((item, index) => (
                    <View key={index} style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 10,
                      width: 320,
                      height: 'auto',
                      paddingVertical: 20,
                      paddingHorizontal: 20,
                      justifyContent: 'flex-start',
                      gap: 16,
                      backgroundColor: colors.secondary
                    }}>
                      <Image
                        source={{uri: item.image}}
                        style={{
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: 265,
                        }}
                      />
                      <View style={{
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
                              color:colors.text,
                            }
                          ]}
                        >{item.name}</Text>
                        <Text
                          style={[
                            typography.presets.bodyLarge,
                            typography.positions.center,
                            {
                              color:colors.text,
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
                {country?.attractions.slice(0, 3).map((_, index) => {
                  const dotStyle = useAnimatedStyle(() => {
                    // Calculate the center position of each card
                    const cardWidth = 340; // Total width of card + gap
                    const cardCenter = index * cardWidth;
                    
                    // Calculate how far the current scroll position is from this card's center
                    const distance = Math.abs(scrollX.value - cardCenter);
                    
                    // If we're within half a card width, interpolate to 1, otherwise stay at 0.5
                    const opacity = interpolate(
                      distance,
                      [0, cardWidth / 2],
                      [1, 0.5],
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

              
            </View>
            
                      </View>

                      <Animated.View>
                <TouchableOpacity
                onPress={() => router.push("/(main)/countryMap")}
                  style={{
                    width: 325,
                    height: 52,
                    backgroundColor: colors.accent,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}
                >
                  <Text style={[typography.presets.button, {color: colors.text}]}>See all destinations</Text>
                  <MaterialIcons name="arrow-forward" size={24} color={colors.text} />              
                </TouchableOpacity>
              </Animated.View>
          </ScrollView>
        </SafeAreaView>

    )
}