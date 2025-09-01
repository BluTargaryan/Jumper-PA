import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueButton from "../components/ContinueButton";
import { useTravelInterests } from "../context/TravelInterestsProvider";
import { ATTRACTION_TYPES } from "../dataUtils/attractions";
import { colors, typography } from "../styleUtils/styleValues";

export default function TravelInterests() {
    const { interests, updateInterests, loading: interestsLoading } = useTravelInterests();

    const jumperY = useSharedValue(-100); // Start above screen
    const buttonY = useSharedValue(100); // Start below screen
    const contentY = useSharedValue(800); // Start below screen
    const itemScales = Array.from({length: ATTRACTION_TYPES.length}).map(() => useSharedValue(0));

    useEffect(() => {
        // Animate the jumper dropping in
        jumperY.value = withDelay(400, withTiming(0, { duration: 300 }));
        // Animate content sliding up
        contentY.value = withDelay(200, withTiming(0, { duration: 300 }));
        // Animate button sliding up
        buttonY.value = withDelay(600, withTiming(0, { duration: 300 }));
        // Animate items scaling
        itemScales.forEach((scale, index) => {
          scale.value = withDelay(800 + (index * 100), withTiming(1, { duration: 200 }));
        });
    }, []);

    const jumperStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: jumperY.value }]
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonY.value }]
    }));

    const contentStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: contentY.value }]
    }));

    const getItemStyle = (id: string) => useAnimatedStyle(() => ({
        transform: [{ scale: itemScales[ATTRACTION_TYPES.findIndex(attraction => attraction.id === id)].value }]
    }));

    const [checkedItems, setCheckedItems] = useState(() => {
      // Initialize with stored interests if available, otherwise all false
      const initialState = Object.fromEntries(ATTRACTION_TYPES.map(attraction => [
        attraction.id,
        interests.selectedInterests.includes(attraction.id)
      ]));
      return initialState;
    });

    const toggleCheckbox = (id: string) => {
      setCheckedItems(prev => {
        const newState = { ...prev };
        newState[id] = !newState[id];
        return newState;
      });
    };
  return (
    <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        backgroundColor: colors.text,
    }}>
        <Animated.Image
                source={require("../../assets/images/jumper-icon.png")}
                style={[{
                  width: 40,
                  height: 40,
                }, jumperStyle]}
              />

        <Animated.View
                  style={[{
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 36,
                    width: '100%',
                    height: '80%'
                  }, contentStyle]}
                  >
                    <Text style={[typography.presets.displaySmall, {color: colors.background, textAlign: 'center'}]}>What are you interested in?</Text>
        <ScrollView
        contentContainerStyle={{
          gap: 12,
          alignItems: 'center',
          paddingVertical: 10
        }}
        style={{
          flexDirection: 'column',
          width: '100%'
        }}
        >
        {
          ATTRACTION_TYPES.map((attraction, index) => (
            <Animated.View key={attraction.id} style={[{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.background,
              borderRadius: 8,
              width: 325,
              height: 52,
              paddingHorizontal: 16,
              paddingVertical: 12,
            }, getItemStyle(attraction.id)]}>
              <Checkbox
                  status={checkedItems[attraction.id] ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(attraction.id)}
                  color={colors.text}
                />  
                <Text style={[typography.presets.headingSmall, {color: colors.text}]}>{attraction.name}</Text>
                <MaterialIcons name={attraction.icon} size={24} color={colors.text} />
            </Animated.View>
          ))
        }
        </ScrollView>
         </Animated.View>
                  <ContinueButton 
            style={[buttonStyle,
              {
                width: 320,
              }
            ]}
            onPress={async () => {
              try {
                // Get all selected interest IDs
                const selectedIds = Object.entries(checkedItems)
                  .filter(([_, isChecked]) => isChecked)
                  .map(([id]) => id);
                
                // Save to storage
                await updateInterests(selectedIds);
                
                // Navigate to next screen
                router.replace("/(main)/home" as any);
              } catch (err) {
                // You might want to show an error message here
                console.error('Failed to save interests:', err);
              }
            }}
            buttonText="Continue"
            backgroundColor={colors.secondary}
            icon="flight"
            iconStyle={{ transform: [{ rotate: '90deg' }] }}
            disabled={interestsLoading}
          />
                
    </SafeAreaView>
  );
}