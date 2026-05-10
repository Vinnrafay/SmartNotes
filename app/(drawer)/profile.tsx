import { Feather } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={24} color="#1f2933" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profil Saya</Text>
          <View style={styles.headerRight}>
            <Text style={styles.brandName}>SmartNote</Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Feather
                name="user"
                size={24}
                color="#1f2933"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* PROFILE CARD SECTION */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../../assets/images/Profile2.jpg")}
              style={styles.avatar}
            />
            <TouchableOpacity
              onPress={() => router.push("/editprofile")}
              style={styles.editAvatarBtn}>
              <Feather name="edit-2" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Alex Rivera</Text>
          <Text style={styles.userEmail}>alex.rivera@smartnote.ai</Text>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>PREMIUM MEMBER</Text>
          </View>
        </View>

        {/* GROUP 1: AKUN & PREFERENSI */}
        <View style={styles.menuGroup}>
          <Text style={styles.groupLabel}>AKUN & PREFERENSI</Text>
          <View style={styles.groupCard}>
            <MenuItem
              icon="user"
              label="Edit Profil"
              color="#eff6ff"
              iconColor="#2563eb"
              onPress={() => console.log("Edit Profil ditekan")}
            />
            <MenuItem
              icon="shield"
              label="Keamanan"
              color="#f0fdf4"
              iconColor="#16a34a"
              onPress={() => router.push("/keamanan")} 
            />
            <MenuItem
              icon="bell"
              label="Notifikasi"
              color="#fff7ed"
              iconColor="#ea580c"
              onPress={() => router.push("/notifikasi")} 
              last
            />
          </View>
        </View>

        {/* GROUP 2: TEMA */}
        <View style={styles.menuGroup}>
          <View style={styles.themeCard}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#eff6ff" }]}>
                <Feather name="moon" size={20} color="#2563eb" />
              </View>
              <View style={{ marginLeft: 16 }}>
                <Text style={styles.menuLabel}>Tema (Gelap/Terang)</Text>
                <Text style={styles.menuSubLabel}>
                  Mode {isDarkMode ? "Gelap" : "Terang"} Aktif
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "#e2e8f0", true: "#2563eb" }}
              thumbColor={"#fff"}
              onValueChange={() => setIsDarkMode(!isDarkMode)}
              value={isDarkMode}
            />
          </View>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/login")}>
          <Feather name="log-out" size={20} color="#dc2626" />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>

        {/* FOOTER VERSION */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>SmartNote</Text>
          <Text style={styles.footerVersion}>VERSION 2.4.0 (2024)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Komponen Reusable untuk List Menu - SEKARANG ADA PROPS ONPRESS
const MenuItem = ({ icon, label, color, iconColor, last, onPress }: any) => (
  <TouchableOpacity 
    style={[styles.menuItem, !last && styles.borderBottom]}
    onPress={onPress} // Pasang fungsinya di sini biar bisa diklik
    activeOpacity={0.7}
  >
    <View style={styles.menuItemLeft}>
      <View style={[styles.iconBox, { backgroundColor: color }]}>
        <Feather name={icon} size={20} color={iconColor} />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#cbd5e1" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#2563eb" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  brandName: { fontSize: 20, fontWeight: "800", color: "#1f2933" },
  profileSection: { alignItems: "center", marginTop: 20, marginBottom: 30 },
  avatarWrapper: { position: "relative", marginBottom: 16 },
  avatar: { width: 130, height: 130, borderRadius: 65, borderWidth: 6, borderColor: "#fff" },
  editAvatarBtn: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#f8fafc",
  },
  userName: { fontSize: 28, fontWeight: "800", color: "#1f2933" },
  userEmail: { fontSize: 15, color: "#64748b", marginTop: 4 },
  premiumBadge: { backgroundColor: "#dbeafe", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 14, marginTop: 15 },
  premiumText: { color: "#2563eb", fontSize: 11, fontWeight: "800", letterSpacing: 1 },
  menuGroup: { paddingHorizontal: 24, marginBottom: 20 },
  groupLabel: { fontSize: 11, fontWeight: "700", color: "#94a3b8", letterSpacing: 1.5, marginBottom: 12, marginLeft: 10 },
  groupCard: { backgroundColor: "#fff", borderRadius: 28, paddingHorizontal: 20, elevation: 2, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 10 },
  themeCard: { backgroundColor: "#fff", borderRadius: 28, padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 2, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 10 },
  menuItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 18 },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  menuItemLeft: { flexDirection: "row", alignItems: "center" },
  iconBox: { width: 46, height: 46, borderRadius: 15, justifyContent: "center", alignItems: "center" },
  menuLabel: { fontSize: 16, fontWeight: "600", color: "#1f2933", marginLeft: 16 },
  menuSubLabel: { fontSize: 12, color: "#94a3b8", marginTop: 2 },
  logoutButton: { marginHorizontal: 24, backgroundColor: "#fee2e2", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 18, borderRadius: 24, marginTop: 10, gap: 12 },
  logoutText: { color: "#dc2626", fontWeight: "700", fontSize: 16 },
  footer: { alignItems: "center", marginTop: 40, paddingBottom: 60 },
  footerBrand: { fontSize: 22, fontWeight: "800", color: "#cbd5e1" },
  footerVersion: { fontSize: 11, color: "#cbd5e1", marginTop: 6, letterSpacing: 1.5 },
});