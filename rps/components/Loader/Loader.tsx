import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./Loader.style";

import * as Animatable from "react-native-animatable";

const Loader = ({ setLoading }) => {
	const texts = ["Rock ...", "Paper ...", "Scissors ..."];
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [currentText, setCurrentText] = useState(texts[currentTextIndex]);
	const [animatedLetters, setAnimatedLetters] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
			setCurrentText(texts[currentTextIndex]);
		}, 1000);

		setTimeout(() => setLoading(false), 3009);

		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		setCurrentText(texts[currentTextIndex]);
	}, [currentTextIndex]);

	useEffect(() => {
		const letters = currentText.split("");
		setAnimatedLetters(letters);
	}, [currentText]);

	const renderAnimatedText = (item, index) => {
		return (
			<Animatable.Text
				animation="bounceInUp"
				iterationCount={"infinite"}
				easing="ease-out"
				style={styles.text}
				key={index}
			>
				{item}
			</Animatable.Text>
		);
	};

	return (
		<Animatable.View style={styles.main}>
			{animatedLetters.map((letter, index) =>
				renderAnimatedText(letter, index)
			)}
		</Animatable.View>
	);
};

export default Loader;
