import { StyleSheet, View, Text, Image } from "react-native";

const AudiobookComponent = (props) => {
	return (
		<View style={styles.audiobookComponent}>
			<Image style={styles.albumImage} source={require("./assets/book.png")} />
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	audiobookComponent: {
		padding: 7,
		backgroundColor: "lightblue",
		borderRadius: 10,
	},
	text: { fontSize: 15, color: "#000" },
	audiobookImage: {
		height: 100,
		width: 100,
		borderWidth: 2,
		borderColor: "#000",
	},
});
export default AudiobookComponent;
