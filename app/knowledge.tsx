import { View, Text, FlatList, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import { MaterialIcons } from "@expo/vector-icons";

const categories = [
    { id: "1", title: "Учебные материалы", files: [] },
    { id: "2", title: "Лабораторные работы", files: [] },
    { id: "3", title: "Методические пособия", files: [] },
    { id: "4", title: "Видеоуроки", files: [] },
    { id: "5", title: "Советы по учебе", files: [] },
];

const sampleFiles = [
    { name: "Учебник.pdf", url: "https://example.com/book.pdf", type: "pdf" },
    { name: "Лабораторная.zip", url: "https://example.com/lab.zip", type: "zip" },
    { name: "Видео.mp4", url: "https://example.com/video.mp4", type: "video" },
];

const fileIcons = {
    pdf: { name: "picture-as-pdf", color: "#FFB6C1" }, // Нежный розовый
    zip: { name: "archive", color: "#87CEFA" }, // Нежно-голубой
    video: { name: "video-library", color: "#98FB98" }, // Нежно-зеленый
    default: { name: "insert-drive-file", color: "blue" },
};

function FileItem({ file }) {
    return (
        <TouchableOpacity style={{ flexDirection: "row", padding: 10 }} onPress={() => Linking.openURL(file.url)}>
            <MaterialIcons name={fileIcons[file.type]?.name || fileIcons.default.name} size={30} color={fileIcons[file.type]?.color || fileIcons.default.color} />
            <Text style={{ marginLeft: 10, fontSize: 18 }}>{file.name}</Text>
        </TouchableOpacity>
    );
}

export default function KnowledgeBase() {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>📂 {item.title}</Text>
                        {sampleFiles.map((file, index) => (
                            <FileItem key={index} file={file} />
                        ))}
                    </View>
                )}
            />
        </View>
    );
}
