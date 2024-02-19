import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	body: {
		height: "100%",
		width: "100%",
		flex: 1,
		alignSelf: "flex-start",
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "white",
	},

	btn: {
		backgroundColor: "#7D29EA",
		height: 44,
		width: "80%",
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.7,
		marginBottom: 48,
	},

	image: {
		// resizeMode: "center",
		alignSelf: "flex-end",
	},
	btnText: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold",
		fontFamily: "",
	},
});

export default styles;
