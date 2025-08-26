    import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors, typography } from "../styleUtils/styleValues";


const ToCountriesHomeLink = () => {
    return (
        <TouchableOpacity
        style={{
            width: '100%',
            height: 371,
            backgroundColor: colors.accent,
            borderRadius: 8,
            overflow: 'hidden',
            justifyContent: 'center',
            gap: 22,
            padding: 22,
        }}
        onPress={() => {
            router.replace('/(main)/countryMap');
        }}
        >

            <View style={{
                width: '100%',
                borderRadius: 8,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={[
                    typography.presets.displaySmall,
                    {
                        color: colors.text,
                    }
                ]}>
                    Go to Countries
                </Text>
               
                <MaterialIcons name="arrow-circle-right" size={30} color={colors.text} />    
            </View>

            
        <Image
        source={{uri: 'https://images.unsplash.com/photo-1756187793625-4a29fef1f4f8?q=80&w=1170&auto=format&fit=crop'}}
        style={{
            width: '100%',
            height: 266,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: colors.text,
        }}
        />
        
       
        
        
        </TouchableOpacity>
    )
}

export default ToCountriesHomeLink;