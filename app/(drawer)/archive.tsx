import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Archive() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={24} color="#1f2933" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>The Digital Atelier</Text>
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <Image source={require("../../assets/images/Profile2.jpg")} style={styles.miniAvatar} />
          </TouchableOpacity>
        </View>

        <View style={styles.padContent}>
          <Text style={styles.labelTop}>WORKSPACE</Text>
          <Text style={styles.heroTitle}>Archive.</Text>
          <View style={styles.blueLine} />

          <View style={styles.emptyCard}>
            <View style={styles.iconCircle}><Feather name="download" size={24} color="#2563eb" /></View>
            <Text style={styles.emptyTitle}>Arsip Kosong</Text>
            <Text style={styles.emptyDesc}>Pindahkan catatan yang jarang digunakan ke sini untuk menjaga ruang kerja tetap rapi.</Text>
            <TouchableOpacity style={styles.outlineBtn}>
               <Feather name="plus" size={18} color="#fff" style={{marginRight:8}} />
               <Text style={styles.outlineBtnText}>Mulai Mengarsipkan</Text>
            </TouchableOpacity>
          </View>

          {/* Info Cards */}
          <InfoItem icon="brush" title="Minimalist Focus" desc="Menyembunyikan kebisingan visual membantu Anda berkonsentrasi." />
          <InfoItem icon="shield" title="Keamanan Data" desc="Catatan tidak akan pernah dihapus otomatis. Aman bersama kami." />
          <InfoItem icon="search" title="Pencarian Global" desc="Temukan catatan dalam arsip secara instan kapanpun dibutuhkan." />
          
          <Text style={styles.footerText}>© 2024 The Digital Atelier. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const InfoItem = ({icon, title, desc}: any) => (
  <View style={styles.infoCard}>
    <Feather name={icon} size={20} color="#2563eb" style={{marginBottom:12}} />
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.infoDesc}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 20 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1e293b' },
  miniAvatar: { width: 36, height: 36, borderRadius: 18 },
  padContent: { paddingHorizontal: 24 },
  labelTop: { fontSize: 12, fontWeight: '800', color: '#2563eb', letterSpacing: 1.5 },
  heroTitle: { fontSize: 56, fontWeight: '800', color: '#1f2933', marginTop: 10 },
  blueLine: { width: 60, height: 6, backgroundColor: '#2563eb', marginBottom: 40 },
  emptyCard: { backgroundColor: '#fff', borderRadius: 32, padding: 30, alignItems: 'center', marginBottom: 20, elevation: 2 },
  iconCircle: { width: 60, height: 60, borderRadius: 20, backgroundColor: '#f1f5f9', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyTitle: { fontSize: 24, fontWeight: '800', color: '#1f2933', marginBottom: 10 },
  emptyDesc: { fontSize: 14, color: '#64748b', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  outlineBtn: { backgroundColor: '#2563eb', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 15, flexDirection: 'row', alignItems: 'center' },
  outlineBtnText: { color: '#fff', fontWeight: '700' },
  infoCard: { backgroundColor: '#f1f5f9', padding: 24, borderRadius: 24, marginBottom: 16 },
  infoTitle: { fontSize: 16, fontWeight: '800', color: '#1f2933', marginBottom: 8 },
  infoDesc: { fontSize: 13, color: '#64748b', lineHeight: 20 },
  footerText: { textAlign: 'center', fontSize: 10, color: '#94a3b8', marginVertical: 30 },
});
