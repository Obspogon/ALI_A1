import { StyleSheet, View, Image, Text } from "react-native";

export default function AlbumComponent(props) {
	return (
		<View style={styles.albumComponent}>
			<Image style={styles.albumImage} source={require("./assets/album.png")} />
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	albumComponent: {},
	text: { fontSize: 15, color: "#fff" },
	albumImage: {
		height: 80,
		width: 80,
		borderWidth: 2,
		borderColor: "#000",
	},
});
