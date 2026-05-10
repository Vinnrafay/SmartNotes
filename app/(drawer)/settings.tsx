import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={24} color="#1f2933" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>The Digital Atelier</Text>
          <Image source={require("../../assets/images/Profile2.jpg")} style={styles.miniAvatar} />
        </View>

        <View style={styles.pad}>
          <Text style={styles.label}>PERSONALIZE WORKSPACE</Text>
          <Text style={styles.hero}>Settings</Text>
          <Text style={styles.desc}>Refine your creative environment. Manage your identity, visual preferences, and localized experience.</Text>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconBlue}><Feather name="user" size={18} color="#2563eb"/></View>
              <Text style={styles.cardTitle}>Akun</Text>
            </View>
            <Text style={styles.cardSub}>Manage your profile and subscription status</Text>
            <TouchableOpacity style={styles.list}><Text>Informasi Profil</Text><Feather name="chevron-right" color="#cbd5e1" /></TouchableOpacity>
            <TouchableOpacity style={styles.list}><Text>Keamanan</Text><Feather name="chevron-right" color="#cbd5e1" /></TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconBlue}><Feather name="aperture" size={18} color="#2563eb"/></View>
              <Text style={styles.cardTitle}>Tampilan</Text>
            </View>
            <Text style={styles.cardSub}>Customize themes and typography</Text>
            <TouchableOpacity style={styles.galleryBtn}>
              <Text style={styles.galleryText}>Buka Galeri Tema</Text>
              <Feather name="arrow-right" color="#fff" size={16} />
            </TouchableOpacity>
            <View style={styles.imgPlaceholder} />
          </View>

          <View style={styles.simpleList}><Text>Bahasa</Text><Text style={{color:'#2563eb', fontWeight:'700'}}>Ubah</Text></View>
          <View style={styles.simpleList}><Text>Tentang Aplikasi</Text><Feather name="chevron-right" color="#cbd5e1" /></View>
          
          <Text style={styles.footerBrand}>SmartNote</Text>
          <Text style={styles.footerSub}>DESIGNED FOR DIGITAL CRAFTSMEN</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24 },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  miniAvatar: { width: 36, height: 36, borderRadius: 18 },
  pad: { paddingHorizontal: 24 },
  label: { fontSize: 11, fontWeight: '800', color: '#2563eb', letterSpacing: 1 },
  hero: { fontSize: 48, fontWeight: '800', color: '#1e293b' },
  desc: { fontSize: 15, color: '#64748b', lineHeight: 22, marginVertical: 20 },
  card: { backgroundColor: '#fff', borderRadius: 24, padding: 24, marginBottom: 20, elevation: 1 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconBlue: { backgroundColor: '#eff6ff', padding: 8, borderRadius: 10, marginRight: 12 },
  cardTitle: { fontSize: 20, fontWeight: '800', color: '#1e293b' },
  cardSub: { fontSize: 13, color: '#64748b', marginBottom: 20 },
  list: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f1f5f9', padding: 16, borderRadius: 12, marginBottom: 8 },
  galleryBtn: { backgroundColor: '#2563eb', padding: 16, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  galleryText: { color: '#fff', fontWeight: '700' },
  imgPlaceholder: { height: 150, backgroundColor: '#e2e8f0', borderRadius: 15, marginTop: 20 },
  simpleList: { flexDirection: 'row', justifyContent: 'space-between', padding: 24, backgroundColor: '#f1f5f9', borderRadius: 20, marginBottom: 12 },
  footerBrand: { textAlign: 'center', marginTop: 40, fontSize: 18, fontWeight: '800', color: '#cbd5e1' },
  footerSub: { textAlign: 'center', fontSize: 10, color: '#cbd5e1', marginBottom: 40 },
});