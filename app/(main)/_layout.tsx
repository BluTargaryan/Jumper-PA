import { Stack } from "expo-router";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="countryMap" options={{ headerShown: false }}/>
    </Stack>
  );
}
    