import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Trash() {
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

        <View style={styles.centerSection}>
           <View style={styles.trashIconBg}><Feather name="trash-2" size={40} color="#cbd5e1" /></View>
           <Text style={styles.heroText}>Sampah Kosong</Text>
           <Text style={styles.subText}>Catatan dihapus akan tetap di sini selama <Text style={{color:'#2563eb', fontWeight:'700'}}>30 hari</Text> sebelum dihapus permanen.</Text>
           <TouchableOpacity style={styles.backBtn}><Text style={styles.backBtnText}>Kembali ke Catatan</Text></TouchableOpacity>
        </View>

        <View style={styles.infoArea}>
          <TrashCard icon="clock" title="AUTOMASI" desc="Pembersihan berkala otomatis dilakukan setiap bulan." />
          <TrashCard icon="shield" title="PRIVASI" desc="Data Anda tetap terenkripsi bahkan saat berada di sampah." />
          <TrashCard icon="rotate-ccw" title="PEMULIHAN" desc="Satu klik untuk mengembalikan catatan ke folder utama." />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const TrashCard = ({icon, title, desc}: any) => (
  <View style={styles.card}>
    <Feather name={icon} size={18} color="#2563eb" style={{marginBottom:10}} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDesc}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24 },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  miniAvatar: { width: 36, height: 36, borderRadius: 18 },
  centerSection: { alignItems: 'center', paddingHorizontal: 40, marginTop: 40 },
  trashIconBg: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 24, elevation: 2 },
  heroText: { fontSize: 40, fontWeight: '800', textAlign: 'center', color: '#1e293b' },
  subText: { fontSize: 15, color: '#64748b', textAlign: 'center', lineHeight: 22, marginTop: 12 },
  backBtn: { backgroundColor: '#f1f5f9', paddingVertical: 14, paddingHorizontal: 30, borderRadius: 20, marginTop: 30 },
  backBtnText: { fontWeight: '700', color: '#1e293b' },
  infoArea: { paddingHorizontal: 24, marginTop: 40 },
  card: { backgroundColor: '#f1f5f9', padding: 20, borderRadius: 15, marginBottom: 12 },
  cardTitle: { fontSize: 11, fontWeight: '800', color: '#94a3b8', letterSpacing: 1 },
  cardDesc: { fontSize: 13, color: '#94a3b8', marginTop: 4 },
});