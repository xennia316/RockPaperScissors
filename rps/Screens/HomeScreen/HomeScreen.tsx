import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./HomeScreen.style";
import { useNavigation } from "@react-navigation/native";

const imageUrl = require("../../assets/images/Game 😂.png");

const HomeScreen = () => {
	const navigation = useNavigation<any>();
	return (
		<ImageBackground
			style={styles.body}
			source={imageUrl}
			imageStyle={styles.image}
		>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("Play");
				}}
			>
				<Text style={styles.btnText}>Let's Play -&gt; </Text>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default HomeScreen;
