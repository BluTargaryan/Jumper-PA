import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"
import { colors, typography } from "../styleUtils/styleValues"



export const HomeSearchCategoryItem = ({item, type}: {item: any, type: string}) => {
    return (
        <TouchableOpacity
        onPress={() => {
            if (type === 'country') {
                router.push(`/(main)/countryInfo?id=${item.id}`);
            } else {
                router.push(`/(main)/destinationInfo?name=${item.name}`);
            }
        }}
        style={[
            {
                width: '100%',
                height: 48,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 14,
                borderBottomWidth: 2,
                borderColor: colors.text,
            }
        ]}
        >
            <Text
            style={[
                typography.presets.bodyLarge,
                {
                    color: colors.text,
                }
            ]}
            >{item.name}</Text>
        </TouchableOpacity>
    )
}