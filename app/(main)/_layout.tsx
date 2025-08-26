import { Stack } from "expo-router";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="countryMap" options={{ headerShown: false }}/>
      <Stack.Screen name="countryList" options={{ headerShown: false }}/>
      <Stack.Screen name="countryInfo" options={{ headerShown: false }}/>
      <Stack.Screen name="destinationMap" options={{ headerShown: false }}/>
      <Stack.Screen name="destinationList" options={{ headerShown: false }}/>
      <Stack.Screen name="destinationInfo" options={{ headerShown: false }}/>
      <Stack.Screen name="home" options={{ headerShown: false }}/>
      <Stack.Screen name="favoritesCountriesMap" options={{ headerShown: false }}/>
      <Stack.Screen name="favoritesCountriesList" options={{ headerShown: false }}/>
      <Stack.Screen name="favoritesDestinationMap" options={{ headerShown: false }}/>
      <Stack.Screen name="favoritesDestinationList" options={{ headerShown: false }}/>
    </Stack>
  );
}
    