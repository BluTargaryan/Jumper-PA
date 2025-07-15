import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography } from "../styleUtils/styleValues";


export default function About() {

  const items = [
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"secondary"
    },
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"primary"
    },  
    {
      title: "Corem ipsum dolor ",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: require("../../assets/images/about-phl-image.png"),
      color:"accent"
    }
  ]
  return (
    <ImageBackground
      source={require("../../assets/images/landing-duo-image.png")}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    >
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
        }}>
          
            <ScrollView
            style={{
              flex: 1
            }}
            contentContainerStyle={{
              gap: 40,
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
            >
              <Image
            source={require("../../assets/images/jumper-icon.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
<ScrollView horizontal
style={{
  height: 590
}}
contentContainerStyle={{
  paddingHorizontal: 44,
  gap: 20,
}}
>
                {items.map((item, index) => (
                    <View key={index} style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 10,
                      width: 320,
                      paddingVertical: 40,
                      paddingHorizontal: 20,
                      gap: 32,
                      backgroundColor: item.color === "primary" ? colors.primary : item.color === "secondary" ? colors.secondary : colors.accent,
                    }}>
                      <Image
                        source={item.image}
                        style={{
                          flex: 1,
                          resizeMode: 'cover',
                          borderRadius: 10,
                          width: '100%',
                          height: '100%',
                        }}
                      />
                        <View style={{
                          flex: 1,
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 10,
                        }}>
                        <Text
                        style={[
                          typography.presets.displaySmall,
                          typography.positions.center,
                          {
                            color:item.color==="primary"?colors.background:colors.text,
                          }
                        ]}
                        >{item.title}</Text>
                        <Text
                        style={[
                          typography.presets.bodyLarge,
                          typography.positions.center,
                          {
                            color:item.color==="primary"?colors.background:colors.text,
                          }
                        ]}
                        >{item.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{
              flexDirection: 'row',
              gap: 8,
            }}>
              {items.map((item, index) => (
                <View 
                  key={index} 
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    backgroundColor: colors.background,
                  }}
                />
              ))}
            </View>

            <TouchableOpacity
              style={{
                width: 325,
                height: 52,
                backgroundColor: colors.background,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 8,
              }}
            >
              <Text style={[typography.presets.button, {color: colors.text}]}>Continue</Text>
             <MaterialIcons name="arrow-forward" size={24} color={colors.text} />              
              
            </TouchableOpacity>
            </ScrollView>

           
        </SafeAreaView>
      
    </ImageBackground>
  );
}