import { StyleSheet, View, Text } from "react-native";

export default function MenuComponent(props) {
	return (
		<View style={styles.menuComponent}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	menuComponent: {
		// height: 20,
		padding: 10,
		alignItems: "center",
		backgroundColor: "#555",
		borderRadius: 20,
	},
});
