import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Security() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.heroTitle}>Pusat Keamanan</Text>
          <Text style={styles.description}>
            Lindungi catatan dan ide kreatif Anda dengan protokol keamanan
            tingkat lanjut.
          </Text>

          {/* UBAH KATA SANDI */}
          <View style={styles.card}>
            <View style={styles.iconBox}>
              <Feather name="key" size={20} color="#2563eb" />
            </View>
            <Text style={styles.cardTitle}>Ubah Kata Sandi</Text>
            <Text style={styles.cardDesc}>
              Terakhir diperbarui 3 bulan yang lalu. Gunakan kombinasi simbol
              dan angka.
            </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Perbarui Sekarang {">"}</Text>
            </TouchableOpacity>
          </View>

          {/* 2FA */}
          <View style={styles.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={styles.iconBox}>
                <Feather name="shield" size={20} color="#2563eb" />
              </View>
              <MaterialCommunityIcons
                name="toggle-switch"
                size={48}
                color="#2563eb"
              />
            </View>
            <Text style={styles.cardTitle}>Otentikasi Dua Faktor (2FA)</Text>
            <Text style={styles.cardDesc}>
              Tambahkan lapisan keamanan ekstra pada akun Anda.
            </Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                ● AKTIF: GOOGLE AUTHENTICATOR
              </Text>
            </View>
          </View>

          {/* PERANGKAT TERHUBUNG */}
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}>
              <Text style={styles.cardTitle}>Perangkat Terhubung</Text>
              <TouchableOpacity>
                <Text style={styles.logoutAll}>Keluar dari Semua Sesi</Text>
              </TouchableOpacity>
            </View>
            <DeviceItem
              icon="monitor"
              name="MacBook Pro 14\"
              desc="Jakarta, Indonesia • Safari"
              current
            />
            <DeviceItem
              icon="smartphone"
              name="iPhone 15 Pro"
              desc="Bandung, Indonesia • App v2.4.1"
            />
            <DeviceItem
              icon="tablet"
              name="iPad Pro 12.9\"
              desc="Jakarta, Indonesia • App v2.4.1"
              last
            />
          </View>

          {/* LOGS */}
          <SmallRow icon="clock" label="Log Aktivitas" link="LIHAT LOG" />
          <SmallRow icon="lock" label="Enkripsi Data" link="KONFIGURASI" />
          <SmallRow
            icon="mail"
            label="Notifikasi Login"
            link="ATUR NOTIFIKASI"
          />

          <View style={styles.footerHelp}>
            <Text style={styles.helpText}>Butuh Bantuan?</Text>
            <Text style={styles.helpSub}>
              Hubungi tim dukungan kami jika Anda menemukan aktivitas yang tidak
              sah.
            </Text>
            <View style={styles.btnRow}>
              <TouchableOpacity style={styles.btnGray}>
                <Text>Pusat Bantuan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue}>
                <Text style={{ color: "#fff" }}>Kontak Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const DeviceItem = ({ icon, name, desc, current, last }: any) => (
  <View style={[styles.deviceRow, !last && styles.borderBottom]}>
    <View style={styles.deviceIcon}>
      <Feather name={icon} size={20} color="#334155" />
    </View>
    <View style={{ flex: 1, marginLeft: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.deviceName}>{name}</Text>
        {current && (
          <View style={styles.currentBadge}>
            <Text style={styles.currentText}>SESI INI</Text>
          </View>
        )}
      </View>
      <Text style={styles.deviceDesc}>{desc}</Text>
    </View>
    <Feather name="log-out" size={18} color="#94a3b8" />
  </View>
);

const SmallRow = ({ icon, label, link }: any) => (
  <View style={styles.smallCard}>
    <Feather name={icon} size={18} color="#64748b" />
    <Text style={styles.smallLabel}>{label}</Text>
    <TouchableOpacity>
      <Text style={styles.smallLink}>{link}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  headerTitle: { fontSize: 16, fontWeight: "700" },
  miniAvatar: { width: 32, height: 32, borderRadius: 16 },
  pad: { paddingHorizontal: 24 },
  heroTitle: { fontSize: 32, fontWeight: "800", color: "#1e293b" },
  description: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    elevation: 1,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: "800", color: "#1e293b" },
  cardDesc: { fontSize: 13, color: "#94a3b8", marginTop: 4, lineHeight: 18 },
  linkText: {
    color: "#2563eb",
    fontWeight: "700",
    marginTop: 16,
    fontSize: 13,
  },
  statusBadge: {
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  statusText: { fontSize: 10, fontWeight: "800", color: "#64748b" },
  logoutAll: {
    color: "#dc2626",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
  },
  deviceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  deviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceName: { fontSize: 14, fontWeight: "700", color: "#334155" },
  deviceDesc: { fontSize: 11, color: "#94a3b8", marginTop: 2 },
  currentBadge: {
    backgroundColor: "#dbeafe",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  currentText: { fontSize: 8, fontWeight: "800", color: "#2563eb" },
  smallCard: {
    backgroundColor: "#f1f5f9",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  smallLabel: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
  },
  smallLink: { fontSize: 10, fontWeight: "800", color: "#2563eb" },
  footerHelp: { alignItems: "center", marginTop: 40, paddingBottom: 60 },
  helpText: { fontSize: 14, fontWeight: "700", color: "#475569" },
  helpSub: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  btnRow: { flexDirection: "row", gap: 12 },
  btnGray: {
    backgroundColor: "#e2e8f0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  btnBlue: {
    backgroundColor: "#0052D4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
