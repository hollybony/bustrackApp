import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Alert
} from 'react-native';
import FormTextInput from './FormTextInput';
import LinkButton from './LinkButton';
import AppText from './AppText';
import * as globalStyles from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'carloantonioj@gmail.com',
      password: 'the-pass',
      connected: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      loading: nextProps.auth.loading,
      errors: nextProps.auth.errors,
      response: nextProps.auth.response
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.handleConnectivityChange);
  }

  handleConnectivityChange(isConnected) {
    this.setState({
      connected: isConnected
    });
  }

  handleEmailChange(email) {
    this.setState({ email: email });
  }

  handlePasswordChange(password) {
    this.setState({ password: password });
  }

  //TODO validate whether async is necessary here
  handleSubmit = event => {
    event.preventDefault();
    console.log('Handle submit.');
    if (this.state.connected) {
      this.props.loadToken({
        usernameOrEmail: this.state.email,
        password: this.state.password
      });
    } else {
      Alert.alert('There is no connection.');
    }
    //await AsyncStorage.setItem('userToken', 'abc');
    //
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const listStyles = globalStyles.COMMON_STYLES.pageContainer;
    const { loading, errors, response } = this.state;
    if (response) {
      console.log('sign in response');
      console.log(response);
      AsyncStorage.setItem("token", response).then(() => this.props.navigation.navigate('App'));
    }
    return (
      loading ? (
        <View style={[listStyles, styles.loadingContainer]}>
          <ActivityIndicator
            animating
            size="small"
            {...this.props}
          />
        </View>
      ) : (
          <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
            <AppText>Bustrack App</AppText>
            <View style={styles.form}>
              <FormTextInput
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder="User name or Email"
              />
              <FormTextInput
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder="Password"
              />
              <LinkButton onPress={this.handleSubmit}>Sign In</LinkButton>
              <LinkButton onPress={this.goToSignUp}>Create account</LinkButton>
            </View>
            <Text>{errors}</Text>
          </View>
        )
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