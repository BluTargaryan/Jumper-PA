import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";
import HomeInterestsListItem from "./HomeInterestsListItem";
import HomeSectionHeader from "./HomeSectionHeader";

const HomeInterests = () => {
    return (
        <View
        style={{
            width: '100%',
            height: 347,
            paddingHorizontal: 16,
            backgroundColor: colors.background,
            borderRadius: 8,
            justifyContent: 'center',
            gap: 13,
        }}
        >
            <HomeSectionHeader title="Your interests" onPress={() => {}} />

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                width: '100%',
                height: 173,
                flexGrow: 0,
                borderColor: colors.text
            }}
            contentContainerStyle={{
                gap: 16,
            }}
            >
               {
                Array.from({length: 10}).map((_, index) => (
                    <HomeInterestsListItem key={index} />
                ))
               }
            </ScrollView>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: 33,
                borderRadius: 8,
                gap: 10,
            }}>
             <View style={{
                flex: 3,
                height: 33,
                borderRadius: 8,
                backgroundColor: colors.primary,
                paddingLeft: 16,
                justifyContent: 'center',
             }}>

                <Text style={[
                    typography.presets.bodyLarge,
                    {
                        color: colors.background,
                    }
                ]}>
                   Country
                </Text>
             </View>


             <View style={{
                flexDirection: 'row',
                flex: 1,
                height: 33,
                borderRadius: 8,
                backgroundColor: colors.accent,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
             }}>

                <Text style={[
                    typography.presets.bodyLarge,
                    {
                        color: colors.text,
                    }
                ]}>
                   Go
                </Text>
                <MaterialIcons name="arrow-right-alt" size={30} color={colors.text} />
             </View>
            </View>
        </View>
    )
}

export default HomeInterests;