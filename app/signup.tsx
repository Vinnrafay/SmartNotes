import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Import Reusable Components (Pastiin path folder components-nya bener ya!)
import CustomInput from "../components/CustomInput";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import CustomAlertModal from "../components/CustomAlertModal";

// Regex untuk validasi
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Cek validasi
  const isFormValid =
    name.trim().length > 0 &&
    emailRegex.test(email.trim()) &&
    passwordRegex.test(password) &&
    confirm === password;

  const handleGooglePress = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    if (isFormValid) {
     router.replace("/(drawer)/(tabs)");
    }
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
          <Text style={styles.brandName}>SmartNote</Text>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Begin your journey in the Digital Atelier.
          </Text>

          {/* Form Section pakai CustomInput */}
          <View style={styles.formContainer}>
            <CustomInput
              label="NAME"
              iconName="user"
              value={name}
              onChangeText={setName}
              placeholder="Alex Rivera"
              autoCapitalize="words"
            />
            <CustomInput
              label="EMAIL ADDRESS"
              iconName="mail"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@smartnote.ai"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              label="PASSWORD"
              iconName="lock"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry
              autoCapitalize="none"
            />
            <CustomInput
              label="CONFIRM"
              iconName="shield"
              value={confirm}
              onChangeText={setConfirm}
              placeholder="••••••••"
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {/* Register Button pakai PrimaryButton */}
          <PrimaryButton
            title="Register"
            onPress={handleSubmit}
            disabled={!isFormValid}
          />

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR REGISTER WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Button pakai SocialButton */}
          <SocialButton
            title="Google Account"
            onPress={handleGooglePress}
          />

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal Alert pakai CustomAlertModal */}
      <CustomAlertModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        title="Under Maintenance 🛠️"
        message="Maaf ya, pendaftaran dengan Google sedang dalam tahap pengembangan. Silakan gunakan form email di atas untuk sementara waktu."
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
    paddingHorizontal: 32,
    paddingTop: 60,
    paddingBottom: 50,
    alignItems: "center",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#212529",
    marginBottom: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#212529",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#4b5563",
    marginBottom: 40,
    textAlign: "center",
    width: "100%",
    lineHeight: 22,
  },
  formContainer: {
    width: "100%",
    gap: 26,
    marginBottom: 40,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 35,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 11,
    fontWeight: "700",
    color: "#64748b",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#64748b",
  },
  link: {
    fontSize: 14,
    color: "#0a58ca",
    fontWeight: "700",
  },
});
