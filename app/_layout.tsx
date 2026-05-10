import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";
// Import Gesture Handler di paling atas agar Drawer tidak error di Android
import "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  // Ganti anchor-nya ke (drawer) karena (tabs) sudah di dalam (drawer)
  anchor: "(drawer)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Halaman Splash Screen */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* Halaman Auth */}
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* GANTI (tabs) JADI (drawer) 
           Ini adalah 'pembungkus' utama setelah user berhasil login
        */}
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />

        {/* Halaman Tambah Note */}
        <Stack.Screen name="add-note" options={{ headerShown: false }} />

        {/* Halaman Edit Profile */}
        <Stack.Screen name="editprofile" options={{ headerShown: false }} />
        {/* Modal untuk fitur yang akan datang */}

        <Stack.Screen name="keamanan" options={{ headerShown: false }} />
        <Stack.Screen name="notifikasi" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
