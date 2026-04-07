import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface FeaturedCardProps {
  tag: string;
  quote: string;
  author: string;
}

export default function FeaturedCard({
  tag,
  quote,
  author,
}: FeaturedCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0A58CA",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: "#0A58CA",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  tagContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 16,
  },
  tagText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  quoteText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 20,
  },
  authorText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
    fontWeight: "500",
  },
});
