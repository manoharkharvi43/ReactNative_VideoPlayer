import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

export default function VideoPlayer({ navigation, route }) {
	const width = Dimensions.get("window").width;
	const height = Dimensions.get("window").height;
	const { videourl } = route.params;

	useEffect(() => {
		toLandscape();
		return () => {
			toPotrait();
		};
	}, []);

	const toLandscape = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE
		);
	};
	const toPotrait = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT
		);
	};
	return (
		<View style={styles.videoContainer}>
			<Video
				source={{ uri: videourl }}
				rate={1.0}
				volume={1.0}
				isMuted={false}
				resizeMode="cover"
				shouldPlay={false}
				isLooping={false}
				usePoster
				useNativeControls
				onFullscreenUpdate
				// onPlaybackStatusUpdate={(AVPlaybackStatus)=>console.log(AVPlaybackStatus.isBuffering())}
				style={{
					width: height/1,
					height: width/1.1,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	videoContainer: {
		marginTop: Constants.statusBarHeight,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
