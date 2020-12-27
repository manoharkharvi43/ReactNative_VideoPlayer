import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VideoPlayer from "./Components/VideoPlayer";
import VideoScreen from "./Components/VideoScreen";
const stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<stack.Navigator initialRouteName="videoscreen">
				<stack.Screen
					name="videoPlayer"
					component={VideoPlayer}
					options={{ headerShown: false }}
				></stack.Screen>

				<stack.Screen
					name="videoscreen"
					component={VideoScreen}
					options={{ headerShown: false }}
				></stack.Screen>
			</stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
