import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);

  const[reviews, setReviews] = useState([
    { title: 'Jennifer Lawrence', rating: 5, body: 'Jennifer Shrader Lawrence was born August 15, 1990 in Louisville, Kentucky, to Karen (Koch), who manages a childrens camp, and Gary Lawrence, who works in construction. She has two older brothers, Ben and Blaine, and has English, German, Irish, and Scottish ancestry', key: '1'},
    { title: 'Alexandra Daddrio', rating: 4, body: 'Alexandra Anna Daddario was born on March 16, 1986 in New York City, New York, to Christina, a lawyer, and Richard Daddario, a prosecutor. Her brother is actor Matthew Daddario, her sister is actor Catharine Daddario, and her grandfather was congressman Emilio Daddario (Emilio Q. Daddario), of Connecticut.', key: '2'},
    { title: 'Dakota Johnsson', rating: 3, body: 'Dakota Mayi Johnson is an American actress and fashion model. She was born in Austin, Texas, and is the daughter of actors Don Johnson and Melanie Griffith. Her maternal grandmother is actress Tippi Hedren. In 1999, she made her film debut in Crazy in Alabama (1999)', key: '3'},
  ]);

  const addReview = (reviews) => {
    reviews.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [reviews, ...currentReviews];   
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType = 'slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style = {styles.modelContent}>
            <MaterialIcons 
              name = 'close'
              size = {24}
              style = {{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}  
            />
            <ReviewForm addReview = {addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
        name = 'add'
        size = {24}
        style = {styles.modalToggle}
        onPress={() => setModalOpen(true)}  
      />
      <FlatList
        data = {reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress = {() => navigation.navigate('Reviews', item)}>
            <Card>
              <Text style = {globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
          
        )}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  }, 
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }, 
  modelContent: {
    flex: 1,
  }
})