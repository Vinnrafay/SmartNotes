import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Delay a moment so the splash artwork is visible before jumping to auth.
    const timer = setTimeout(() => setShouldRedirect(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
    // Using Redirect is the most reliable way to change screens in Expo Router.
    return <Redirect href="/signup" />;
  }

  return (
    <ImageBackground
      source={require("../assets/images/Login SmartNote (Tanpa Navigasi).png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
      }}
      resizeMode="cover"
    />
  );
}
