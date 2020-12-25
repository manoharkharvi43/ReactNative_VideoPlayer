import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;
export default function VideoPlayer({navigation,route }) {

    const {videourl} = route.params;
	return (
		<View>
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
				style={{
					width: width,
					height: 300,
					borderColor: "black",
					borderWidth: 1,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
