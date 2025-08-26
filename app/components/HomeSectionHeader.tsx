import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";

interface HomeSectionHeaderProps {
    title: string;
    onPress: () => void;
}

const HomeSectionHeader = ({ title, onPress }: HomeSectionHeaderProps) => {
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
        onPress={onPress}
        >
            <Text style={[typography.presets.displaySmall, {
                color: colors.background,
            }]}>{title}</Text>
            <MaterialIcons name="arrow-right-alt" size={30} color={colors.background} 
            />
        </TouchableOpacity>
    )
}

    export default HomeSectionHeader;