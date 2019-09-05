import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import OtherScreen from './components/OtherScreen';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Other: OtherScreen
    });

const AuthStack = createStackNavigator(
    {
        SignIn: SignInContainer,
        SignUp: SignUpContainer}
    );

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