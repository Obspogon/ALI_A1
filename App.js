import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={[styles.header, styles.text]}>Albums</Text>
			<View style={styles.albumLayout}>
				<View style={styles.albumComponent}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={styles.albumComponent}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={styles.albumComponent}>
					<Image style={styles.albumImage} source={require("./assets/album.png")} />
					<Text style={styles.text}>Album name</Text>
				</View>
				<View style={styles.albumComponent}>
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
		flex: 1,
		flexWrap: "wrap",
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
	albumLayout: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	albumComponent: {
		flex: 1,
		flexDirection: "column",
		flexWrap: "wrap",
	},
	albumImage: {
		height: 100,
		width: "100%",
		borderWidth: 2,
		borderColor: "#000",
	},
});
