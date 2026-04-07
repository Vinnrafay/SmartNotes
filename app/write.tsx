import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function WriteNoteScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const ambilDataDraft = async () => {
      try {
        const dataTeks = await AsyncStorage.getItem("draft_catatan");
        if (dataTeks !== null) {
          const dataAsli = JSON.parse(dataTeks);
          setTitle(dataAsli.title);
          setContent(dataAsli.content);
        }
      } catch (error) {
        Alert.alert("Error", "Gagal memuat catatan sebelumnya.");
      }
    };

    ambilDataDraft();
  }, []);

  const handleSave = async () => {
    if (!title.trim() && !content.trim()) {
      Alert.alert("Perhatian", "Judul atau isi catatan tidak boleh kosong!");
      return;
    }

    try {
      const dataDraft = {
        title: title,
        content: content,
      };

      const dataTeks = JSON.stringify(dataDraft);
      await AsyncStorage.setItem("draft_catatan", dataTeks);

      Alert.alert("Sukses", "Catatan berhasil disimpan ke memori HP!");
    } catch (error) {
      Alert.alert("Error", "Gagal menyimpan catatan.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={24} color="#1A202C" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tulis Catatan</Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.pillContainer}>
            <View style={styles.pill}>
              <Feather name="calendar" size={14} color="#4285F4" />
              <Text style={styles.pillText}>24 Mei 2024</Text>
            </View>
            <TouchableOpacity style={styles.pill}>
              <Feather name="plus-circle" size={14} color="#4285F4" />
              <Text style={styles.pillText}>Tambah Tag</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.titleWrapper}>
            <TextInput
              style={styles.titleInput}
              placeholder="Judul Catatan"
              placeholderTextColor="#CBD5E0"
              value={title}
              onChangeText={setTitle}
            />
            <View style={styles.titleUnderline} />
          </View>

          <TextInput
            style={styles.bodyInput}
            placeholder="Mulai mengetik ide kamu di sini..."
            placeholderTextColor="#A0AEC0"
            multiline
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
          />
        </View>

        <View style={styles.toolbarWrapper}>
          <View style={styles.toolbar}>
            <TouchableOpacity style={styles.toolbarIcon}>
              <Text style={styles.boldIconText}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarIcon}>
              <Text style={styles.italicIconText}>I</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarIcon}>
              <Feather name="list" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.toolbarDivider} />

            <TouchableOpacity style={styles.toolbarIcon}>
              <Feather name="image" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarIcon}>
              <Feather name="mic" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.smartAiButton}>
              <MaterialCommunityIcons
                name="auto-fix"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.smartAiText}>SMART AI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A202C",
    marginLeft: -20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0056D2",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 5,
  },
  pillContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4A5568",
    marginLeft: 6,
  },
  titleWrapper: {
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A202C",
    paddingVertical: 0,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: "#0056D2",
    borderRadius: 2,
    marginTop: 8,
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    color: "#2D3748",
    lineHeight: 26,
    paddingTop: 10,
  },
  toolbarWrapper: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  toolbarIcon: {
    paddingHorizontal: 10,
  },
  boldIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  italicIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  toolbarDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#555555",
    marginHorizontal: 8,
  },
  smartAiButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0056D2",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: "auto",
  },
  smartAiText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 6,
    letterSpacing: 0.5,
  },
});
