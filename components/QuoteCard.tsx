import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface QuoteCardProps {
  quote: string;
  author: string;
  isBookmarked?: boolean;
  hasLeftBorder?: boolean;
}

export default function QuoteCard({
  quote,
  author,
  isBookmarked,
  hasLeftBorder,
}: QuoteCardProps) {
  return (
    <View style={[styles.card, hasLeftBorder && styles.cardWithBorder]}>
      <View style={styles.contentContainer}>
        <Text style={styles.quoteText}>"{quote}"</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>
      <TouchableOpacity
        style={[styles.bookmarkBtn, isBookmarked && styles.bookmarkBtnActive]}
      >
        {isBookmarked ? (
          <Ionicons name="bookmark" size={20} color="#FFFFFF" />
        ) : (
          <Feather name="bookmark" size={20} color="#718096" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    borderLeftWidth: 0,
    borderColor: "transparent",
  },
  cardWithBorder: {
    borderLeftWidth: 4,
    borderColor: "#0A58CA",
  },
  contentContainer: {
    flex: 1,
    paddingRight: 16,
    justifyContent: "center",
  },
  quoteText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
    marginBottom: 12,
    lineHeight: 26,
  },
  authorText: {
    fontSize: 11,
    color: "#0A58CA",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  bookmarkBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkBtnActive: {
    backgroundColor: "#4285F4",
  },
});
