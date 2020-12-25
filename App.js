import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from './Components/VideoPlayer'
import VideoLists from './Components/VideoLists'

const stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <stack.Navigator initialRouteName='videoLists'>
        <stack.Screen name='videoLists' component={VideoLists}></stack.Screen>
        <stack.Screen name='videoPlayer' component={VideoPlayer}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
