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
    </Stack>
  );
}
    