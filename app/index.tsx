import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("C:\\Users\\Рома Акимов\\SsauGuru\\assets\\images\\Firm blocks_centre_Eng.png")} style={styles.image} />
            <Text style={styles.subtitle}>Имени академика С.П. Королёва</Text>

            <Text style={styles.description}>
                Один из ведущих научно-образовательных центров России, готовящий специалистов в области
                авиации, космонавтики и цифровых технологий.
            </Text>
            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Что Вас ждёт в приложении?</Text>
            <View style={styles.features}>
                <FeatureItem emoji="📅" text="Актуальные события университета" />
                <FeatureItem emoji="🗺" text="Интерактивная карта кампуса" />
                <FeatureItem emoji="📖" text="Полезные материалы и ресурсы" />
                <FeatureItem emoji="🤝" text="Программа менторства" />
                <FeatureItem emoji="📞" text="Контакты и справочная информация" />
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Быстрый доступ</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/events")}>
                <Text style={styles.buttonText}>📅 События</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/map")}>
                <Text style={styles.buttonText}>🗺 Карта университета</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Полезные ссылки</Text>
            <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL("https://lk.ssau.ru/")}>
                <Text style={styles.linkText}>    🌐  Личный кабинет   </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL("https://ssau.ru/rasp")}>
                <Text style={styles.linkText}>📅 Расписание занятий</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const FeatureItem = ({ emoji, text }: { emoji: string; text: string }) => (
    <View style={styles.featureItem}>
        <Text style={styles.featureEmoji}>{emoji}</Text>
        <Text style={styles.featureText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: "center", backgroundColor: "#f0f8ff" },
    image: { width: "100%", height: 240, resizeMode: "cover", borderRadius: 12, marginBottom: 20 },
    title: { fontSize: 36, fontWeight: "bold", color: "#007BFF", textAlign: "center", marginBottom: 5 },
    subtitle: { fontSize: 26, color: "#0056b3", textAlign: "center", fontWeight: "500", marginBottom: 15 },
    description: { fontSize: 20, textAlign: "center", color: "#333", marginBottom: 25, paddingHorizontal: 15},
    sectionTitle: { fontSize: 24, fontWeight: "bold", color: "#0056b3", marginBottom: 14 },
    divider: { width: "90%", height: 2, backgroundColor: "#007BFF", marginVertical: 18 },
    features: { width: "100%", marginBottom: 20 },
    featureItem: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
    featureEmoji: { fontSize: 28, marginRight: 12 },
    featureText: { fontSize: 20, color: "#333" },
    button: { backgroundColor: "#007BFF", paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, marginVertical: 6 },
    buttonText: { fontSize: 20, color: "white", fontWeight: "bold" },
    linkButton: { backgroundColor: "#f0f0f0", paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, marginVertical: 6, borderWidth: 1, borderColor: "#007BFF" },
    linkText: { fontSize: 20, color: "#007BFF", fontWeight: "bold" },
});
