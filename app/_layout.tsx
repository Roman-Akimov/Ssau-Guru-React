import { Drawer } from "expo-router/drawer";

function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerStyle: { backgroundColor: "rgba(0,81,255,0.85)" }, // Синий хедер
                headerTintColor: "#fff", // Белый текст в хедере
                drawerActiveTintColor: "#002aff", // Синий активный элемент
                drawerInactiveTintColor: "#333", // Темно-серый неактивный
                drawerLabelStyle: { fontSize: 18, fontWeight: "bold" },
                drawerStyle: { backgroundColor: "#F0F8FF", width: 300 }, // Светло-голубой фон меню
                drawerItemStyle: { paddingVertical: 12 }, // Увеличил отступы
            }}
        >

            <Drawer.Screen name="index" options={{ title: "🏠 Ssau Guru" }} />
            <Drawer.Screen name="events" options={{ title: "📅 События" }} />
            <Drawer.Screen name="map" options={{ title: "🗺 Карта" }} />
            <Drawer.Screen name="3dmap" options={{ title: "3D Карта университета" }} />
            <Drawer.Screen name="knowledge" options={{ title: "📖 База знаний" }} />
            <Drawer.Screen name="mentorship" options={{ title: "🤝 Менторство" }} />
            <Drawer.Screen name="contacts" options={{ title: "📞 Контакты дирекции" }} />
            <Drawer.Screen name="settings" options={{ title: "⚙️ Настройки" }} />
        </Drawer>
    );
}

export default Layout;
