import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={[styles.header, styles.text]}>Albums</Text>
			<View style={styles.albumLayout}>
				<View style={{ width: "100%", flex: 1 }}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={{ width: "100%", flex: 1 }}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={{ width: "100%", flex: 1 }}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={{ width: "100%", flex: 1 }}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 50,
	},
	header: { fontSize: 20, fontWeight: 500 },
	text: { fontSize: 15 },
	albumImage: { height: 100, width: 100, borderWidth: 2, borderColor: "#000" },
	albumLayout: { flexDirection: "row", flexWrap: "wrap" },
});
