import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonMain({
  text,
  color,
  textColor,
}: {
  text: string;
  color: string;
  textColor: string;
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: color || "#007AFF",
          borderRadius: 20,
        }}
        activeOpacity={0.4}
      >
        <Text style={{ color: textColor || "white", fontWeight: "bold" }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
