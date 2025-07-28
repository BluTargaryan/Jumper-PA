import { Image, Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";

export default function MainHeader() {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 24,
            gap:24,
            backgroundColor: colors.text,
        }}>

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