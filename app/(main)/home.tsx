import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeFavorites from "../components/HomeFavorites";
import HomeInterests from "../components/HomeInterests";
import { HomeSearch } from "../components/HomeSearch";
import MainHeader from "../components/MainHeader";
import ToCountriesHomeLink from "../components/toCountriesHomeLink";
import { colors } from "../styleUtils/styleValues";


export default function Home() {
    const [searchText, setSearchText] = useState("");   
  return (
    <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: colors.text,
        }}
    >
      <MainHeader title="Home" />
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
      <HomeSearch searchText={searchText} setSearchText={setSearchText}/>

      <HomeFavorites />
      <HomeInterests />
      <ToCountriesHomeLink />
      </ScrollView>
    </SafeAreaView>
  );
}