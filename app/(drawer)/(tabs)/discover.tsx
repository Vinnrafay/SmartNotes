import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookmarkButton from "../../../components/BookmarkButton";

// --- DATA TEMPLATE STATIS (Untuk Artikel) ---
const DISCOVER_DATA = [
  {
    id: "1",
    type: "article",
    title: "Menjaga Fokus di Era Distraksi Digital",
    snippet: "Teknik deep work untuk meningkatkan produktivitas...",
    author: "Andi Pratama",
    avatar: require("../../../assets/images/Background.png"),
    isBookmarked: false,
  },
  {
    id: "2",
    type: "quote", // Ini tipe Quote
    text: '"Hanya mereka yang berani gagal total yang dapat meraih keberhasilan total."',
    author: "ROBERT F. KENNEDY",
    isBookmarked: true,
  },
  {
    id: "3",
    type: "article",
    title: "Minimalisme: Seni Melepaskan",
    snippet: "Bagaimana ruang yang bersih menciptakan pikiran yang jerni...",
    author: "Siska Rahayu",
    avatar: require("../../../assets/images/Background (1).png"),
    isBookmarked: false,
  },
  {
    id: "4",
    type: "quote", // Ini tipe Quote
    text: '"The best way to predict your future is to create it."',
    author: "ABRAHAM LINCOLN",
    isBookmarked: false,
  },
];

