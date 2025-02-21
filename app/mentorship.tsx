import { View, Text, TouchableOpacity, Linking, FlatList } from "react-native";
import {center} from "maath/buffer";

const mentorshipRequests = [
    { urgency: "Средняя срочность", title: "Помощь в изучении ООП", type: "ООП", date: "22.02.2025" },
    { urgency: "Высокая срочность", title: "Разобраться с React", type: "Frontend", date: "21.02.2025" },
    { urgency: "Низкая срочность", title: "Алгоритмы и структуры данных", type: "Алгоритмы", date: "18.02.2025" },
    { urgency: "Средняя срочность", title: "Подготовка к экзамену", type: "Math", date: "16.02.2025" },
];

export default function MentorshipScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#F0F8FF", padding: 15 }}>
            <Text style={{ color: "#1e73ea", fontSize: 43, textAlign: "center", fontWeight: "bold" }}>Студенческое менторство </Text>
            <Text style={{ fontSize: 20, textAlign: "center", color: "#333", marginBottom: 10, fontWeight: "bold" }}>
                <Text style={{ color: "#007BFF", fontSize: 20 }}>{"\n"}Менторство</Text> — это возможность получить помощь от опытных студентов.{"\n"}
                {"\n"}Cайт, где можно увидеть все актуальные заявки и стать ментором.
            </Text>

            {/* Кнопка перехода на сайт */}
            <TouchableOpacity
                onPress={() => Linking.openURL("https://mentorship.ssau.ru")}
                style={{
                    backgroundColor: "#007BFF",
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Перейти на сайт</Text>
            </TouchableOpacity>

            <FlatList
                data={mentorshipRequests}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: "#fff",
                            padding: 15,
                            borderRadius: 10,
                            width: "48%",
                            marginBottom: 15,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            elevation: 3,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#FFECB3", // Легко-желтая оболочка
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 5,
                                alignSelf: "flex-start",
                                marginBottom: 5,
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#D2691E" }}>
                                {item.urgency}
                            </Text>
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5, color: "#333" }}>{item.title}</Text>
                        <Text style={{ fontSize: 16, color: "#555", marginTop: 3 }}>
                            Тип: {item.type}, Дата: {item.date}
                        </Text>

                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://mentorship.ssau.ru")}
                            style={{
                                backgroundColor: "#007BFF",
                                paddingVertical: 10,
                                borderRadius: 5,
                                marginTop: 10,
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Откликнуться</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
