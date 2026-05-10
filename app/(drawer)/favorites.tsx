import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Favorites() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Feather name="menu" size={24} color="#1f2933" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>The Digital Atelier</Text>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image source={require("../../assets/images/Profile2.jpg")} style={styles.miniAvatar} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* ILUSTRASI UTAMA */}
        <View style={styles.illustrationArea}>
          {/* Lingkaran Besar dengan Shadow Lembut */}
          <View style={styles.circleBg} />
          
          {/* Ikon Bintang "Bantal" melayang di Kanan Atas */}
          <View style={styles.starPillow}>
            <Feather name="star" size={28} color="#2563eb" />
          </View>
        </View>

        {/* TEKS */}
        <View style={styles.textContainer}>
          <Text style={styles.mainHeading}>Belum ada</Text>
          <Text style={styles.mainHeading}>Favorit</Text>
          
          <Text style={styles.description}>
            Catatan yang Anda tandai sebagai favorit akan muncul di sini.
          </Text>
        </View>

        {/* TOMBOL GRADASI PILL */}
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#0052D4', '#2b7fff', '#60efff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Mulai Menandai</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9fafb' 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 24, 
    paddingVertical: 15 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#1e293b' 
  },
  miniAvatar: { 
    width: 38, 
    height: 38, 
    borderRadius: 19 
  },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 40
  },
  illustrationArea: {
    width: 260,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  circleBg: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#EEF2FF',
    // Shadow biru lembut di bawah lingkaran
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 5,
  },
  starPillow: {
    position: 'absolute',
    top: 30,
    right: 20,
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 22, // Bikin efek bantal (super rounded)
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '15deg' }],
    // Shadow buat bantalnya
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mainHeading: { 
    fontSize: 38, 
    fontWeight: '900', // Sangat tebal
    color: '#334155', 
    textAlign: 'center',
    lineHeight: 44,
  },
  description: { 
    fontSize: 16, 
    color: '#94a3b8', 
    textAlign: 'center', 
    marginTop: 20, 
    paddingHorizontal: 40,
    lineHeight: 24 
  },
  buttonWrapper: {
    width: '70%',
  },
  gradientButton: {
    paddingVertical: 18,
    borderRadius: 35, // Pill shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '800', 
    fontSize: 16 
  },
});