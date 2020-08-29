import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text ,TouchableOpacity, Image} from 'react-native';

const AUDIO_URL = require('../assets/000128.mp3');
const ICON = require('../assets/icon.png');

export default function App() {

const handlePlay = async () =>{
  try {
    await Audio.Sound.createAsync(
      AUDIO_URL,
      { shouldPlay: true }
    );
  } catch (error) {
    // An error occurred!
  }
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>pwa with expo</Text>
      <TouchableOpacity onPress={handlePlay}>
        <Image style={styles.logo} source={ICON} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#20063B",
    flex: 1,
    justifyContent: 'center',
  },
  text:{
    color:"#9AD1D4",
    fontSize:"2rem",
    fontWeight:"bold",
    padding:"2rem",
    justifyContent:"flex-start",
    textTransform:"uppercase"
  },
  logo: {
    height: 108,
    width: 108,
  }
});