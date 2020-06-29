import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Reviews({navigation}) {

  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>Rating is {navigation.getParam('rating')}</Text>
    </View>
  );
}
