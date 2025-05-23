import { StyleSheet, View, Text } from "react-native";

const MenuComponent = (props) => {
	return (
		<View style={styles.menuComponent}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	menuComponent: {
		// height: 20,
		padding: 10,
		alignItems: "center",
		backgroundColor: "lightblue",
		borderRadius: 20,
	},
});
export default MenuComponent;
