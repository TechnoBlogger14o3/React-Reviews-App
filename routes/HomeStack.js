import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';

const screens = {
    Home: {
        screen: Home
    }, 
    Reviews: {
        screen: Reviews
    }
}

const HomeStack = createStackNavigator (screens);

export default createAppContainer(HomeStack);