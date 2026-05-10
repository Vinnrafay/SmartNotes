import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

type CustomInputProps = {
  label: string;
  iconName?: React.ComponentProps<typeof Feather>["name"];
} & TextInputProps;

export default function CustomInput({
  label,
  iconName,
  ...textInputProps
}: CustomInputProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {/* Render icon hanya kalau iconName diisi */}
        {iconName && (
          <Feather name={iconName} size={16} color="#9aa0a6" style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor="#cbd5e1"
          {...textInputProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: 8,
    width: "100%",
  },
  label: {
    fontSize: 11,
    color: "#4b5563",
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 10,
  },
  icon: {
    marginRight: 14,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1f2933",
    paddingVertical: 0,
  },
});
