import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MenuComponent from "./MenuComponent";
import MixComponent from "./MixComponent";
import AlbumComponent from "./AlbumComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.menuBar}>
				<MenuComponent />
				<MenuComponent />
			</View>
			<Text style={[styles.header, styles.text]}>Albums</Text>
			<View style={styles.albumLayout}>
				<AlbumComponent />
				<AlbumComponent />
				<AlbumComponent />
				<AlbumComponent />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
		paddingLeft: 50,
		paddingRight: 50,
	},
	header: {
		fontSize: 20,
		fontWeight: 500,
	},
	text: { fontSize: 15 },
	menuBar: {
		flexDirection: "row",
		flexWrap: "nowrap",
	},
	albumLayout: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
