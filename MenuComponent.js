import { StyleSheet, View, Text } from "react-native";

export default function MenuComponent() {
	return (
		<View style={styles.menuComponent}>
			<Text style={styles.text}>Tab</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	menuComponent: {
		// height: 20,
		padding: 10,
		alignItems: "center",
		backgroundColor: "#555",
		borderRadius: 50,
	},
});
