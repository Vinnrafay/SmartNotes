import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native"; // <-- PENTING: Tambahin Platform

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4f82f7",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        // Matiin semua padding gaib bawaan sistem
        tabBarItemStyle: { padding: 0, margin: 0 },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "document-text" : "document-text-outline"}
                size={22}
                color={color}
              />
              <Text style={[styles.tabLabel, { color }]} numberOfLines={1}>
                NOTES
              </Text>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: focused ? color : "transparent" },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "compass" : "compass-outline"}
                size={24}
                color={color}
              />
              <Text style={[styles.tabLabel, { color }]} numberOfLines={1}>
                DISCOVER
              </Text>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: focused ? color : "transparent" },
                ]}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: "#ffffff",
    borderRadius: 40,
    height: 72,
    borderTopWidth: 0,
    paddingBottom: 0,
    paddingTop: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    // INI OBATNYA COY: Dorong paksa ke tengah biar nggak nyangkut di atap!
    top: Platform.OS === "android" ? 14 : 16,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "800",
    marginTop: 4,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    marginTop: 4,
  },
});
