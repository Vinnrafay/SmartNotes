import Sidebar from "@/components/Sidebar";
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SettingsScreen() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
          <Feather name="menu" size={24} color="#1A202C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>The Digital Atelier</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.titleSection}>
          <Text style={styles.overline}>PERSONALIZE WORKSPACE</Text>
          <Text style={styles.pageTitle}>Settings</Text>
          <Text style={styles.pageSubtitle}>
            Refine your creative environment. Manage your identity, visual
            preferences, and localized experience within the digital atelier.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <Feather name="user" size={24} color="#0056D2" />
          </View>
          <Text style={styles.cardTitle}>Akun</Text>
          <Text style={styles.cardSubtitle}>
            Manage your profile and subscription status
          </Text>

          <TouchableOpacity style={styles.listItem}>
            <Feather name="user" size={20} color="#2D3748" />
            <Text style={styles.listText}>Informasi Profil</Text>
            <Feather name="chevron-right" size={20} color="#A0AEC0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Feather name="shield" size={20} color="#2D3748" />
            <Text style={styles.listText}>Keamanan</Text>
            <Feather name="chevron-right" size={20} color="#A0AEC0" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <Ionicons name="color-palette-outline" size={26} color="#0056D2" />
          </View>
          <Text style={styles.cardTitle}>Tampilan</Text>
          <Text style={styles.cardSubtitle}>
            Customize themes and typography
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Buka Galeri Tema</Text>
            <Feather name="arrow-right" size={16} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.previewContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop",
              }}
              style={styles.previewImage}
            />
            <View style={styles.previewOverlay}>
              <View style={styles.previewBarDark} />
              <View style={styles.previewBarLight} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.horizontalCardWhite}>
          <View style={styles.circleIconLight}>
            <Feather name="globe" size={20} color="#0056D2" />
          </View>
          <View style={styles.horizontalTextContainer}>
            <Text style={styles.horizontalTitle}>Bahasa</Text>
            <Text style={styles.horizontalSubtitle}>Indonesia (ID)</Text>
          </View>
          <Text style={styles.actionText}>Ubah</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.horizontalCardGray}>
          <View style={styles.circleIconDark}>
            <Feather name="info" size={20} color="#4A5568" />
          </View>
          <View style={styles.horizontalTextContainer}>
            <Text style={styles.horizontalTitle}>Tentang Aplikasi</Text>
            <Text style={styles.horizontalSubtitle}>
              v2.4.0 • Enterprise Edition
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#A0AEC0" />
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerLogo}>SmartNote</Text>
          <Text style={styles.footerTagline}>
            DESIGNED FOR DIGITAL CRAFTSMEN
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLinkItem}>Privacy</Text>
            <Text style={styles.footerLinkItem}>Terms</Text>
            <Text style={styles.footerLinkItem}>Support</Text>
          </View>
        </View>
      </ScrollView>

      <Sidebar
        visible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2D3748",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#CBD5E0",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  titleSection: {
    marginBottom: 30,
    marginTop: 10,
  },
  overline: {
    fontSize: 12,
    fontWeight: "800",
    color: "#0056D2",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: "800",
    color: "#2D3748",
    marginBottom: 12,
    letterSpacing: -1,
  },
  pageSubtitle: {
    fontSize: 16,
    color: "#718096",
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  iconWrapper: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A202C",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 24,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  listText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3748",
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    paddingVertical: 14,
    borderRadius: 20,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginRight: 8,
  },
  previewContainer: {
    width: "100%",
    height: 140,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  previewOverlay: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 12,
  },
  previewBarDark: {
    width: "25%",
    height: 6,
    backgroundColor: "#0056D2",
    borderRadius: 3,
    marginBottom: 8,
  },
  previewBarLight: {
    width: "15%",
    height: 6,
    backgroundColor: "#CBD5E0",
    borderRadius: 3,
  },
  horizontalCardWhite: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  horizontalCardGray: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },
  circleIconLight: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EBF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  circleIconDark: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#CBD5E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  horizontalTextContainer: {
    flex: 1,
  },
  horizontalTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A202C",
    marginBottom: 4,
  },
  horizontalSubtitle: {
    fontSize: 13,
    color: "#718096",
  },
  actionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0056D2",
  },
  footer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  footerLogo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#A0AEC0",
    marginBottom: 8,
  },
  footerTagline: {
    fontSize: 10,
    fontWeight: "700",
    color: "#718096",
    letterSpacing: 1,
    marginBottom: 16,
  },
  footerLinks: {
    flexDirection: "row",
    gap: 24,
  },
  footerLinkItem: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A5568",
  },
});
