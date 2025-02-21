import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function MapScreen() {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: "https://yandex.ru/maps/?ll=50.175625,53.212194&z=17" }}
                style={{ flex: 1 }}
            />
        </View>
    );
}
