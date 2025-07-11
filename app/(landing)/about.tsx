import { ImageBackground, Text, View } from "react-native";



export default function About() {
  return (
    <ImageBackground
      source={require("../../assets/images/landing-duo-image.png")}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    >
        <View style={{
            flex: 1,
            marginVertical: 20,
        }}>
            <Text>About</Text>
        </View>
      
    </ImageBackground>
  );
}