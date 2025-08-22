import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";

const HomeFavoritesHeader = () => {
    return (
        <TouchableOpacity
        style={{
            paddingHorizontal: 15,
            paddingVertical: 13,
            borderRadius: 8,
            backgroundColor: colors.text,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 27,
        }}
        >
            <Text style={[typography.presets.displaySmall, {
                color: colors.background,
            }]}>Your favorites</Text>
            <MaterialIcons name="arrow-right-alt" size={30} color={colors.background} 
            />
        </TouchableOpacity>
    )
}

export default HomeFavoritesHeader;