import { StyleSheet, View, Text, Image } from "react-native";

export default function AudiobookComponent(props) {
	return (
		<View style={styles.audiobookComponent}>
			<Image style={styles.albumImage} source={require("./assets/book.png")} />
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: { fontSize: 15, color: "#fff" },
	audiobookImage: {
		height: 100,
		width: 100,
		borderWidth: 2,
		borderColor: "#000",
	},
});
