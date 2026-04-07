import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NoteCard from "../../components/NoteCard";

const notesData = [
  {
    id: "1",
    tag: "STRATEGY",
    isHighlight: true,
    title: "Visi Produk anjayyyyyyyyyyyyy",
    description:
      "Membangun ekosistem yang lebih terintegrasi untuk pengguna profesional. Fokus pada efisiensi kerja melalui AI dan...",
    date: "Oct 24, 2023",
  },
  {
    id: "2",
    tag: "PROJECT",
    title: "Desain UI Baru",
    description:
      "Menggunakan editorial minimalism sebagai panduan utama visual...",
    date: "Oct 22, 2023",
  },
  {
    id: "3",
    tag: "PERSONAL",
    title: "Daftar Belanja",
    description:
      "Beli kopi biji Arabika, susu oat, dan beberapa buah-buahan segar...",
    date: "Oct 21, 2023",
  },
  {
    id: "4",
    tag: "MEETING",
    title: "Review Sprint 4",
    description:
      "Hasil pengujian user memuaskan, namun ada kendala pada navigasi...",
    date: "Oct 20, 2023",
  },
  {
    id: "5",
    tag: "INSIGHT",
    title: "Moodboard 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500",
    date: "Oct 19, 2023",
  },
];

export default function NotesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#1A202C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SmartNote</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.pageTitle}>Catatanku</Text>
        <Text style={styles.pageSubtitle}>
          You have 12 active thoughts today.
        </Text>

        {notesData.map((note) => (
          <NoteCard
            key={note.id}
            tag={note.tag}
            title={note.title}
            description={note.description}
            date={note.date}
            isHighlight={note.isHighlight}
            imageUrl={note.imageUrl}
          />
        ))}
      </ScrollView>
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
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
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
    paddingTop: 20,
    paddingBottom: 120,
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: "800",
    color: "#2D3748",
    marginBottom: 8,
    letterSpacing: -1,
  },
  pageSubtitle: {
    fontSize: 15,
    color: "#718096",
    marginBottom: 32,
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#4285F4",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
});
