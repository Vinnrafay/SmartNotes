import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Import Reusable Components
import CustomAlertModal from "../components/CustomAlertModal";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";

// Regex untuk validasi email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Cek apakah email valid dan password terisi
  const isFormValid = emailRegex.test(email.trim()) && password.length > 0;

  const handleSubmit = () => {
    if (isFormValid) {
      router.replace("/(drawer)/(tabs)");
    }
  };

  const handleGooglePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View style={styles.header}>
            <Image
              source={require("../assets/images/Container.png")}
              style={styles.mainIcon}
            />
            <Text style={styles.brand}>SmartNote</Text>
            <Text style={styles.tagline}>
              Your thoughts, refined and organized.
            </Text>
          </View>

          {/* White Card Section */}
          <View style={styles.card}>
            {/* Email Field (Beda style dengan Signup, jadi gak pakai CustomInput) */}
            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="name@company.com"
                placeholderTextColor="#9ca3af"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Field */}
            <View style={styles.field}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.linkInline}>Forgot?</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            {/* Login Button pakai PrimaryButton */}
            <View style={styles.buttonWrapper}>
              <PrimaryButton
                title="Login"
                onPress={handleSubmit}
                disabled={!isFormValid}
              />
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Button pakai SocialButton */}
            <SocialButton
              title="Login with Google"
              onPress={handleGooglePress}
            />
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal Alert pakai CustomAlertModal */}
      <CustomAlertModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        title="Under Maintenance 🛠️"
        message="Maaf ya, fitur login dengan Google sedang dalam tahap pengembangan. Silakan gunakan form email di atas untuk sementara waktu."
      />
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#f4f6f9",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  mainIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    marginBottom: 16,
  },
  brand: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1f2933",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 15,
    color: "#64748b",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
    marginBottom: 30,
  },
  field: {
    gap: 8,
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1f2933",
  },
  // Wrapper ini buat nyesuain margin tombol karena PrimaryButton udah punya marginBottom bawaan
  buttonWrapper: {
    marginTop: 10,
    marginBottom: -10,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 12,
    fontWeight: "700",
    color: "#94a3b8",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    color: "#64748b",
  },
  link: {
    fontSize: 15,
    color: "#0a58ca",
    fontWeight: "700",
  },
  linkInline: {
    fontSize: 13,
    color: "#0a58ca",
    fontWeight: "700",
  },
});
