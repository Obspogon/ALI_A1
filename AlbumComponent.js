import { StyleSheet, View, Image, Text } from "react-native";

export default function AlbumComponent() {
	return (
		<View style={styles.albumComponent}>
			<Image style={styles.albumImage} source={require("./assets/album.png")} />
			<Text style={styles.text}>Album name</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	albumComponent: {},
	text: { fontSize: 15, color: "#fff" },
	albumImage: {
		height: 100,
		width: 100,
		borderWidth: 2,
		borderColor: "#000",
	},
});
