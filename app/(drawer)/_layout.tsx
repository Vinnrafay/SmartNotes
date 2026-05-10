import { Feather } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import CustomSidebar from "../../components/CustomSidebar";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomSidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: { width: "80%", backgroundColor: "transparent" },
        drawerActiveTintColor: "#2563eb", // Warna biru pas menu dipilih
        drawerInactiveTintColor: "#64748b", // Warna abu-abu pas menu gak dipilih
        drawerLabelStyle: { fontWeight: "700", marginLeft: -10 },
      }}>
      <Drawer.Screen
        name="profile"
        options={{
          drawerItemStyle: { display: "none" }, 
          drawerLabel: () => null, 
          title: "Profil Saya",
        }}
      />
      {/* ALL NOTES */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "All Notes",
          drawerIcon: ({ color }) => (
            <Feather name="file-text" size={20} color={color} />
          ),
        }}
      />

      {/* FAVORITES */}
      <Drawer.Screen
        name="favorites"
        options={{
          drawerLabel: "Favorites",
          drawerIcon: ({ color }) => (
            <Feather name="star" size={20} color={color} />
          ),
        }}
      />

      {/* ARCHIVE */}
      <Drawer.Screen
        name="archive"
        options={{
          drawerLabel: "Archive",
          drawerIcon: ({ color }) => (
            <Feather name="archive" size={20} color={color} />
          ),
        }}
      />

      {/* TRASH */}
      <Drawer.Screen
        name="trash"
        options={{
          drawerLabel: "Trash",
          drawerIcon: ({ color }) => (
            <Feather name="trash-2" size={20} color={color} />
          ),
        }}
      />

      {/* SETTINGS (Halaman setting lu kalau ada) */}
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <Feather name="settings" size={20} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
