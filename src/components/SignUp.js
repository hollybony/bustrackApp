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

export default class Signup extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "carlos-juarez",
      email: "carloantonioj@gmail.com",
      password: "the-pass",
      serviceId: "12345678"
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('an object of new props');
    // console.log(nextProps);
    // console.log('The current (old) props');
    // console.log(prevState);
    // if ((!!nextProps.signUp && !!prevState.signUp) && nextProps.signUp.loading !== prevState.signUp.loading ||
    //   nextProps.signUp.errors !== prevState.signUp.errors ||
    //   nextProps.signUp.response !== prevState.signUp.response) {
    return {
      loading: nextProps.signUp.loading,
      errors: nextProps.signUp.errors,
      response: nextProps.signUp.response
    };
    // }
    // return null;
  }

  handleUsernameChange = username => {
    this.setState({ username: username });
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  }

  handlePasswordChange = password => {
    this.setState({ password: password });
  }

  handleServiceIdChange = serviceId => {
    this.setState({ serviceId: serviceId });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('About to register');
    this.props.registerUser(this.state);
  }

  renderResponse(response) {
    if (response) {
      Alert.alert(
        'Information',
        `Hi ${response.name} you have been registered, please go to your email inbox
       in order to verify your email address.`,
        [
          { text: 'OK', onPress: () => this.props.navigation.navigate('SignIn') },
        ]
      );
    }
  }

  render() {
    const listStyles = globalStyles.COMMON_STYLES.pageContainer;
    const { loading, errors, response } = this.state;
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
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
                placeholder="User name"
              />
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
              <FormTextInput
                value={this.state.serviceId}
                onChangeText={this.handleServiceIdChange}
                placeholder="Service Id"
              />
              <LinkButton onPress={this.handleSubmit}>Sign Up</LinkButton>
            </View>
            <Text>{errors}</Text>
            {this.renderResponse(response)}
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
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});