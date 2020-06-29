import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Reviews({navigation}) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>Reviews Screen</Text>
      <Button 
        title = 'Back to Home Screen'
        onPress = {pressHandler}
      />
    </View>
  );
}
