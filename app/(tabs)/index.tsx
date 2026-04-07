import Sidebar from "@/components/Sidebar";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
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

export default function NotesScreen() {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [savedNotes, setSavedNotes] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      const loadNotes = async () => {
        try {
          const existingNotes = await AsyncStorage.getItem("my_notes");
          if (existingNotes !== null) {
            setSavedNotes(JSON.parse(existingNotes));
          }
        } catch (error) {
          console.error(error);
        }
      };

      loadNotes();
    }, []),
  );

  const allNotes = savedNotes
    .map((note) => ({
      id: note.id,
      tag: "MY NOTE",
      title: note.title,
      description: note.content,
      date: note.date,
      isHighlight: false,
    }))
    .reverse();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
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
          You have {allNotes.length} active thoughts today.
        </Text>

        {allNotes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Feather
              name="edit-3"
              size={48}
              color="#CBD5E0"
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyText}>Belum ada catatan.</Text>
            <Text style={styles.emptySubtext}>
              Mulai tulis ide pertamamu hari ini!
            </Text>
          </View>
        ) : (
          allNotes.map((note) => (
            <NoteCard
              key={note.id}
              tag={note.tag}
              title={note.title}
              description={note.description}
              date={note.date}
              isHighlight={note.isHighlight}
            />
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/write")}
      >
        <Feather name="plus" size={32} color="#FFFFFF" />
      </TouchableOpacity>

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
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4A5568",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#A0AEC0",
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
