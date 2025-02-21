import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Linking, Button } from "react-native";

<Button title="Открыть карту" onPress={() => Linking.openURL("https://3d.ssau.ru/")} />


export default function MapScreen() {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: "https://3d.ssau.ru/" }}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    webview: { flex: 1 },
});
