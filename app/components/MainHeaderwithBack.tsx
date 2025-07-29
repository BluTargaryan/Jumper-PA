import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
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

            <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
            }}>
                <Image source={require("../../assets/images/jumper-icon.png")} style={{ width: 30, height: 30 }} />
            <Text style={[typography.presets.displayXSmall, {color: colors.background}]}>Jumper</Text>
            </View>
        </View>
    )
}   