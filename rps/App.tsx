import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, PlayScreen } from "./Screens";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Welcome" component={HomeScreen} />
				<Stack.Screen
					name="Play"
					component={PlayScreen}
					options={{ headerBackTitleVisible: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
