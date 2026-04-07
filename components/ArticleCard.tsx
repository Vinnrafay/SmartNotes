import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ArticleCardProps {
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  isBookmarked?: boolean;
}

export default function ArticleCard({
  title,
  description,
  authorName,
  authorAvatar,
  isBookmarked,
}: ArticleCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.authorContainer}>
          <Image source={{ uri: authorAvatar }} style={styles.avatar} />
          <Text style={styles.authorName}>{authorName}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.bookmarkBtn, isBookmarked && styles.bookmarkBtnActive]}
      >
        <Feather
          name="bookmark"
          size={20}
          color={isBookmarked ? "#FFFFFF" : "#718096"}
        />
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
  },
  contentContainer: {
    flex: 1,
    paddingRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A202C",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 16,
    lineHeight: 20,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorName: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "500",
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
