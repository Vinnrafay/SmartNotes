import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

type SocialButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function SocialButton({ title, onPress }: SocialButtonProps) {
  return (
    <TouchableOpacity
      style={styles.socialButton}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Image
        source={require("../assets/images/icon google.png")} // <-- Ganti path foto Google-nya di sini ntar
        style={styles.socialImage}
      />
      <Text style={styles.socialButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  socialImage: {
    width: 20,
    height: 20,
    marginRight: 12,
    resizeMode: "contain",
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1f2933",
  },
});
