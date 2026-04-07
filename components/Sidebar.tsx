import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export default function Sidebar({ visible, onClose }: SidebarProps) {
  const [showModal, setShowModal] = useState(visible);
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setShowModal(false);
      });
    }
  }, [visible]);

  if (!showModal) return null;

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backgroundDimmer} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.sidebarContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={styles.profileSection}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=11" }}
              style={styles.avatar}
            />
            <View style={styles.nameRow}>
              <Text style={styles.nameText}>Alex Rivera</Text>
              <MaterialIcons name="verified" size={16} color="#0056D2" />
            </View>
            <Text style={styles.emailText}>alex.rivera@smartnote.ai</Text>
            <Text style={styles.premiumBadge}>PREMIUM MEMBER</Text>
          </View>

          <View style={styles.menuSection}>
            <TouchableOpacity style={[styles.menuItem, styles.menuItemActive]}>
              <Ionicons name="document-text" size={20} color="#0056D2" />
              <Text style={[styles.menuText, styles.menuTextActive]}>
                All Notes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Feather name="star" size={20} color="#4A5568" />
              <Text style={styles.menuText}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Feather name="archive" size={20} color="#4A5568" />
              <Text style={styles.menuText}>Archive</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Feather name="trash-2" size={20} color="#4A5568" />
              <Text style={styles.menuText}>Trash</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="settings" size={20} color="#4A5568" />
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerBrand}>SmartNote</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: "row",
  },
  backgroundDimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  sidebarContainer: {
    width: width * 0.75,
    height: "100%",
    backgroundColor: "#F8FAFC",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 60,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
    position: "absolute",
    left: 0,
  },
  profileSection: {
    marginBottom: 40,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginBottom: 16,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1A202C",
    marginRight: 6,
  },
  emailText: {
    fontSize: 13,
    color: "#718096",
    marginBottom: 12,
  },
  premiumBadge: {
    fontSize: 10,
    fontWeight: "800",
    color: "#0056D2",
    letterSpacing: 0.5,
  },
  menuSection: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  menuItemActive: {
    backgroundColor: "#EBF3FF",
  },
  menuText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4A5568",
    marginLeft: 16,
  },
  menuTextActive: {
    color: "#0056D2",
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 20,
    marginBottom: 20,
  },
  footer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  footerBrand: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0056D2",
  },
});
