import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1
    },
    titleText: {
      fontFamily: 'nunito-bold',
      fontSize: 20,
      color: '#333'
    },
    paragraph: {
        marginVertical: 10,
        lineHeight: 20
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6
    }
 });

 export const images = {
  ratings: {
     '1': require('../assets/rating-1.png'),
     '2': require('../assets/rating-2.png'),
     '3': require('../assets/rating-3.png'),
     '4': require('../assets/rating-4.png'),
     '5': require('../assets/rating-5.png'),
   }
 }