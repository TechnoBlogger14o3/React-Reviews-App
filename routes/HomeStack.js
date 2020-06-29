import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title = 'Actress List'/>,
            }
        }
    }, 
    Reviews: {
        screen: Reviews,
        navigationOptions: {
            title: 'Review Details',
        }
    },
};

const HomeStack = createStackNavigator (screens, { 
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#10AB9F', height: 60}
    }
});

export default HomeStack;