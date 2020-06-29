import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card';

export default function Reviews({navigation}) {

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>Rating is {navigation.getParam('rating')}</Text>
      </Card>
    </View>
  );
}




