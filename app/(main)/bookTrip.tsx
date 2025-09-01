import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import MainHeaderwithBack from "../components/MainHeaderwithBack";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";
import { colors, typography } from "../styleUtils/styleValues";

export default function BookTrip() {
    const { countryId } = useLocalSearchParams<{ countryId: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const country = TOP_TOURIST_COUNTRIES.find((c) => c.id === countryId);
    const countryName = country?.name || "Unknown";
    
    // Popular booking sites that support country-specific searches
    const getBookingUrl = (countryName: string) => {
        const encodedCountry = encodeURIComponent(countryName);
        // Using Booking.com as it's more WebView-friendly and has excellent international coverage
        return `https://www.booking.com/searchresults.html?ss=${encodedCountry}&checkin_year=2024&checkin_month=12&checkin_monthday=15&checkout_year=2024&checkout_month=12&checkout_monthday=20&group_adults=2&group_children=0&no_rooms=1&from_sf=1`;
    };

    const handleNavigationStateChange = (navState: any) => {
        // Handle any navigation state changes if needed
        if (navState.url.includes('booking-confirmation') || navState.url.includes('confirmation')) {
            Alert.alert(
                "Booking Complete", 
                "Thank you for booking your trip! You should receive a confirmation email shortly.",
                [
                    {
                        text: "OK",
                        onPress: () => router.back()
                    }
                ]
            );
        }
    };

    const handleError = (syntheticEvent: any) => {
        const { nativeEvent } = syntheticEvent;
        setError(`Failed to load booking page: ${nativeEvent.description}`);
        setLoading(false);
    };

    const handleLoadEnd = () => {
        setLoading(false);
    };

    const handleLoadStart = () => {
        setLoading(true);
        setError(null);
    };

    useEffect(() => {
        if (error) {
            Alert.alert(
                "Error Loading Booking Page",
                "Unable to load the booking website. Please check your internet connection and try again.",
                [
                    {
                        text: "Go Back",
                        onPress: () => router.back()
                    },
                    {
                        text: "Retry",
                        onPress: () => {
                            setError(null);
                            setLoading(true);
                        }
                    }
                ]
            );
        }
    }, [error]);

    if (error) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.text }}>
                <MainHeaderwithBack title="Back to country info" />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}>
                    <Text style={[typography.presets.bodyLarge, { color: colors.background, textAlign: 'center' }]}>
                        Unable to load booking website. Please check your connection and try again.
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text }}>
            <MainHeaderwithBack title="Back to country info" />
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: getBookingUrl(countryName) }}
                    style={{ flex: 1 }}
                    onNavigationStateChange={handleNavigationStateChange}
                    onError={handleError}
                    onLoadEnd={handleLoadEnd}
                    onLoadStart={handleLoadStart}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsInlineMediaPlayback={true}
                    mediaPlaybackRequiresUserAction={false}
                    mixedContentMode="compatibility"
                    userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
                />
            </View>
        </SafeAreaView>
    );
}
