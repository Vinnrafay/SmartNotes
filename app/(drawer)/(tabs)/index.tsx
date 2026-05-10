import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteCard, { Note } from "../../../components/NoteCard";

export default function Home() {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Note[]>([]);

  // TAHAP 1 & 3: State untuk Draft Catatan (Tugas Sekolah)
  const [draftText, setDraftText] = useState("");
  const [savedDraft, setSavedDraft] = useState("");

  // Fungsi Load List Catatan (Yang pake kartu)
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("@smartnote_notes");
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch (error) {
      console.error("Gagal load catatan:", error);
    }
  };

  // TAHAP 3: Fungsi Ambil Draft Permanen
  const ambilDraft = async () => {
    try {
      const value = await AsyncStorage.getItem("draft_catatan");
      if (value !== null) setSavedDraft(value);
    } catch (e) {
      console.error(e);
    }
  };

  // TAHAP 3: Fungsi Simpan Draft Permanen
  const simpanDraft = async () => {
    try {
      await AsyncStorage.setItem("draft_catatan", draftText);
      setSavedDraft(draftText);
      Alert.alert("Sukses", "Draft disimpan!");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    ambilDraft();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadNotes();
      ambilDraft();
    }, []),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        // --- HEADER FLATLIST (Biar TextInput bisa ikut ke-scroll) ---
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Feather name="menu" size={24} color="#1f2933" />
              </TouchableOpacity>
              <Text style={styles.brandTitle}>SmartNote</Text>
              <TouchableOpacity onPress={() => router.push("/profile")}>
                <Image
                  source={require("../../../assets/images/Profile2.jpg")}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.titleSection}>
              <Text style={styles.pageTitle}>Catatanku</Text>
              <Text style={styles.pageSubtitle}>
                You have {notes.length} thoughts today.
              </Text>
            </View>

            {/* TAHAP 1: INPUT DRAFT (SESUAI TUGAS) */}
            <View style={styles.draftArea}>
              <TextInput
                style={styles.inputMultiline}
                placeholder="Tulis draft cepat di sini..."
                multiline={true}
                value={draftText}
                onChangeText={setDraftText}
              />
              <TouchableOpacity style={styles.btnSimpan} onPress={simpanDraft}>
                <Text style={styles.btnText}>Simpan Catatan</Text>
              </TouchableOpacity>

              {/* AREA TAMPILAN DATA TERAKHIR */}
              {savedDraft ? (
                <View style={styles.savedBox}>
                  <Text style={styles.savedTitle}>Draft Terakhir:</Text>
                  <Text style={styles.savedContent}>{savedDraft}</Text>
                </View>
              ) : null}
            </View>

            <Text style={styles.sectionDivider}>Semua Catatan</Text>
          </>
        }
        renderItem={({ item }) => (
          <NoteCard note={item} onPress={() => console.log(item.title)} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Feather name="inbox" size={48} color="#cbd5e1" />
            <Text style={styles.emptyText}>Belum ada list catatan.</Text>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/add-note")}>
        <Feather name="plus" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f4f6f9" },
  listContainer: { paddingHorizontal: 24, paddingBottom: 130 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  brandTitle: { fontSize: 20, fontWeight: "800", color: "#2563eb" },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  titleSection: { marginBottom: 24 },
  pageTitle: { fontSize: 40, fontWeight: "800", color: "#1f2933" },
  pageSubtitle: { fontSize: 14, color: "#6b7280" },

  draftArea: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
  inputMultiline: {
    minHeight: 100,
    fontSize: 16,
    textAlignVertical: "top",
    color: "#334155",
  },
  btnSimpan: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "700" },
  savedBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f8fafc",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  savedTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
    marginBottom: 4,
  },
  savedContent: { fontSize: 14, color: "#1e293b" },
  sectionDivider: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2933",
    marginBottom: 15,
    marginTop: 10,
  },

  emptyContainer: { alignItems: "center", marginTop: 40 },
  emptyText: { color: "#9ca3af", marginTop: 10 },
  fab: {
    position: "absolute",
    bottom: 110,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#4f82f7",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});
