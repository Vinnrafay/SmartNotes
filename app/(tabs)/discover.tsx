import Sidebar from "@/components/Sidebar";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  RefreshControl,
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
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchQuotes = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const randomSkip = Math.floor(Math.random() * 100);
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=5&skip=${randomSkip}`,
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();
      setQuotes(data.quotes);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const renderContent = () => {
    if (isLoading && quotes.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0A58CA" />
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.centerContainer}>
          <Feather
            name="wifi-off"
            size={48}
            color="#A0AEC0"
            style={{ marginBottom: 16 }}
          />
          <Text style={styles.errorText}>Gagal memuat inspirasi hari ini.</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchQuotes}>
            <Text style={styles.retryButtonText}>Coba Lagi</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <>
        {quotes.length > 0 && (
          <FeaturedCard
            tag="FEATURED QUOTE"
            quote={quotes[0].quote}
            author={quotes[0].author}
          />
        )}

        <TouchableOpacity style={styles.refreshButton} onPress={fetchQuotes}>
          <Feather
            name="refresh-cw"
            size={16}
            color="#0056D2"
            style={styles.refreshIcon}
          />
          <Text style={styles.refreshButtonText}>Cari Inspirasi Lain</Text>
        </TouchableOpacity>

        {quotes.slice(1).map((item, index) => {
          if (index % 2 === 0) {
            return (
              <ArticleCard
                key={item.id}
                title="Inspirasi Pikiran"
                description={item.quote}
                authorName={item.author}
                authorAvatar={`https://i.pravatar.cc/150?img=${(item.id % 70) + 1}`}
              />
            );
          } else {
            return (
              <QuoteCard
                key={item.id}
                quote={item.quote}
                author={item.author.toUpperCase()}
                hasLeftBorder={true}
              />
            );
          }
        })}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
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
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchQuotes}
            colors={["#0A58CA"]}
            tintColor="#0A58CA"
          />
        }
      >
        {renderContent()}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/write")}
      >
        <Feather name="plus" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      <Sidebar
        visible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
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
    flexGrow: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  errorText: {
    fontSize: 16,
    color: "#718096",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#0A58CA",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  refreshButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#0A58CA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  refreshIcon: {
    marginRight: 8,
  },
  refreshButtonText: {
    color: "#0056D2",
    fontWeight: "700",
    fontSize: 14,
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
