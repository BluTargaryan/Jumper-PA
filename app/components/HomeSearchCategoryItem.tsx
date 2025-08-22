import { Text, View } from "react-native"
import { colors, typography } from "../styleUtils/styleValues"



export const HomeSearchCategoryItem = () => {
    return (
        <View
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
            >HomeSearchCategoryItem</Text>
        </View>
    )
}