import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="nothave" options={{ headerShown: false }} />
        <Stack.Screen name="have" options={{ headerShown: false }} />
        <Stack.Screen name="level1" options={{ headerShown: false }} />
        <Stack.Screen name="level1part2" options={{ headerShown: false }} />
        <Stack.Screen name="level1part3" options={{ headerShown: false }} />
        <Stack.Screen name="level1read" options={{ headerShown: false }} />
        <Stack.Screen name="expand" options={{ headerShown: false }} />
        <Stack.Screen name="levelread2" options={{ headerShown: false }} />
        <Stack.Screen name="expand2" options={{ headerShown: false }} />
        <Stack.Screen name="levelread3" options={{ headerShown: false }} />
        <Stack.Screen name="expand3" options={{ headerShown: false }} />
        <Stack.Screen name="writing1" options={{ headerShown: false }} />
        <Stack.Screen name="writing2" options={{ headerShown: false }} />
        <Stack.Screen name="writing3" options={{ headerShown: false }} />
        <Stack.Screen name="stats" options={{ headerShown: false }} />
        <Stack.Screen name="tip" options={{ headerShown: false }} />
        <Stack.Screen name="tip2" options={{ headerShown: false }} />
        <Stack.Screen name="tip3" options={{ headerShown: false }} />
        <Stack.Screen name="leaderboard" options={{ headerShown: false }} />
        <Stack.Screen name="badge" options={{ headerShown: false }} />
        <Stack.Screen name="friends" options={{ headerShown: false }} />
        <Stack.Screen name="nothave2" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
