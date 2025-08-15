import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteButton from "../components/FavoriteButton";
import MainHeaderwithBack from "../components/MainHeaderwithBack";
import { useFavorites } from "../context/FavoritesContext";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors, typography } from "../styleUtils/styleValues";

export default function DestinationInfo() {
    const { name } = useLocalSearchParams();

    const { isDestinationFavorited, toggleFavoriteDestination, getFavoritedDestinations } = useFavorites();
    const country = TOP_TOURIST_COUNTRIES.find(country => country.attractions.some(attraction => attraction.name === name));
    const destination = TOP_TOURIST_COUNTRIES.flatMap(country => country.attractions).find(attraction => attraction.name === name);
    const scrollX = useSharedValue(0);
    const headerSlideAnim = useSharedValue(1000);
    const imageSlideAnim = useSharedValue(1000);
    const descriptionSlideAnim = useSharedValue(1000);
    const destinationsSlideAnim = useSharedValue(1000);
    const attractionsSlideAnim = useSharedValue(1000); // Start from 100 (off screen to the right)
    
    useEffect(() => {
        // Staggered animations starting at 600ms, with 200ms intervals
        headerSlideAnim.value = withDelay(100, withTiming(0));
        imageSlideAnim.value = withDelay(200, withTiming(0));
        descriptionSlideAnim.value = withDelay(300, withTiming(0));
        destinationsSlideAnim.value = withDelay(400, withTiming(0));
        attractionsSlideAnim.value = withDelay(500, withTiming(0));
    }, []);

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: headerSlideAnim.value }]
        };
    });

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: imageSlideAnim.value }]
        };
    });

    const descriptionAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: descriptionSlideAnim.value }]
        };
    });

    const destinationsAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: destinationsSlideAnim.value }]
        };
    });

    const attractionsAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: attractionsSlideAnim.value }]
        };
    });


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, alignItems: 'center'}}>
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
            <Animated.View
            style={[{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 10,
            }, headerAnimatedStyle]}
            >
            <Text
            style={[typography.presets.displaySmall, {color: colors.background, flexShrink: 1}]}>
                {destination?.name}
            </Text>
            <FavoriteButton
              initialState={isDestinationFavorited(country?.id ?? '', destination?.name ?? '')}
              onToggle={() => toggleFavoriteDestination(country?.id ?? '', destination?.name ?? ''  )}
            />
            </Animated.View>
            <Animated.Image
                        source={{uri: destination?.image}}
                        style={[{
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: 200,
                          backgroundColor: 'red',
                        }, imageAnimatedStyle]}
                      />
                      <Animated.Text
                      style={[typography.presets.bodyLarge, {color: colors.background, textAlign: 'center'}, descriptionAnimatedStyle]}>
                        {destination?.longDescription}
                      </Animated.Text>











                      <Animated.View
                    style={[{
                      gap: 24,
                    }, destinationsAnimatedStyle]}
                      >
                        <Text
            style={[typography.presets.displayXSmall, {color: colors.background, textAlign: 'center'}]}>
                Gallery
            </Text>
            <Animated.View
            style={[{
              gap: 12,
              flexDirection: 'column',
              alignItems: 'center',
            }, attractionsAnimatedStyle]}
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
                  gap: 10,
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
                {destination?.gallery.map((item: any, index: any) => (
                    
                                            <Animated.View
                        key={index}
                        style={[
                          {
                            width: 345,
                            height: 245,
                          },
                          useAnimatedStyle(() => {
                            const cardWidth = 355; // 345 (width) + 10 (gap)
                            const cardPosition = index * cardWidth;
                            const distance = Math.abs(scrollX.value - cardPosition);
                            
                            // Interpolate scale based on distance from center
                            const scale = interpolate(
                              distance,
                              [0, cardWidth / 2],
                              [1, 0.8],
                              Extrapolate.CLAMP
                            );
                            
                            return {
                              transform: [{ scale }]
                            };
                          })
                        ]}>
                          <Image
                            source={{uri: item}}
                            style={{
                              resizeMode: 'cover',
                              borderRadius: 10,
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </Animated.View>

                ))}
              </Animated.ScrollView>
              <View style={{
                flexDirection: 'row',
                gap: 8,
                
              }}>
                {destination?.gallery.map((_: any, index: any) => {
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

              
            </Animated.View>
            
                      </Animated.View>

                      <Animated.View
                      style={[{
                        gap: 16,
                      }, attractionsAnimatedStyle]}
                      >
                <TouchableOpacity
                onPress={() => router.push(`/(main)/countryMap`)}
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
                  <Text style={[typography.presets.button, {color: colors.text}]}>See all countries</Text>
                  <MaterialIcons name="arrow-forward" size={24} color={colors.text} />              
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => router.push(`/(main)/countryList`)}
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
                  <Text style={[typography.presets.button, {color: colors.text}]}>Book trip now</Text>
                  <MaterialIcons name="arrow-forward" size={24} color={colors.text} />              
                </TouchableOpacity>
              </Animated.View>
              
          </ScrollView>
        </SafeAreaView>

    )
}   