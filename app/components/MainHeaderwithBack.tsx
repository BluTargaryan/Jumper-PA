import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";

export default function MainHeaderwithBack() {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: '100%',
            paddingHorizontal: 15,
            paddingVertical: 24,
            gap:24,
            backgroundColor: colors.text,
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={24} color={colors.background} />
            </TouchableOpacity>
            <Text style={[typography.presets.bodyLarge, {color: colors.background}]}>Go back</Text>
           
        </View>
    )
}   