import { router } from "expo-router";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Globe,
  Palette,
} from "lucide-react-native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfile() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <Image
          source={{ uri: "../assets/images/Alex Rivera Avatar.png" }}
          style={styles.miniAvatar}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Profile Image Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: "../assets/images/Alex Rivera Avatar.png" }} // Ganti dengan image Alex Rivers
              style={styles.mainAvatar}
            />
            <TouchableOpacity style={styles.cameraButton}>
              <Camera color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.memberSince}>MEMBER SINCE 2023</Text>
          <Text style={styles.recommendText}>Recommended: 1000 × 1000px</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>NAMA LENGKAP</Text>
          <TextInput style={styles.input} defaultValue="Alex Rivers" />

          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.input}
            defaultValue="alex.rivers@atelier.digital"
            keyboardType="email-address"
          />

          <Text style={styles.label}>BIO</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            multiline
            defaultValue="Digital Curator & Minimalist Architect. Crafting experiences that breathe in the Digital Atelier. Notes are the seeds of tomorrow's structures."
          />

          {/* Row for Location and Theme */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.infoBox}>
              <View>
                <Text style={styles.boxLabel}>LOCATION</Text>
                <Text style={styles.boxValue}>Copenhagen, DK</Text>
              </View>
              <Globe color="#999" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoBox}>
              <View>
                <Text style={styles.boxLabel}>THEME</Text>
                <Text style={styles.boxValue}>Azure Light</Text>
              </View>
              <Palette color="#999" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.discardButton}>
            <Text style={styles.discardText}>Discard Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <View style={styles.saveContent}>
              <CheckCircle2 color="#fff" size={20} />
              <Text style={styles.saveText}>Save Changes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
  },
  miniAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageWrapper: {
    position: "relative",
  },
  mainAvatar: {
    width: 160,
    height: 160,
    borderRadius: 30,
  },
  cameraButton: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: "#1D63D1",
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#F8FAFC",
  },
  memberSince: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 1,
  },
  recommendText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 4,
  },
  form: {
    paddingHorizontal: 25,
    marginTop: 30,
  },
  label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#1D63D1",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#1E293B",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  bioInput: {
    height: 120,
    textAlignVertical: "top",
    lineHeight: 22,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    backgroundColor: "#FFF",
    width: "48%",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxLabel: {
    fontSize: 10,
    color: "#94A3B8",
    fontWeight: "700",
  },
  boxValue: {
    fontSize: 14,
    color: "#1E293B",
    fontWeight: "600",
    marginTop: 2,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  discardButton: {
    flex: 1,
    alignItems: "center",
  },
  discardText: {
    color: "#64748B",
    fontWeight: "600",
  },
  saveButton: {
    flex: 2,
    backgroundColor: "#1D63D1",
    paddingVertical: 18,
    borderRadius: 40,
    shadowColor: "#1D63D1",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  saveContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  saveText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
