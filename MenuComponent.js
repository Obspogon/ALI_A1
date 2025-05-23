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
		flex: 1,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#555",
		borderRadius: 50,
	},
});
