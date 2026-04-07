import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface InputTypeProps extends TextInputProps {
  placeholder: string;
}

export default function InputType({ placeholder, ...props }: InputTypeProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A0AEC0"
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#F1F5F9",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#2D3748",
  },
  inputFocused: {
    borderColor: "#0056D2",
    backgroundColor: "#FFFFFF",
  },
});
