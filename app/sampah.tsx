import Sidebar from "@/components/Sidebar";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

export default function TrashScreen() {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const infoData = [
    {
      id: "1",
      icon: "clock",
      title: "AUTOMASI",
      description: "Pembersihan berkala otomatis dilakukan setiap bulan.",
    },
    {
      id: "2",
      icon: "shield",
      title: "PRIVASI",
      description: "Data Anda tetap terenkripsi bahkan saat berada di sampah.",
    },
    {
      id: "3",
      icon: "rotate-ccw",
      title: "PEMULIHAN",
      description: "Satu klik untuk mengembalikan catatan ke folder utama.",
    },
  ];

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
        <View style={styles.heroSection}>
          <View style={styles.circleIcon}>
            <Feather name="trash-2" size={40} color="#82B1FF" />
          </View>
          <Text style={styles.pageTitle}>Sampah{"\n"}Kosong</Text>
          <Text style={styles.pageSubtitle}>
            Catatan yang dihapus akan tetap{"\n"}
            berada di sini selama{" "}
            <Text style={styles.highlightText}>30 hari</Text> sebelum{"\n"}
            dihapus permanen.
          </Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.backButtonText}>Kembali ke Catatan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          {infoData.map((item) => (
            <View key={item.id} style={styles.infoCard}>
              <Feather
                name={item.icon as any}
                size={20}
                color="#82B1FF"
                style={styles.infoIcon}
              />
              <Text style={styles.infoTitle}>{item.title}</Text>
              <Text style={styles.infoDescription}>{item.description}</Text>
            </View>
          ))}
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
    backgroundColor: "#F8FAFC",
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
    color: "#1A202C",
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
  heroSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  circleIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.03,
    shadowRadius: 20,
    elevation: 3,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#2D3748",
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: -1,
    marginBottom: 16,
  },
  pageSubtitle: {
    fontSize: 15,
    color: "#4A5568",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  highlightText: {
    color: "#0056D2",
    fontWeight: "600",
  },
  backButton: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
  },
  backButtonText: {
    color: "#1A202C",
    fontSize: 15,
    fontWeight: "700",
  },
  infoSection: {
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: "#F4F7FA",
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
  },
  infoIcon: {
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#A0AEC0",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    color: "#CBD5E0",
    lineHeight: 22,
  },
});
