import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useState } from "react";

const events = [
    {
        title: "Проблемы прочности авиационных конструкций и материалов",
        date: "26.02.2025 - 28.02.2025",
        description: "На IV Всероссийской научно-практической конференции \"Проблемы прочности авиационных конструкций и материалов\" в числе прочих вопросов планируется обсудить проблемы использования углепластиков в силовых авиационных конструкциях и проблемы обоснования их прочности",
        link: "https://ssau.ru/events/1434-iv-vserossiyskaya-nauchno-prakticheskaya-konferentsiya-problemy-prochnosti-aviatsionnykh-konstruktsiy-i-materialov"
    },
    {
        title: "Аэрокосмическое приборостроение и эксплуатационные технологии",
        date: "08.04.2025 - 25.04.2025",
        description: "Цель мероприятия обмен опытом и консолидация усилий представителей образования, науки и производства для реализации технологического прорыва",
        link: "https://ssau.ru/events/1412-mezhdunarodnaya-nauchnaya-konferentsiya-aerokosmicheskoe-priborostroenie-i-ekspluatatsionnye-tekhnologii"
    },
    {
        title: "LXXV Молодёжная научная конференция",
        date: "8–10 апреля 2025 года",
        description: "Конференция, посвященная 80-й годовщине Победы в ВОВ и 105-летию со дня рождения В.П. Лукачёва.",
        link: "https://ssau.ru/events/1437-lxxv-molodezhnaya-nauchnaya-konferentsiya-samarskogo-universiteta-posvyashchennaya-80-y-godovshchine-pobedy-v-velikoy-otechestvennoy-voyne-i-105-letiyu-so-dnya-rozhdeniya-vp-lukacheva"
    },
    {
        title: "XXII Всероссийская научно-техническая конференция с международным участием \"Высокие технологии в машиностроении\"",
        date: "09.04.2025 - 11.04.2025",
        description: "Цель мероприятия: обсуждение перспективных направлений исследований в области машиностроения и обмен опытом практического использования современных достижений в производстве и образовании.",
        link: "https://ssau.ru/events/4"
    },
    {
        title: "LI Самарская областная студенческая научная конференция",
        date: " 14.04.2025 - 25.04.2025",
        description: "Конференция является ежегодным мероприятием, обобщающим достижения студентов в сфере научных исследований по естественным, общественным, техническим и гуманитарным дисциплинам.",
        link: "https://ssau.ru/events/1436-li-samarskaya-oblastnaya-studencheskaya-nauchnaya-konferentsiya"
    },
    {
        title: "VIII Всероссийская научная конференция с международным участием \"Информационные технологии в моделировании и управлении: подходы, методы, решения\"",
        date: "22.04.2025 - 24.04.2025",
        description: "Тольятти, Тольяттинский государственный университет",
        link: "https://ssau.ru/events/1411-viii-vserossiyskaya-nauchnaya-konferentsiya-s-mezhdunarodnym-uchastiem-informatsionnye-tekhnologii-v-modelirovanii-i-upravlenii-podkhody-metody-resheniya"
    }
];

export default function EventsScreen() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {events.map((event, index) => (
                <View key={index} style={styles.eventContainer}>
                    <TouchableOpacity onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                    </TouchableOpacity>
                    {expandedIndex === index && (
                        <View style={styles.eventDetails}>
                            <Text style={styles.eventDate}>{event.date}</Text>
                            <Text style={styles.eventDescription}>{event.description}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(event.link)}>
                                <Text style={styles.eventLink}>Подробнее</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: "#f0f8ff" },
    header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#0056b3" },
    eventContainer: { backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
    eventTitle: { fontSize: 20, fontWeight: "bold", color: "#007BFF" },
    eventDetails: { marginTop: 10 },
    eventDate: { fontSize: 16, fontWeight: "600", color: "#333" },
    eventDescription: { fontSize: 16, marginTop: 5, color: "#444" },
    eventLink: { fontSize: 16, color: "#007BFF", marginTop: 5 }
});
