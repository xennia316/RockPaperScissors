import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./PlayScreen.style";

const image2 = require("../../assets/images/rock.png");
const image3 = require("../../assets/images/paper.png");
const image1 = require("../../assets/images/scissors.png");

const PlayScreen = () => {
	return (
		<View style={styles.main}>
			<View style={[styles.subMain, styles.shadowProp]}>
				<Text style={styles.winner}>Winner is:</Text>
				<View>
					<View style={styles.playing}>
						<View>
							<Image source={image1} />
							{/* <Text>You</Text> */}
						</View>
						<View>
							<Image source={image2} />
							{/* <Text>Computer</Text> */}
						</View>
					</View>
				</View>
				<View>
					<Text style={styles.winner}>Score</Text>
					<View style={styles.score}>
						<Text style={styles.scoreText}>0</Text>
						<Text style={styles.scoreText}>0</Text>
					</View>
				</View>
				<View style={styles.playing}>
					<TouchableOpacity>
						<Image source={image1} />
					</TouchableOpacity>

					<TouchableOpacity>
						<Image source={image3} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image source={image2} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default PlayScreen;
