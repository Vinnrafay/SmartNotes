import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface NoteCardProps {
  tag: string;
  title: string;
  description?: string;
  date: string;
  isHighlight?: boolean;
  imageUrl?: string;
}

export default function NoteCard({
  tag,
  title,
  description,
  date,
  isHighlight,
  imageUrl,
}: NoteCardProps) {
  return (
    <View style={styles.card}>
      {isHighlight ? (
        <View style={styles.headerHighlight}>
          <View style={styles.tagHighlight}>
            <Text style={styles.tagTextHighlight}>{tag}</Text>
          </View>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      ) : (
        <Text style={styles.tagText}>{tag}</Text>
      )}

      <Text style={styles.title}>{title}</Text>

      {description && <Text style={styles.description}>{description}</Text>}

      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {!isHighlight && <Text style={styles.dateTextBottom}>{date}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  headerHighlight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  tagHighlight: {
    backgroundColor: "#E1EFFF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagTextHighlight: {
    color: "#0056D2",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  tagText: {
    color: "#718096",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A202C",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4A5568",
    lineHeight: 22,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginTop: 12,
  },
  dateText: {
    fontSize: 12,
    color: "#A0AEC0",
  },
  dateTextBottom: {
    fontSize: 12,
    color: "#A0AEC0",
    marginTop: 16,
  },
});
