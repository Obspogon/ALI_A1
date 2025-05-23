import { StyleSheet, View, Image, Text } from "react-native";

export default function MixComponent(props) {
	return (
		<View style={styles.mixComponent}>
			<Image style={styles.mixImage} source={require("./assets/album.png")} />
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mixComponent: {
		flex: 1 / 2,
		flexDirection: "row",
		flexWrap: "nowrap",
		alignItems: "center",
		backgroundColor: "#555",
		borderRadius: 10,
		padding: 7,
		gap: 5,
	},
	mixImage: {
		height: 25,
		width: 25,
	},
});
