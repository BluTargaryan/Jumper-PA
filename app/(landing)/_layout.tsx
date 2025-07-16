import { Stack } from "expo-router";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="about" options={{ headerShown: false }}/>
      <Stack.Screen name="locationPermission" options={{ headerShown: false }}/>
      <Stack.Screen name="travelInterests" options={{ headerShown: false }}/>
    </Stack>
  );
}
    