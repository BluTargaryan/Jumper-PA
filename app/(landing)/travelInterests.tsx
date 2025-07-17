import { MaterialIcons, } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { colors, typography } from "../styleUtils/styleValues";


export default function TravelInterests() {

    const jumperY = useSharedValue(-100); // Start above screen
    const buttonY = useSharedValue(100); // Start below screen
    const contentY = useSharedValue(800); // Start below screen
    const itemScales = Array.from({length: 8}).map(() => useSharedValue(0));

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

    const getItemStyle = (index: number) => useAnimatedStyle(() => ({
        transform: [{ scale: itemScales[index].value }]
    }));

    const [checkedItems, setCheckedItems] = useState(Array(8).fill(false));

    const toggleCheckbox = (index: number) => {
      setCheckedItems(prev => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    };
  return (
    <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
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
          Array.from({length: 8}).map((_, index) => (
            <Animated.View key={index} style={[{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.background,
              borderRadius: 8,
              width: 325,
              height: 52,
              paddingHorizontal: 16,
              paddingVertical: 12,
            }, getItemStyle(index)]}>
              <Checkbox
                  status={checkedItems[index] ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(index)}
                  color={colors.text}
                />  
                <Text style={[typography.presets.headingSmall, {color: colors.text}]}>Adventure</Text>
                <MaterialIcons name="terrain" size={24} color={colors.text} />
            </Animated.View>
          ))
        }
        </ScrollView>
         </Animated.View>
        <Animated.View style={buttonStyle}>
          <TouchableOpacity
                onPress={() => router.push("/")}
                  style={{
                    width: 325,
                    height: 52,
                    backgroundColor: colors.secondary,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}
                >
                  <Text 
                  style={[typography.presets.button, {color: colors.text}]}>Continue</Text>
                  <MaterialIcons name="flight" size={24} color={colors.text}
                  style={{
                    transform: [{ rotate: '90deg' }]
                  }}/>              
                </TouchableOpacity>
        </Animated.View>
                
    </SafeAreaView>
  );
}