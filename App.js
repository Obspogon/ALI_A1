import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MenuComponent from "./MenuComponent";
import MixComponent from "./MixComponent";
import AlbumComponent from "./AlbumComponent";

export default function App() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.menuBar}>
				<MenuComponent text="All" />
				<MenuComponent text="Mixes" />
				<MenuComponent text="Albums" />
				<MenuComponent text="Audiobooks" />
			</View>
			<Text style={[styles.text, styles.header]}>Mixes</Text>
			<View style={styles.mixLayout}>
				<MixComponent name="For You" />
				<MixComponent name="Trending" />
				<MixComponent name="Friends Mix" />
				<MixComponent name="Rock" />
				<MixComponent name="Pop" />
			</View>
			<Text style={[styles.text, styles.header]}>Albums</Text>
			<View style={styles.albumLayout}>
				<AlbumComponent name="Undertale OST" />
				<AlbumComponent name="Bad" />
				<AlbumComponent name="In The End" />
				<AlbumComponent name="Deltarune OST" />
			</View>
			<Text style={[styles.text, styles.header]}>Audiobooks</Text>
			<StatusBar style="auto" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		paddingTop: 50,
		paddingLeft: 50,
		paddingRight: 50,
	},
	header: {
		fontSize: 20,
		fontWeight: 500,
	},
	text: { fontSize: 15, color: "#fff" },
	menuBar: {
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 5,
		flexWrap: "nowrap",
	},
	mixLayout: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		gap: 5,
	},
	albumLayout: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
