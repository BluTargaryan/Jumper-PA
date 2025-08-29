import { Text, View } from "react-native"
import { colors, typography } from "../styleUtils/styleValues"


export const HomeSearchCategoryHeader = ({title}: {title: string}) => {
    return (
        <View
                    style={{
                        width: '100%',
                        height: 57,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 14,
                        backgroundColor: colors.text,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: colors.accent,
                    }}
                    >
                        <Text
                        style={[
                            typography.presets.headingSmall,
                            {
                                color: colors.accent,
                            }
                        ]}
                        >{title}</Text>
                    </View>
    )
}