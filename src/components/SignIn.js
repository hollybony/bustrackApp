import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Alert
} from 'react-native';
import FormTextInput from './FormTextInput';
import FormPwdInput from './FormPwdInput';
import LinkButton from './LinkButton';
import Button from './Button';
import Title from './Title';
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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      loading: nextProps.signIn.loading,
      errors: nextProps.signIn.errors,
      response: nextProps.signIn.response
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

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.connected) {
      this.props.loadToken({
        usernameOrEmail: this.state.email,
        password: this.state.password
      });
    } else {
      Alert.alert('There is no connection.');
    }
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const listStyles = globalStyles.COMMON_STYLES.pageContainer;
    const { loading, errors, response } = this.state;
    if (response) {
      AsyncStorage.setItem('userToken', response).then(() => this.props.navigation.navigate('App'));
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
            <Title>Bustrack App</Title>
            <View style={styles.form}>
              <FormTextInput
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder="User name or Email"
              />
              <FormPwdInput
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder="Password"
              />
              <LinkButton onPress={this.handleSubmit}>Sign In</LinkButton>
              <Button onPress={this.goToSignUp}>Create account</Button>
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