export default function Discover() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // State baru buat handle error

  const fetchRandomQuote = async () => {
  setLoading(true);
  setError(false); 
  try {
    // Tambahin timeout biar gak nunggu kelamaan kalau internet lemot
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000); // 5 detik limit

    const response = await fetch("https://dummyjson.com/quotes/random", {
      signal: controller.signal
    });
    
    clearTimeout(id);

    if (!response.ok) {
      throw new Error("Respon server tidak oke");
    }

    const data = await response.json();
    
    // Pastikan data ada isinya
    if (data.quote) {
      setQuote({
        text: data.quote,
        author: data.author,
      });
    }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.log("Detail Error:", message);
    setError(true);
    
    // Opsional: Kasih quote default kalau beneran gagal total
    setQuote({
      text: "Kegagalan adalah bumbu yang memberi kesuksesan rasa yang enak.",
      author: "Truman Capote"
    });
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="menu" size={24} color="#1f2933" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inspirasi Hari Ini</Text>
          <Image
            source={require("../../../assets/images/Profile2.jpg")}
            style={styles.headerAvatar}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          
          {/* FEATURED QUOTE CARD */}
          <View style={styles.featuredCard}>
            <View style={styles.featuredHeaderRow}>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>FEATURED QUOTE</Text>
              </View>
              <TouchableOpacity
                onPress={fetchRandomQuote}
                disabled={loading}
                style={styles.refreshBtn}>
                <Feather
                  name="refresh-cw"
                  size={16}
                  color="#fff"
                  style={loading && { opacity: 0.5 }}
                />
              </TouchableOpacity>
            </View>

            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator color="#fff" size="large" />
                <Text style={styles.loadingText}>Mencari Inspirasi...</Text>
              </View>
            ) : error ? (
              /* --- TAMPILAN ERROR YANG MENARIK --- */
              <View style={styles.errorContainer}>
                <Feather name="wifi-off" size={40} color="rgba(255,255,255,0.7)" />
                <Text style={styles.errorText}>Waduh, Koneksi Terputus!</Text>
                <Text style={styles.errorSubText}>Gagal mengambil inspirasi hari ini.</Text>
                <TouchableOpacity style={styles.retryBtn} onPress={fetchRandomQuote}>
                  <Text style={styles.retryBtnText}>Coba Lagi</Text>
                </TouchableOpacity>
              </View>
            ) : (
              /* --- TAMPILAN KETIKA BERHASIL --- */
              <>
                <Text style={styles.featuredQuote}>"{quote.text}"</Text>
                <Text style={styles.featuredAuthor}>— {quote.author}</Text>
                <TouchableOpacity
                  style={styles.inspirationBtn}
                  onPress={fetchRandomQuote}>
                  <Text style={styles.inspirationBtnText}>Inspirasi Lainnya</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* LIST ITEM ARTIKEL */}
          {DISCOVER_DATA.map((item) => {
  if (item.type === "article") {
    // Render Kartu Artikel (Sama seperti kodemu sebelumnya)
    return (
      <View key={item.id} style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.articleTitle}>{item.title}</Text>
          <BookmarkButton initialSaved={item.isBookmarked} />
        </View>
        <Text style={styles.articleSnippet}>{item.snippet}</Text>
        <View style={styles.authorRow}>
          <Image source={item.avatar} style={styles.authorAvatar} />
          <Text style={styles.authorName}>{item.author}</Text>
        </View>
      </View>
    );
  } else {
    // Render Kartu Quote (Sesuai gambar, ada garis biru di kiri)
    return (
      <View key={item.id} style={styles.card}>
        <View style={styles.quoteRow}>
          <View style={styles.quoteLine} /> 
          <View style={{ flex: 1 }}>
            <View style={styles.cardHeader}>
              <Text style={styles.quoteItemText}>{item.text}</Text>
              <BookmarkButton initialSaved={item.isBookmarked} />
            </View>
            <Text style={styles.quoteItemAuthor}>{item.author}</Text>
          </View>
        </View>
      </View>
    );
  }
})}
        </ScrollView>

        {/* FAB */}
        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.8}
          onPress={() => router.push("/add-note")}>
          <Feather name="plus" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f4f6f9" },
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 24,
  },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "#2563eb" },
  headerAvatar: { width: 36, height: 36, borderRadius: 18 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 130 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: "#1f2933", marginBottom: 16, marginTop: 10 },
  quoteRow: {
    flexDirection: 'row',
  },
  quoteLine: {
    width: 4,
    backgroundColor: '#2563eb',
    borderRadius: 2,
    marginRight: 16,
  },
  quoteItemText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2933",
    lineHeight: 26,
    marginBottom: 12,
  },
  quoteItemAuthor: {
    fontSize: 12,
    fontWeight: "800",
    color: "#2563eb",
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  featuredCard: {
    backgroundColor: "#0d53c2",
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
    elevation: 8,
    minHeight: 250, // Biar ukuran card nggak loncat-loncat pas loading/error
    justifyContent: 'center'
  },
  featuredHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    position: 'absolute',
    top: 24,
    left: 24,
    right: 24
  },
  featuredBadge: { backgroundColor: "rgba(255, 255, 255, 0.2)", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12 },
  featuredBadgeText: { color: "#fff", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  featuredQuote: { color: "#fff", fontSize: 22, fontWeight: "800", lineHeight: 30, marginBottom: 16, marginTop: 40 },
  featuredAuthor: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "500", marginBottom: 24 },
  
  // STYLING LOADING
  loadingContainer: { alignItems: 'center', justifyContent: 'center' },
  loadingText: { color: '#fff', marginTop: 12, fontSize: 14, fontWeight: '600', opacity: 0.8 },

  // STYLING ERROR
  errorContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  errorText: { color: '#fff', fontSize: 18, fontWeight: '800', marginTop: 12 },
  errorSubText: { color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4, marginBottom: 20 },
  retryBtn: { backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  retryBtnText: { color: '#0d53c2', fontWeight: '800', fontSize: 14 },

  inspirationBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  inspirationBtnText: { color: "#fff", fontWeight: "800", fontSize: 14 },
  refreshBtn: { padding: 5 },
  card: { backgroundColor: "#ffffff", borderRadius: 24, padding: 20, marginBottom: 16, elevation: 2 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 16 },
  articleTitle: { flex: 1, fontSize: 18, fontWeight: "800", color: "#1f2933", marginBottom: 8, lineHeight: 24 },
  articleSnippet: { fontSize: 14, color: "#64748b", lineHeight: 20, marginBottom: 16 },
  authorRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  authorAvatar: { width: 24, height: 24, borderRadius: 12 },
  authorName: { fontSize: 12, color: "#64748b", fontWeight: "500" },
  fab: { position: "absolute", bottom: 110, right: 24, width: 64, height: 64, borderRadius: 32, backgroundColor: "#4f82f7", alignItems: "center", justifyContent: "center", elevation: 8 },
});
