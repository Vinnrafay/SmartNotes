import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  const [settings, setSettings] = useState({
    notes: true,
    reminder: false,
    update: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="#2563eb" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>The Digital Atelier</Text>
          <Image
            source={require("../assets/images/Profile2.jpg")}
            style={styles.miniAvatar}
          />
        </View>

        <View style={styles.pad}>
          <Text style={styles.labelTop}>PREFERENCE CENTER</Text>
          <Text style={styles.heroText}>Stay aligned with your</Text>
          <Text style={[styles.heroText, { color: "#2563eb" }]}>
            creative flow.
          </Text>

          <Text style={styles.description}>
            Configure how SmartNote communicates with you. We believe in quiet
            productivity...
          </Text>

          {/* NOTIFICATION CARD */}
          <View style={styles.mainCard}>
            <NotifOption
              icon="file-text"
              title="Notifikasi Catatan"
              desc="Dapatkan pembaruan saat catatan dibagikan atau diedit oleh kolaborator Anda."
              active={settings.notes}
              onPress={() => toggle("notes")}
            />
            <NotifOption
              icon="calendar"
              title="Pengingat Harian"
              desc="Rangkuman pagi untuk membantu Anda fokus pada prioritas hari ini."
              active={settings.reminder}
              onPress={() => toggle("reminder")}
            />
            <NotifOption
              icon="download-cloud"
              title="Pembaruan Aplikasi"
              desc="Jadilah yang pertama mengetahui fitur baru dan peningkatan performa."
              active={settings.update}
              onPress={() => toggle("update")}
              last
            />
          </View>

          <View style={styles.syncRow}>
            <Feather name="shield" size={12} color="#94a3b8" />
            <Text style={styles.syncText}>
              All settings are synced across your devices instantly.
            </Text>
          </View>

          <TouchableOpacity style={styles.btnWrapper}>
            <LinearGradient
              colors={["#0052D4", "#60efff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save Changes</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const NotifOption = ({ icon, title, desc, active, onPress, last }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.optionRow, !last && styles.borderBottom]}>
    <View style={styles.iconBox}>
      <Feather name={icon} size={20} color="#2563eb" />
    </View>
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Text style={styles.optionDesc}>{desc}</Text>
    </View>
    <Ionicons
      name={active ? "checkbox" : "square-outline"}
      size={26}
      color={active ? "#2563eb" : "#e2e8f0"}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#1e293b" },
  miniAvatar: { width: 36, height: 36, borderRadius: 18 },
  pad: { paddingHorizontal: 28 },
  labelTop: {
    fontSize: 10,
    fontWeight: "800",
    color: "#2563eb",
    letterSpacing: 1,
  },
  heroText: {
    fontSize: 48,
    fontWeight: "800",
    color: "#334155",
    lineHeight: 52,
  },
  description: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 24,
    marginTop: 24,
    marginBottom: 40,
  },
  mainCard: {
    backgroundColor: "#fff",
    borderRadius: 32,
    padding: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
  },
  optionRow: { flexDirection: "row", alignItems: "center", padding: 20 },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
  },
  optionTitle: { fontSize: 17, fontWeight: "700", color: "#1e293b" },
  optionDesc: { fontSize: 12, color: "#94a3b8", marginTop: 4, lineHeight: 18 },
  syncRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 6,
  },
  syncText: {
    fontSize: 11,
    color: "#94a3b8",
    fontStyle: "italic",
    textAlign: "center",
  },
  btnWrapper: { marginTop: 20, alignItems: "center" },
  saveBtn: { paddingVertical: 16, paddingHorizontal: 40, borderRadius: 30 },
  saveBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
