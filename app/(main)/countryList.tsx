import MainHeaderwithBack from "@/app/components/MainHeaderwithBack";
import { colors, typography } from "@/app/styleUtils/styleValues";
import { MaterialIcons } from "@expo/vector-icons";
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { router } from "expo-router";
import { Animated, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TOP_TOURIST_COUNTRIES } from "../dataUtils/countriesData";

export default function CountryList() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.text, marginTop: 40, alignItems: 'center', justifyContent: 'space-between'}}>
          <MainHeaderwithBack />
          <View
          style={{
            position: 'relative',
            flex: 1,
            width: '100%',
            paddingHorizontal: 24, 
            paddingTop: 24,
            alignItems: 'center',
            gap: 24,
          }}
          >
            <Text
            style={[typography.presets.displaySmall, {color: colors.background, textAlign: 'center'}]}>
                Which country would you like to visit?
            </Text>

            <TextInput 
           placeholder="Search for a country"
           placeholderTextColor={colors.background}
           style={{ 
            color: colors.background,
            fontSize: 16,
            borderWidth: 2,
            borderColor: colors.background,
            width: '100%',
            padding:16,
            borderRadius: 8,
           }}

    />
            
            <ScrollView
        contentContainerStyle={{
          gap: 12,
          alignItems: 'center',
          paddingVertical: 10,
        }}
        style={{
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          marginBottom: 100,
        }}
        >
        {
          TOP_TOURIST_COUNTRIES.map((country, index) => (
            <TouchableOpacity key={index} onPress={() => router.push("/(main)/countryInfo")}>
              <Animated.View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: colors.background,
                borderRadius: 8,
                width: '100%',
                height: 52,
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}>
                <Text style={[typography.presets.headingSmall, {color: colors.text}]}>{country.name}</Text>
                <Text style={{ fontSize: 24 }}>{getUnicodeFlagIcon(country.id)}</Text>
              </Animated.View>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
        <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            bottom: 24,
                            alignSelf: 'center',
                            width: 325,
                            height: 52,
                            backgroundColor: colors.background,
                            borderRadius: 8,
                        }
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => router.replace("/(main)/countryMap")}
                        style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            gap: 8,
                        }}
                    >
                        <Text style={[typography.presets.button, { color: colors.text }]}>Map</Text>
                        <MaterialIcons name="map" size={24} color={colors.text} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}