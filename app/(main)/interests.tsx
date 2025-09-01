import { SafeAreaView, ScrollView, Text } from "react-native";
import MainHeader from "../components/MainHeader";
import { colors } from "../styleUtils/styleValues";


const Interests = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.text,
            }}
        >
          <MainHeader title="Interests" />
          <ScrollView
            style={{
                flex: 1,
            }}
            contentContainerStyle={{
                gap: 54,
                paddingHorizontal: 20,
                paddingBottom: 100,
                flexDirection: 'column',
            }}
    
          >
            <Text>Interests</Text>
          </ScrollView>
        </SafeAreaView>
      );
}

export default Interests;