import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Actress List',
            // headerStyle: { backgroundColor: '#10AB9F'}
        }
    }, 
    Reviews: {
        screen: Reviews,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#10AB9F'}
        }
    }
}

const HomeStack = createStackNavigator (screens, { 
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#10AB9F', height: 60}
    }
});

export default createAppContainer(HomeStack);