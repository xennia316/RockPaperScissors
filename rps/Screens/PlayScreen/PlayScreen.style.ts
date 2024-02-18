import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#e5d4fb",
		width: "100%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	subMain: {
		width: "95%",
		height: "95%",
		backgroundColor: "white",
		borderRadius: 36,
		flexDirection: "column",
		justifyContent: "space-around",
		padding: 24,
	},
	shadowProp: {
		shadowColor: "#7D29EA",
		shadowOffset: { width: -10, height: 12 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	winner: {
		textAlign: "center",
		fontWeight: "bold",
		color: "#000",
		fontSize: 16,
	},
	playing: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	score: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 48,
	},
	scoreText: {
		fontSize: 48,
		fontWeight: "bold",
		color: "#7D29EA",
	},
	restart: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: "#7D29EA",
		borderRadius: 36,
		position: "absolute",
		right: 12,
		top: 12,
		zIndex: 1999,
		opacity: 0.7,
	},

	restartTxt: {
		color: "white",
		fontWeight: "600",
	},
	name: {
		color: "#be94f5",
		fontSize: 24,
	},
});

export default styles;
