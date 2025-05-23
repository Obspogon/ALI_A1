import { StyleSheet, View, Image, Text } from "react-native";

export default function MixComponent() {
	return (
		<View style={styles.mixComponent}>
			<Image style={styles.mixImage} source={require("./assets/album.png")} />
			<Text style={styles.text}>Mix name</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mixComponent: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#555",
		borderRadius: 15,
	},
	mixImage: {
		height: 25,
		width: 25,
	},
});
