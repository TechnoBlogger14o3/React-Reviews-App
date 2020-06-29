import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Home({ navigation }) {

  const pressHandler = () => {
    // navigation.navigate('Reviews');
    navigation.push('Reviews');
  }

  return (
    <View style={globalStyles.container}>
      <Text style = {globalStyles.titleText}>Home Screen</Text>
      <Button 
        title = 'Go to Review Screen' onPress={pressHandler}/>
    </View>
  );
}

