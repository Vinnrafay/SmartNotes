import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArticleCard from "../../components/ArticleCard";
import FeaturedCard from "../../components/FeaturedCard";
import QuoteCard from "../../components/QuoteCard";

export default function DiscoverScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#1A202C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inspirasi Hari Ini</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <FeaturedCard
          tag="FEATURED QUOTE"
          quote="Creativity is intelligence having fun."
          author="Albert Einstein"
        />

        <ArticleCard
          title="Menjaga Fokus di Era Distraksi Digital"
          description="Teknik deep work untuk meningkatkan produktivitas..."
          authorName="Andi Pratama"
          authorAvatar="https://i.pravatar.cc/150?img=11"
        />

        <QuoteCard
          quote="Hanya mereka yang berani gagal total yang dapat meraih keberhasilan total."
          author="ROBERT F. KENNEDY"
          isBookmarked={true}
          hasLeftBorder={true}
        />

        <ArticleCard
          title="Minimalisme: Seni Melepaskan"
          description="Bagaimana ruang yang bersih menciptakan pikiran yang jerni..."
          authorName="Siska Rahayu"
          authorAvatar="https://i.pravatar.cc/150?img=9"
        />

        <QuoteCard
          quote="The best way to predict your future is to create it."
          author="ABRAHAM LINCOLN"
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/write")}
      >
        <Feather name="plus" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0A58CA",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#CBD5E0",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#4285F4",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
});
