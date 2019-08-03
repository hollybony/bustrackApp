import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './components/SignInScreen';
import HomeScreen from './components/HomeScreen';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import OtherScreen from './components/OtherScreen';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Other: OtherScreen
    });

const AuthStack = createStackNavigator(
    { SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));