import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const[fontsLoaded, setFontsloaded] = useState(false)

  if(fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading
        startAsync = {getFonts}
        onFinish = {() => setFontsloaded(true)}
      />
    )
  }

 
}
