import React from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import AppText from './AppText';
import FormTextInput from './FormTextInput';
import * as globalStyles from '../styles/global';
import LinkButton from './LinkButton';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in to continue...',
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(email){
    this.setState({ email: email });
  }

  handlePasswordChange(password){
    this.setState({ password: password });
  }

  handleLoginPress = async () => {
    console.log("Login button pressed");
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
        <AppText>Bustrack App</AppText>
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder="Email"
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder="Password"
          />
          <LinkButton onPress={this.handleLoginPress}>Sign In</LinkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});