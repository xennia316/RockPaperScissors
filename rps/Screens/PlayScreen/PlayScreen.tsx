import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./PlayScreen.style";
import { Loader } from "../../components";

const image1 = require("../../assets/images/scissors.png");
const image2 = require("../../assets/images/rock.png");
const image3 = require("../../assets/images/paper.png");
const questionMark = require("../../assets/images/questionMark.png");

const PlayScreen = () => {
	const [playerVal, setPlayerVal] = useState(image1);
	const [computerVal, setComputerVal] = useState(image2);
	const [playerScore, setPlayerScore] = useState(0);
	const [compScore, setCompScore] = useState(0);
	const [winner, setWinner] = useState("");
	const [loading, setLoading] = useState(false);

	const logic = (playerVal: string, computerVal: string) => {
		if (playerVal === computerVal) {
			return 0;
		} else if (
			(playerVal === "ROCK" && computerVal === "SCISSORS") ||
			(playerVal === "SCISSORS" && computerVal === "PAPER") ||
			(playerVal === "PAPER" && computerVal === "ROCK")
		) {
			return 1;
		} else {
			return -1;
		}
	};

	const decision = (playerChoice: string) => {
		setLoading(true);

		const choices = ["ROCK", "PAPER", "SCISSORS"];
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		const val = logic(playerChoice, compChoice);

		if (val === 1) {
			setPlayerVal(playerChoice);
			setComputerVal(compChoice);
			setPlayerScore(playerScore + 1);
		} else if (val === -1) {
			setPlayerVal(playerChoice);
			setComputerVal(compChoice);
			setCompScore(compScore + 1);
		} else {
			setComputerVal(compChoice);
			setPlayerVal(playerChoice);
		}
	};

	const restart = () => {
		setPlayerVal(questionMark);
		setComputerVal(image2);
		setCompScore(0);
		setPlayerScore(0);
		setWinner("");
	};

	useEffect(() => {
		if (playerScore > compScore) {
			setWinner("You are winning!");
		} else if (playerScore < compScore) {
			setWinner("You're loosing");
		} else if (playerScore === compScore) {
			setWinner("It's a tie, try again");
		}
	}, [playerVal, computerVal]);

	return (
		<View style={styles.main}>
			<View style={[styles.subMain, styles.shadowProp]}>
				{loading && <Loader setLoading={setLoading} />}
				{!loading && (
					<>
						<TouchableOpacity
							onPress={() => {
								restart();
							}}
							style={styles.restart}
						>
							<Text style={styles.restartTxt}>Restart</Text>
						</TouchableOpacity>
						<Text style={[styles.winner, styles.name]}>{winner}</Text>
						<View>
							<View style={styles.playing}>
								<View>
									<Image
										style={styles.img}
										source={
											playerVal === "ROCK"
												? image2
												: playerVal === "SCISSORS"
												? image1
												: playerVal === "PAPER"
												? image3
												: questionMark
										}
									/>
									{/* <Text>You</Text> */}
								</View>
								<View>
									<Image
										style={styles.img}
										source={
											computerVal === "ROCK"
												? image2
												: computerVal === "SCISSORS"
												? image1
												: computerVal === "PAPER"
												? image3
												: questionMark
										}
									/>
									{/* <Text>Computer</Text> */}
								</View>
							</View>
						</View>
						<View>
							<Text style={styles.winner}>Score</Text>
							<View style={styles.score}>
								<Text style={styles.scoreText}>{playerScore}</Text>
								<Text style={styles.scoreText}>{compScore}</Text>
							</View>
						</View>
						<View style={styles.playing}>
							<TouchableOpacity onPress={() => decision("SCISSORS")}>
								<Image style={styles.img} source={image1} />
							</TouchableOpacity>

							<TouchableOpacity onPress={() => decision("PAPER")}>
								<Image style={styles.img} source={image3} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => decision("ROCK")}>
								<Image style={styles.img} source={image2} />
							</TouchableOpacity>
						</View>
					</>
				)}
			</View>
		</View>
	);
};

export default PlayScreen;
