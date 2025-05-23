import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const AudiobookComponent = (props) => {
	return (
		<View style={styles.audiobookComponent}>
			<ImageBackground style={styles.audiobookImage} source={require("./assets/book.png")}>
				<Text style={styles.text}>{props.name}</Text>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	audiobookComponent: {
		padding: 7,
		backgroundColor: "lightblue",
		borderRadius: 10,
	},
	text: {
		fontSize: 15,
		color: "#000",
		backgroundColor: "lightblue",
	},
	audiobookImage: {
		height: 100,
		width: 100,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
});
export default AudiobookComponent;
