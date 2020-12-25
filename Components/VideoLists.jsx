import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Dimensions,
	Pressable,
} from "react-native";
import VIDEODATA from "../Components/videoData";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ListView = ({ name, videoURL }) => {
	const videoSelected = () => {
		videoURL();
	};
	return (
		<Pressable onPress={videoSelected}>
			<View style={styles.listview}>
				<View style={{ marginRight: 20 }}>
                <FontAwesome5 name="file-video" size={40} color="#2e2e2e" />
				</View>
				<Text style={{ fontSize: 20 }}>{name}</Text>
			</View>
		</Pressable>
	);
};

export default function VideoLists({ navigation }) {
	const videoPlay = (value) => {
		navigation.navigate("videoPlayer", {
			videourl: value,
		});
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={VIDEODATA}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<ListView
						name={item.name}
						videoURL={() => videoPlay(item.videourl)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listview: {
		width: width,
		height: 60,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		marginBottom: 20,
		backgroundColor: "white",
		flexDirection: "row",
		paddingLeft: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 5,
        elevation: 10,
        marginBottom:height/55,
        borderRadius:15,
        backgroundColor:'#ffffff'
	},
	container: {
		backgroundColor: "#d8dde3",
		width: width,
        height: height,
       paddingTop:height/25
	},
});
