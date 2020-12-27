import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ActivityIndicator,
	LogBox,
} from "react-native";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function VideoPlayer({ videourls, id }) {
	useEffect(() => {
		LogBox.ignoreAllLogs();
	}, []);
	const videoRef = useRef(null);

	return (
		<View style={styles.videoContainer} key={id}>
			<View style={styles.loaderContainer}>
				<ActivityIndicator size={60} color="dodgerblue" />
			</View>
			<Video
				source={{ uri: videourls }}
				rate={1.0}
				volume={1.0}
				isMuted={false}
				resizeMode="cover"
				shouldPlay={false}
				isLooping={false}
				usePoster
				ref={videoRef}
				useNativeControls={true}
				style={{
					width: width / 1.1,
					height: height / 3.2,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	videoContainer: {
		width: width / 1.1,
		height: height / 3.2,
		margin: 0,
		width: width / 1.1,
		height: height / 3.2,
		shadowColor: "grey",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 1.3,
		elevation: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: 10,
		backgroundColor: "black",
	},
	loaderContainer: {
		position: "absolute",
		left: 0,
		right: 0,
		top: height / 9,
		bottom: 0,
	},
});
