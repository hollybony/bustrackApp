import React from "react";
import {
  View,
  StyleSheet
} from "react-native";
import Button from './Button';
import Title from './Title';
import * as globalStyles from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Bustrack!',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
        <Title>Home</Title>
        <Button onPress={this._showMoreApp}>Show me more of the app</Button>
        <Button onPress={this._signOutAsync}>Actually, sign me out :)</Button>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    console.log('clearing async storage');
    await AsyncStorage.clear();
    this.props.removeToken();
    console.log('going to auth...');
    this.props.navigation.navigate('SignIn');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
