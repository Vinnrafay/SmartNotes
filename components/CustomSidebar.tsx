import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CustomSidebar(props: any) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flexGrow: 1 }}>
        {/* PROFILE SECTION - Bagian Atas */}
        <View style={styles.header}>
          <Image
            source={require("../assets/images/Alex Rivera Avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>Alex Rivera</Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={16}
                color="#2563eb"
              />
            </View>
            <Text style={styles.userEmail}>alex.rivera@smartnote.ai</Text>
            <Text style={styles.premiumLabel}>PREMIUM MEMBER</Text>
          </View>
        </View>

        {/* MENU LIST - Ini otomatis ngambil dari _layout.tsx */}
        <View style={styles.menuList}>
          <DrawerItemList {...props} />
        </View>

        {/* LOGO SMARTNOTE - Di bagian paling bawah */}
        <View style={styles.footer}>
          <Text style={styles.brandText}>SmartNote</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16, // Melengkung kotak sesuai foto
    marginBottom: 16,
  },
  info: {
    gap: 2,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2933",
  },
  userEmail: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },
  premiumLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#2563eb",
    letterSpacing: 0.5,
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 12,
  },
  footer: {
    paddingVertical: 30,
    alignItems: "center",
  },
  brandText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#2563eb",
  },
});
