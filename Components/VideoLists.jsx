import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Dimensions,
	Pressable,
	SafeAreaView,
} from "react-native";
import VIDEODATA from "../Components/videoData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Single list view
const ListView = ({ name, videoURL }) => {
	const videoSelected = () => {
		videoURL();
	};
	return (
		<Pressable onPress={videoSelected}>
			<View style={styles.listview}>
				<View style={{ marginRight: 10 }}>
					<MaterialCommunityIcons name="file-video" size={35} color="black" />
				</View>
				<Text style={{ fontSize: 20 }}>{name}</Text>
			</View>
		</Pressable>
	);
};

//seperator

const Seperator = () => {
	return <View style={{ backgroundColor: "#c9c9c9", height: 1 }}></View>;
};

export default function VideoLists({ navigation }) {
	const videoPlay = (value) => {
		navigation.navigate("videoPlayer", {
			videourl: value,
		});
	};
	return (
		<SafeAreaView>
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
					ItemSeparatorComponent={() => <Seperator />}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	listview: {
		width: width,
		height: 60,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "white",
		flexDirection: "row",
		backgroundColor: "#ffffff",
	},
	container: {
		backgroundColor: "#d8dde3",
		width: width,
		height: height,
		elevation: 10,
	},
});
