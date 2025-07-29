import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Animated, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import MainHeaderwithBack from "../components/MainHeaderwithBack";
import { colors, typography } from "../styleUtils/styleValues";

export default function CountryInfo() {
    const scrollX = useSharedValue(0);
    const buttonStyle = useAnimatedStyle(() => {
        return {
            opacity: scrollX.value > 0 ? 1 : 0,
        };
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, marginTop: 40, alignItems: 'center', justifyContent: 'space-between'}}>
          <MainHeaderwithBack />
          <ScrollView
          style={{
            width: '100%',
          }}

        contentContainerStyle={{
            paddingHorizontal: 24, 
            paddingVertical: 24,
            alignItems: 'center',
            gap: 24,
        }}
       
          >
            <Text
            style={[typography.presets.displaySmall, {color: colors.background, textAlign: 'center'}]}>
                Italy
            </Text>
            <Image
                        source={{uri: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                        style={{
                          flex: 1,
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: 200,
                        }}
                      />
                      <Text
                      style={[typography.presets.bodyLarge, {color: colors.background, textAlign: 'center'}]}>
                        Italy, a treasure trove of art, history, and culinary delights, captivates visitors with its stunning landscapes from the snow-capped Alps to the sun-kissed Mediterranean coastline. Home to iconic landmarks like the Colosseum, Vatican City, and the canals of Venice, Italy offers an unparalleled blend of ancient wonders and modern sophistication. Renowned for its world-class cuisine, fashion, and passionate culture, visitors can explore charming hillside towns in Tuscany, indulge in authentic pasta and gelato, marvel at Renaissance masterpieces in Florence, or unwind along the dramatic Amalfi Coast. Whether you're an art enthusiast, food lover, or history buff, Italy promises an unforgettable journey through Europe's most enchanting destinations.
                      </Text>











                      <View
                      >
                        <Text
            style={[typography.presets.displayXSmall, {color: colors.background, textAlign: 'center'}]}>
                Attractions
            </Text>
            <View
            style={{
              gap: 40,
              flexDirection: 'column',
              alignItems: 'center',
              height: 800, // Add a fixed height constraint
            }}
            >
              <ScrollView 
                horizontal
                style={{
                  paddingVertical: 20,// Add height constraint to ScrollView
                }}
                contentContainerStyle={{
                  paddingHorizontal: 44,
                  gap: 20,
                }}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
              >
                {items.map((item, index) => (
                    <View key={index} style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 10,
                      height: 600,
                      width: 320,
                      paddingVertical: 20, // Reduced padding
                      paddingHorizontal: 20,
                      gap: 16, // Reduced gap
                      backgroundColor: item.color === "primary" ? colors.primary : item.color === "secondary" ? colors.secondary : colors.accent,
                    }}>
                      <Image
                        source={item.image}
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
              </ScrollView>
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
                onPress={() => router.push("/(main)/countryMap")}
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
            </View>
                      </View>
          </ScrollView>
        </SafeAreaView>

    )
}