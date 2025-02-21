import { View, Text, Linking, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const contacts = [
    { icon: "location-on", label: "Адрес", value: "Московское шоссе, д. 34, г. Самара, 443086" },
    { icon: "phone", label: "Приемная ректора", value: "(846) 335-18-26", link: "tel:+78463351826" },
    { icon: "print", label: "Факс", value: "(846) 335-18-36" },
    { icon: "phone", label: "Приемная комиссия", value: "8 (800) 550-34-35", link: "tel:+78005503435" },
    { icon: "language", label: "Сайт", value: "www.ssau.ru/priem", link: "https://www.ssau.ru/priem" },
    { icon: "email", label: "E-mail (приемная комиссия)", value: "priem@ssau.ru", link: "mailto:priem@ssau.ru" },
    { icon: "phone", label: "Канцелярия", value: "(846) 267-43-70", link: "tel:+78462674370" },
    { icon: "email", label: "E-mail", value: "ssau@ssau.ru", link: "mailto:ssau@ssau.ru" }
];

export default function ContactsScreen() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Контакты</Text>
            {contacts.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => item.link && Linking.openURL(item.link)} disabled={!item.link}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                        <MaterialIcons name={item.icon} size={28} color="#007AFF" style={{ marginRight: 10 }} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.label}</Text>
                            <Text style={{ fontSize: 16, color: item.link ? "#007AFF" : "#333" }}>{item.value}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
