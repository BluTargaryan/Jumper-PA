import { ImageBackground, Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";

const HomeInterestsListItem = () => {
    return (
        <View
        style={{
            position: 'relative',
            width: 291,
            height: '100%',
            backgroundColor: colors.primary,
            borderRadius: 8,
            overflow: 'hidden',
        }}
        >
        <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1756187793625-4a29fef1f4f8?q=80&w=1170&auto=format&fit=crop'}}
        style={{
            width: '100%',
            height: '100%',
        }}
        />
        <View style={{
            position: 'absolute',
            left: 10,
            bottom: 10,
            height: 33,
            width: 246,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.text,
            borderRadius: 8,
            justifyContent: 'center',
            paddingLeft: 12,
        }}>

            <Text style={[
                typography.presets.bodyLarge,
                {
                    color: colors.text,
                }
            ]}>
                Country
            </Text>
        </View>
        </View>
    )
}

export default HomeInterestsListItem;